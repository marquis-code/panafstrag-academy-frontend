<template>
  <main class="app">
    <LoadSpinner v-if="showHideSpinner" />
    <navigation-bar />
    <Nuxt />
    <footer-component />
  </main>
</template>

<script>
import NavigationBar from '@/components/NavigationBar.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import LoadSpinner from '@/components/LoadSpinner.vue'
export default {
  components: { NavigationBar, FooterComponent, LoadSpinner },
  data() {
    return {
      showHideSpinner: true
    }
  },
  beforeCreate() {
    this.showHideSpinner = true
  },
  mounted() {
    setTimeout(() => {
      this.showHideSpinner = false
    }, 3000)
  }
}
</script>

<style>
.app {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
</style>
