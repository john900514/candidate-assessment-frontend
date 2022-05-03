<template>
  <Head>
    <Link
      href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&amp;display=swap"
      rel="stylesheet"
    />
    <Link
      href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i&amp;display=swap"
      rel="stylesheet"
    />
  </Head>
  <div class="min-h-screen overflow-hidden">
    <div class="relative overflow-hidden bg-primary from-gray-50 to-white">
      <div class="relative">
        <default-header />
      </div>
    </div>
    <NuxtPage />
    <default-footer />
  </div>
</template>

<script setup>
import "noty/lib/noty.css";
import "noty/lib/themes/sunset.css";
</script>

<style scoped></style>
