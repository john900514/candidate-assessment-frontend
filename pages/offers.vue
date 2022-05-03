<template>
  <div id="landing" class="bg-slate-600 py-24 px-16">
    <div class="section-heading text-center mb-20">
      <h1 class="text-black text-5xl md:text-6xl font-black tracking-wide">
        MEMBERSHIP BENEFITS
      </h1>
    </div>

    <div id="segmentWrapper flex flex-col">
      <div class="segment-row row-left flex flex-col md:flex-row">
        <div class="media-wrapper text-center">
          <img
            src="offers-something-for-everyone.png"
            class="img-img row-img-left"
            alt="Program"
          />
        </div>

        <div class="verbiage-wrapper text-center">
          <h2 class="text-2xl my-4">THERE'S SOMETHING FOR EVERYONE</h2>
          <p>
            Each of our clubs offers the latest fitness equipment and programs.
            What really makes us different is our professional, member-oriented
            staff. It's our job to do whatever we can to help our members
            improve the quality of their life through fitness, recreation, and
            fun.
          </p>
          <a
            class="border-transparent text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-bold uppercase tracking-wide text-secondary"
            href="/about"
            ><i class="lar la-user text-xl mr-2 text-secondary font-bold"></i>
            READ MORE <i class="las la-chevron-double-right"></i>
          </a>
        </div>
      </div>
      <div class="segment-row row-right flex flex-col md:flex-row-reverse pt-8">
        <div class="media-wrapper text-center">
          <img
            src="offers-superior.png"
            class="img-img row-img-right"
            alt="Program"
          />
        </div>

        <div class="verbiage-wrapper text-center">
          <h2 class="text-2xl my-4">SUPERIOR QUALITY, SUPERIOR VALUE</h2>
          <p>
            We are strongly committed to providing services for and actively
            engaging our members in programs and activities for all ages and
            ability levels.
          </p>
        </div>
      </div>
      <div class="segment-row row-left flex flex-col md:flex-row pt-8">
        <div class="media-wrapper text-center">
          <img
            src="offers-3day-pass.png"
            class="img-img row-img-left"
            alt="Program"
          />
        </div>

        <div class="verbiage-wrapper text-center">
          <h2 class="text-2xl my-4">Complimentary 3-Day Pass</h2>
          <p>
            Nothing can replace a first-hand look. During your complimentary
            visit to the club, you can enjoy AMAZING NEW equipment, a variety of
            GROUP FITNESS classes, relax by the indoor or outdoor pool and on
            your way out enjoy a refreshing beverage at THE Café!
          </p>
          <a
            class="border-transparent text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-bold uppercase tracking-wide text-secondary"
            href="/free-pass"
            ><i class="lar la-user text-xl mr-2 text-secondary font-bold"></i>
            READ MORE <i class="las la-chevron-double-right"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ["prefooter"],
  data() {
    return {
      slideComponents: {
        CarouselSlide1: {},
      },
    };
  },
  mounted() {},
};
</script>

<style scoped></style>
