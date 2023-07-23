<template>
  <main class="mb-6">
    <div class="flex items-center space-x-4 w-10/12 mx-auto">
      <div>
        <img src="https://aarweb.org/images/Icons/icon-news.png" class="h-16 w-16" alt="">
      </div>
      <h2 class="text-xl">
        Events
      </h2>
    </div>
    <section  v-if="academyEvents.length"
      class="grid grid-cols-1 space-y-10 md:space-y-0 lg:grid-cols-3 mx-auto max-w-screen-xl md:border-r-8 md:border-r-green-500 md:border-b-8 md:border-b-green-500 divide-x divide-gray-800 pb-6 mb-10">
      <div>
        <article v-for="(event, index) in academyEvents" :key="index" class="overflow-hidden px-4">
          <img alt="Office" :src="require(`@/assets/img/${event.programImageUrl}`)"
            class="h-56 w-full object-cover border">

          <div class="p-4 sm:p-6 border-b border-x border-gray-300 rounded-b-md space-y-3">
            <a href="#">
              <h3 class="text-base md:text-sm font-bold text-gray-900">
                {{ event.programTitle }}
              </h3>
            </a>

            <a href="#">
              <h3 class="text-base my-3 md:text-sm font-medium text-gray-900 truncate">
                {{ event.programDescription }}
              </h3>
            </a>

            <p class="text-xs mt-2 line-clamp-3 md:text-sm/relaxed text-gray-500">
              {{ event.programDescription }}
            </p>

            <button
              class="group mt-4 rounded-full px-6 py-2 shadow-lg inline-flex items-center gap-1 text-sm md:text-base font-medium text-green-600 bg-white">
              {{ event.actionText }}
            </button>
          </div>
        </article>
      </div>
    </section>
    <div v-else class="mt-3 w-10/12 mx-auto">
      <div class="">
        <b-skeleton animation="fade" width="100%"></b-skeleton>
        <b-skeleton animation="fade" width="100%"></b-skeleton>
        <b-skeleton animation="fade" width="100%"></b-skeleton>
        <b-skeleton animation="fade" width="100%"></b-skeleton>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      academyEvents: []
    }
  },
  created() {
    this.loadEvents()
  },
  methods: {
    async loadEvents() {
      this.loading = true
      try {
        const response = await this.$axios.get('https://academy-api-service.onrender.com/api/event')
        this.academyEvents = response?.data
      } catch (error) {
        if (error.response) {
          this.$toast.error(error.response.data.errorMessage).goAway(1500)
          this.loading = false
        } else if (error.request) {
          this.loading = false
        } else {
          this.loading = false
        }
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style></style>
