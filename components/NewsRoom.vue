<template>
  <main>
    <div>
      <section class="">
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div class="flex items-center space-x-4">
            <div>
              <img src="https://aarweb.org/images/Icons/icon-news.png" class="h-16 w-16" alt="">
            </div>
            <h2 class="text-xl">
              Newsroom
            </h2>
          </div>
          <div v-if="academyNewsRooms.length">
            <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              <a v-for="(newsRoom, index) in academyNewsRooms" :key="index"
                class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                href="/services/digital-campaigns">
                {{ newsRoom.date }}

                <h2 class="mt-4 text-xl font-bold">{{ newsRoom.title }}</h2>

                <p class="mt-1 text-sm">
                  {{ newsRoom.content }}
                </p>
              </a>
            </div>
            <div class="mt-12 text-start">
              <nuxt-link to="/newsroom"
                class="inline-block border rounded-full bg-white px-12 py-3 shadow-md  text-sm font-medium text-green-600 transition hover:bg-pink-700 focus:outline-none">
                VISIT THE NEWSROOM
              </nuxt-link>
            </div>
          </div>
          <div v-else class="mt-3">
            <div class="w-11/12 mx-auto">
              <b-skeleton animation="fade" width="100%"></b-skeleton>
              <b-skeleton animation="fade" width="100%"></b-skeleton>
              <b-skeleton animation="fade" width="100%"></b-skeleton>
              <b-skeleton animation="fade" width="100%"></b-skeleton>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      academyNewsRooms: []
    }
  },
  created() {
    this.loadNewsRoom()
  },
  methods: {
    async loadNewsRoom() {
      this.loading = true
      try {
        const response = await this.$axios.get('https://academy-api-service.onrender.com/api/news-room')
        this.academyNewsRooms = response?.data
      } catch (error) {
        if (error.response || error.request) {
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
