<template>
  <div id="content" class="bg-slate-500 pt-[30%] md:pt-[15%] pb-12 md:pb-32">
    <div class="section-heading text-center pt-8 pb-12">
      <h1
        class="text-4xl md:text-6xl uppercase font-black tracking-wide pb-8 text-black"
      >
        Free Trial
      </h1>
      <div id="mediaWrapper">
        <img src="free-pass-header.png" id="bannerImg" alt="Banner Image" />
      </div>
    </div>

    <div class="section-heading text-center pt-8 pb-12 mx-12 md:mx-40">
      <p class="text-left text-xl text-black">
        Nothing can replace a first-hand look. During your complimentary visit
        to the club, you can enjoy AMAZING NEW equipment, a variety of GROUP
        FITNESS classes, relax by the indoor or outdoor pool and on your way out
        enjoy a refreshing beverage at THE Café!
      </p>
      <form >
        <div
          class="flex flex-col md:flex-wrap md:flex-row mx-4 my-12 justify-between"
        >
          <div class="form-group md:w-[50%] md:pr-4 pt-4 md:pt-0">
            <input
              type="text"
              class="w-full bg-white rounded-[0px] border-black text-black"
              placeholder="First Name"
              required
            />
          </div>
          <div class="form-group md:w-[50%] pt-4 md:pt-0">
            <input
              type="text"
              class="w-full bg-white rounded-[0px] border-black text-black"
              placeholder="Last Name"
              required
            />
          </div>
          <div class="form-group md:w-[50%] pt-4 md:pr-4">
            <input
              type="email"
              class="w-full bg-white rounded-[0px] border-black text-black"
              placeholder="Email Address"
              required
            />
          </div>
          <div class="form-group md:w-[50%] pt-4">
            <input
              type="text"
              class="w-full bg-white rounded-[0px] border-black text-black"
              placeholder="Mobile Phone"
              required
            />
          </div>
        </div>

        <div class="form-group pt-1 mx-4">
          <select
            class="w-full  rounded-[0px]"
            required
          >
            <option value="">Select a Club</option>
            <option v-for="{ club_name, club_id } in locations" :Value="id">{{ club_name }}</option>
          </select>

          <div class="pt-8">
            <input type="checkbox" required />
            <label class="pl-4"
              >I hereby consent to receive phone, text and email messages from
              or on behalf of The Athletic Club at the telephone number and
              email provided. I understand that consent is not a condition of
              purchase.</label
            >
          </div>
        </div>

        <div class="pt-8">
          <button
            type="submit"
            class="btn btn-secondary uppercase h-20 text-xl tracking-widest px-12"
            :disabled="loading"
          >
            Get a Free Visit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>


<script setup>
let loading = false;
const { data: locations } = await useFetch("/api/locations");

const handleSubmit = () => {
  loading = true;
  const response = true;

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
input{
    @apply input;
}
select{
    @apply select;
}
input[type=checkbox]{
    @apply checkbox;
}
</style>
