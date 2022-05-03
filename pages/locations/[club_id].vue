<template>

  <enroll-now-banner />
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
