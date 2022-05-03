<template>
  <div class="mt-32 flex flex-col items-center gap-32">
    <h1 class="text-6xl">CONTACT US</h1>
    <form @submit.prevent="handleSubmit" class="flex flex-col gap-4 mb-2">
      <div class="form-control">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="form.name" />
      </div>
      <div class="form-control">
        <label for="name">Email</label>
        <input type="email" id="email" v-model="form.email" />
      </div>
      <div class="form-control">
        <label for="name">Phone</label>
        <phone-input id="phone" v-model="form.phone" />
      </div>
      <div class="form-control">
        <label for="name">Message</label>
        <textarea id="message" v-model="form.message" />
      </div>
      <button type="submit" class="btn btn-secondary">Submit</button>
    </form>
  </div>
</template>

<script setup>
import Noty from "noty";

let loading = false;

const form = reactive({
  name: "",
  email: "",
  phone: "",
  message: "",
});

const handleSubmit = async () => {
  loading = true;
  const response = await $fetch("/api/contact", {
    method: "POST",
    body: form,
  });

  if (response) {
    new Noty({
      theme: "sunset",
      type: "success",
      text: "Success. We will contact you soon!",
    }).show();
    loading = false;
  } else {
    new Noty({
      theme: "sunset",
      type: "error",
      text: "An error occurred - " + err,
    }).show();
    loading = false;
  }
};
</script>
<style scoped>
form {
  @apply w-[20rem];
}
.form-control {
  @apply flex flex-col gap-1;
}

input {
  @apply input input-bordered;
}
textarea {
  @apply textarea textarea-bordered;
}
.form-error {
  @apply text-red text-sm;
}
</style>
