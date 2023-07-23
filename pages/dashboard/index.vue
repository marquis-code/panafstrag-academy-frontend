<template>
  <Transition name="fade">
    <div class="w-full px-3 h-screen sticky top-0 overflow-y-auto md:px-14 py-6 space-y-10 bg-slate-50">
      <div
        class="background md:flex md:justify-between md:flex-row flex flex-col-reverse md:items-center bg-white rounded-lg py-4 space-y-6 md:space-y-0">
        <div class="pl-10 space-y-2 py-6 md:py-0">
          <h1 class="font-bold text-gray-200 text-2xl">
            Analytics
          </h1>
          <p class="text-sm text-gray-200 font-light">
            Dashboard statistics overview
          </p>
        </div>
      </div>

      <section class="">
        <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div
              class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 flex items-center space-x-3">
              <div v-if="membersLength !== null" class="rounded-md bg-green-200 p-3 flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <b-skeleton height="50px" v-else type="button"></b-skeleton>
              <div v-if="membersLength !== null">
                <h2 class="text-gray-400 text-sm">
                  Total Members
                </h2>
                <h2 class="mt-1 text-xl font-bold ">
                  {{ membersLength }}
                </h2>
              </div>
              <div v-else class="w-full">
                <b-skeleton animation="fade" width="100%"></b-skeleton>
                <b-skeleton animation="fade" width="50%"></b-skeleton>
              </div>
            </div>

            <div
              class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 flex items-center space-x-3">
              <div v-if="eventsLength !== null" class="rounded-md bg-green-200 p-3 flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <b-skeleton height="50px" v-else type="button"></b-skeleton>
              <div v-if="eventsLength !== null">
                <h2 class="text-gray-400 text-sm">
                  Total Events
                </h2>
                <h2 class="mt-1 text-xl font-bold ">
                  {{ eventsLength }}
                </h2>
              </div>
              <div v-else class="w-full">
                <b-skeleton animation="fade" width="100%"></b-skeleton>
                <b-skeleton animation="fade" width="50%"></b-skeleton>
              </div>
            </div>


            <div
              class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 flex items-center space-x-3">
              <div v-if="newsRoomLength !== null" class="rounded-md bg-green-200 p-3 flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <b-skeleton height="50px" v-else type="button"></b-skeleton>
              <div v-if="newsRoomLength !== null">
                <h2 class="text-gray-400 text-sm">
                  Total News Room
                </h2>
                <h2 class="mt-1 text-xl font-bold ">
                  {{ newsRoomLength }}
                </h2>
              </div>
              <div v-else class="w-full">
                <b-skeleton animation="fade" width="100%"></b-skeleton>
                <b-skeleton animation="fade" width="50%"></b-skeleton>
              </div>
            </div>

            <div
              class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 flex items-center space-x-3">
              <div v-if="supportLength !== null" class="rounded-md bg-green-200 p-3 flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <b-skeleton height="50px" v-else type="button"></b-skeleton>
              <div v-if="supportLength !== null">
                <h2 class="text-gray-400 text-sm">
                  Total Supports
                </h2>
                <h2 class="mt-1 text-xl font-bold ">
                  {{ supportLength }}
                </h2>
              </div>
              <div v-else class="w-full">
                <b-skeleton animation="fade" width="100%"></b-skeleton>
                <b-skeleton animation="fade" width="50%"></b-skeleton>
              </div>
            </div>


            <div
              class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 flex items-center space-x-3">
              <div v-if="productLength !== null" class="rounded-md bg-green-200 p-3 flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <b-skeleton height="50px" v-else type="button"></b-skeleton>
              <div v-if="productLength !== null">
                <h2 class="text-gray-400 text-sm">
                  Total Products
                </h2>
                <h2 class="mt-1 text-xl font-bold ">
                  {{ productLength }}
                </h2>
              </div>
              <div v-else class="w-full">
                <b-skeleton animation="fade" width="100%"></b-skeleton>
                <b-skeleton animation="fade" width="50%"></b-skeleton>
              </div>
            </div>


            <div
              class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 flex items-center space-x-3">
              <div v-if="subscriptionLength !== null"
                class="rounded-md bg-green-200 p-3 flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <b-skeleton height="50px" v-else type="button"></b-skeleton>
              <div v-if="subscriptionLength !== null">
                <h2 class="text-gray-400 text-sm">
                  Total Subscriptions
                </h2>
                <h2 class="mt-1 text-xl font-bold ">
                  {{ subscriptionLength }}
                </h2>
              </div>
              <div v-else class="w-full">
                <b-skeleton animation="fade" width="100%"></b-skeleton>
                <b-skeleton animation="fade" width="50%"></b-skeleton>
              </div>
            </div>


            <div
              class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 flex items-center space-x-3">
              <div v-if="publicationsLength !== null"
                class="rounded-md bg-green-200 p-3 flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <b-skeleton height="50px" v-else type="button"></b-skeleton>
              <div v-if="publicationsLength !== null">
                <h2 class="text-gray-400 text-sm">
                  Total Publications
                </h2>
                <h2 class="mt-1 text-xl font-bold ">
                  {{ publicationsLength }}
                </h2>
              </div>
              <div v-else class="w-full">
                <b-skeleton animation="fade" width="100%"></b-skeleton>
                <b-skeleton animation="fade" width="50%"></b-skeleton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- <div> -->
      <div v-if="!loading" class="rounded-md shadow-sm border p-3">
        <client-only>
          <BarChart :data="chartData" />
        </client-only>
      </div>
      <div v-else class="rounded-md shadow-sm border p-3 w-full">
        <b-skeleton animation="fade" width="85%"></b-skeleton>
        <b-skeleton animation="fade" width="55%"></b-skeleton>
        <b-skeleton animation="fade" width="70%"></b-skeleton>
      </div>
      <!-- </div> -->
    </div>
  </Transition>
</template>

<script>
import DashboardHeader from '@/components/DashboardHeader'
export default {
  name: 'Dashboard',
  components: {
    DashboardHeader
  },
  layout: 'dashboardLayout',
  scrollToTop: true,
  data() {
    return {
      eventsLength: null,
      publicationsLength: null,
      newsRoomLength: null,
      membersLength: null,
      supportLength: null,
      subscriptionLength: null,
      productLength: null,
      loading: true
      // statList: [
      //   {
      //     item: 'Total Members',
      //     count: this.membersLength ?? 0
      //   },
      //   {
      //     item: 'Total Events',
      //     count: this.membersLength ?? 0
      //   },
      //   {
      //     item: 'Total News Rooms',
      //     count: this.newsRoomLength ?? 0
      //   },
      //   {
      //     item: 'Total Support',
      //     count: this.supportLength ?? 0
      //   },
      //   {
      //     item: 'Total Store Items',
      //     count: this.productLength ?? 0
      //   },
      //   {
      //     item: 'Total Subscriptions',
      //     count: this.subscriptionLength ?? 0
      //   },
      //   {
      //     item: 'Total Publications',
      //     count: this.publicationsLength ?? 0
      //   }
      // ]
    }
  },
  computed: {
    chartData() {
      return {
        labels: ['Members', 'Events', 'News room', 'Supports', 'Store Items', 'Subscriptions', 'Publications'],
        datasets: [
          {
            label: '',
            data: [this.membersLength, this.eventsLength, this.newsRoomLength, this.supportLength, this.productLength, this.subscriptionLength, this.publicationsLength],
            backgroundColor: 'rgba(20, 255, 0, 0.3)',
            borderColor: 'rgba(100, 255, 0, 1)',
            borderWidth: 2
          }
        ]
      }
    }
  },
  created() {
    this.fetchStatistics()
    if (!this.$store?.state?.app?.isLoggedIn || '') {
      this.$router.push('/admin')
    } else {
      this.fetchStatistics()
    }
  },
  methods: {
    async fetchStatistics() {
      this.loading = true
      const token = this.$store?.state?.app?.auth?.accessToken || ''
      const defaultOptions = {
        headers: {
          Authorization: token ? `JWT ${token}` : ''
        }
      }
      try {
        await Promise.all([
          this.$axios.get(
            '/event', defaultOptions
          ),
          this.$axios.get(
            '/publication', defaultOptions
          ),
          this.$axios.get(
            '/news-room', defaultOptions
          ),
          this.$axios.get(
            '/member', defaultOptions
          ),
          this.$axios.get(
            '/support', defaultOptions
          ),
          this.$axios.get(
            '/subscription', defaultOptions
          ),
          this.$axios.get(
            '/product', defaultOptions
          )
        ]).then((res) => {
          this.eventsLength = res[0].data.length
          this.publicationsLength = res[1].data.length
          this.newsRoomLength = res[2].data.length
          this.membersLength = res[3].data.length
          this.supportLength = res[4].data.length
          this.subscriptionLength = res[5].data.length
          this.productLength = res[6].data.length
        })
      } catch (error) {
        console.log(error)
      } finally {
        this.loading = false
      }
    },
    handleOpenSidebar() {
      this.openSidebar = !this.openSidebar
    },
    handleLogout() {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, logout!'
      }).then((result) => {
        if (result.value) {
          this.Logout(id)
        } else {
          this.$swal('Cancelled', "You're still logged in!", 'info')
        }
      })
    },
    async Logout() {
      localStorage.removeItem('userId')
      this.$swal('Logged Out!', 'You have successfully logged out.', 'success')
    }
  }
}
</script>

<style scoped>
.background {
  background-image: url('@/assets/img/analytics.jpg');
  background-size: cover;
}

.fade-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}

.fade-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.fade-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.fade-leave-to {
  transform: scale(0.8);
}

.background {
  background-image: url('@/assets/img/analytics.jpg');
  background-size: cover;
}
</style>
