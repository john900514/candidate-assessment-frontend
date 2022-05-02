<template>
  <div class="mt-32 flex flex-col items-center gap-32">
    <h1 class="text-6xl">CONTACT US</h1>
    <form @submit.prevent="handleSubmit" class="flex flex-col gap-4 mb-2">
      <div class="form-control">
        <label for="name">Name</label>
        <input type="text" id="name" />
        <!-- <div v-if="form.errors.name" class="form-error">
          {{ form.errors.name }}
        </div> -->
      </div>
      <div class="form-control">
        <label for="name">Email</label>
        <input type="email" id="email" />
        <!-- <div v-if="form.errors.email" class="form-error">
          {{ form.errors.email }}
        </div> -->
      </div>
      <div class="form-control">
        <label for="name">Phone</label>
        <phone-input id="phone" />
        <!-- <div v-if="form.errors.phone" class="form-error">
          {{ form.errors.phone }}
        </div> -->
      </div>
      <div class="form-control">
        <label for="name">Message</label>
        <textarea id="message" />
        <!-- <div v-if="form.errors.message" class="form-error">
          {{ form.errors.message }}
        </div> -->
      </div>
      <button type="submit" class="btn btn-outline">Submit</button>
    </form>
    <!-- /* button {
  @apply p-4 bg-blue-500 rounded-sm;
} */ -->
  </div>
</template>

<script setup></script>

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
textarea{
    @apply textarea textarea-bordered;
}
.form-error {
  @apply text-red text-sm;
}
</style>
