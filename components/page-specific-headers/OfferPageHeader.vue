<template>
  <ClientOnly>
    <Carousel>
      <Slide :key="1">
        <div class="carousel__item">
          <OfferPageCarouselSlide1 />
        </div>
      </Slide>
      <template #addons>
        <Pagination />
      </template>
    </Carousel>
  </ClientOnly>
</template>

<script setup>
import { Carousel, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
</script>

<style>
.carousel {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.carousel__viewport {
  height: 100%;
  width: 100%;
}

.carousel__track {
  height: 100%;
  width: 100%;
}

.carousel__item {
  height: 100%;
  width: 100%;
  background-color: transparent;
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
}

.carousel__slide {
  padding: 0px;
  height: 100%;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}

.carousel__pagination {
  position: absolute;
  top: 95%;
}
</style>
