<template>
  <!-- <template #layoutExtraHead> -->

  <div class="w-full h-2/5 bg-slate-600 pt-[30%] md:pt-[15%] banner-bg">
    <div class="text-center pb-36">
      <h2
        class="text-4xl md:text-7xl uppercase text-secondary font-black tracking-wider"
      >
        {{ location["club_name"] }}
      </h2>
      <p class="tracking-wider uppercase pt-4 font-bold text-black">
        <span>{{ location["address1"] + ", " }}</span>
        <br class="sm:inline-block md:hidden" />
        <span
          >{{ location["city"] + "," }} {{ location["state"] }}
          {{ location["zip_code"] + " " }}
        </span>
        <br class="sm:inline-block md:hidden" />
        <span class="pl-2 md:inline-block hidden"> | </span>
        <span> {{ " " + location["phone"] }} </span>
      </p>
    </div>
  </div>
  <club-hours :hours="location.hours" />
  <!-- </template> -->
</template>

<style scoped>
.banner-bg {
  background-image: url(/Hero-BG-2x.jpeg);
}
</style>

<script setup>
const route = useRoute();

const { data: location } = await useFetch(
  `/api/locations/${route.params.club_id}`
);
</script>
