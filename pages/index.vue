<template>
  <section>
    <main>
      <introduction-component />
      <latest-news />
      <news-room />
      <about-us />
      <events />
    </main>
  </section>
</template>

<script>
import IntroductionComponent from '@/components/IntroductionComponent.vue'
import NewsRoom from '@/components/NewsRoom.vue'
import AboutUs from '@/components/AboutUs.vue'
import Events from '@/components/Events.vue'
import LatestNews from '@/components/LatestNews.vue'
export default {
  components: {
    IntroductionComponent,
    NewsRoom,
    AboutUs,
    Events,
    LatestNews
  },
  scrollToTop: true
}
</script>
<style></style>
