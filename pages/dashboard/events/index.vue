<template>
  <section>
    <Transition name="fade">
      <div class="w-full">
        <div :class="[showClaimModal ? 'z-0' : '']"
          class="px-3 w-full h-screen sticky top-0 overflow-y-auto md:px-14 py-6 space-y-10 bg-slate-50">
          <div
            class="background md:flex md:justify-between md:flex-row flex flex-col-reverse md:items-center bg-white rounded-lg py-4 space-y-6 md:space-y-0">
            <div class="pl-10 space-y-2 py-6 md:py-0">
              <h1 class="font-bold text-gray-200 text-2xl">
                Events Analytics
              </h1>
              <p class="text-sm text-gray-200 font-light">
                Events statistics overview
              </p>
            </div>
          </div>

          <div class="md:flex justify-between items-center space-y-6 md:space-y-0">
            <div class="border border-gray-100 lg:w-9/12 py-2.5 rounded-lg bg-white relative">
              <input type="search" placeholder="Search event"
                class="w-full placeholder-gray-400 outline-none pl-10 text-xs font-medium">
              <img class="absolute top-4 left-4" src="@/assets/img/searchIcon.svg" alt="">
            </div>

            <div class="flex px-4 py-2.5 justify-center md:justify-start items-center border border-gray-400 rounded-lg">
              <label for="SortBy" class="block text-xs font-medium text-gray-700">
                Filters by :
              </label>

              <select id="SortBy" class="mt-1 rounded border-gray-300 text-xs border-none outline-none font-medium">
                <option class="font-medium text-sm">
                  All Events
                </option>
                <option class="font-medium text-sm" value="Active">
                  Active Events
                </option>
                <option class="font-medium text-sm" value="Inactive">
                  Upcoming Events
                </option>
                <option class="font-medium text-sm" value="Inactive">
                  Completed Events
                </option>
              </select>
            </div>
          </div>

          <div>
            <div class="overflow-x-auto">
              <div class="w-full overflow-x-scroll">
                <b-skeleton-wrapper :loading="loading">
                  <template #loading>
                    <b-card>
                      <b-skeleton animation="fade" width="100%" />
                      <b-skeleton animation="fade" width="100%" />
                      <b-skeleton animation="fade" width="100%" />
                    </b-card>
                  </template>

                  <b-card>
                    <table v-if="eventsList.length" class="min-w-full divide-y-2 divide-gray-200 text-sm">
                      <thead>
                        <tr>
                          <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                            Event Title
                          </th>

                          <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                            Event Description
                          </th>
                          <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                            Event Date
                          </th>
                          <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                            Created At
                          </th>

                          <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                            Actions
                          </th>
                        </tr>
                      </thead>

                      <tbody class="divide-y divide-gray-100">
                        <tr v-for="(event, index) in eventsList" :key="index" class="py-6">
                          <td
                            class="whitespace-nowrap px-4 py-4 font-light text-gray-500 text-xs flex items-center space-x-2">
                            <div class="p-2 bg-green-200 rounded-full">
                              <img title="Click to preview image" :src="event.programImageUrl" alt=""
                                class="rounded-full h-7 w-7 cursor-pointer"
                                @click="handleImagePreview(event.programImageUrl)">
                            </div>
                            <span class="font-semibold truncate">
                              {{ event.programTitle }}
                            </span>
                          </td>
                          <td class="whitespace-nowrap px-4 py-4 text-gray-500 text-xs font-light text-center">
                            {{ event.programDescription ?? 'N/A' }}
                          </td>

                          <td class="whitespace-nowrap px-4 py-4 text-gray-500 text-xs font-light text-center">
                            {{ $moment(event.programDate).format('LL') ?? 'N/A' }}
                          </td>
                          <td class="whitespace-nowrap px-4 py-4 text-gray-500 text-xs font-light text-center">
                            {{ $moment(event.createdAt).format('LL') ?? 'N/A' }}
                          </td>

                          <td class="whitespace-nowrap px-4 py-4 text-gray-500 text-xs space-x-2">
                            <button style="background-color: #d8eee9"
                              class="py-2 px-3 rounded-lg text-xs font-medium text-green-600 cursor-pointer z-50"
                              @click="viewEventDetails(event)">
                              View
                            </button>
                            <button
                              class="py-2 px-3 rounded-lg bg-red-100 text-xs font-medium text-red-600 cursor-pointer z-50"
                              @click="handleDelete(event)">
                              Delete
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <div v-else class="flex justify-center items-center py-3">
                      <p class="text-center text-gray-600 text-sm">
                        No Events Available
                      </p>
                    </div>
                  </b-card>
                </b-skeleton-wrapper>
              </div>
            </div>
          </div>
        </div>

        <div v-if="showClaimModal"
          class="backdrop backdrop-blur-sm overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex h-screen">
          <div class="absolute top-10 md:ml-32">
            <img src="@/assets/img/close.svg" class="cursor-pointer hidden md:block" alt=""
              @click="showClaimModal = !showClaimModal">
          </div>

          <div :class="[showClaimModal ? 'z-50' : '']"
            class="w-11/12 md:w-5/12 absolute top-0 right-0  bg-white p-5 md:p-10 shadow-md h-screen overflow-y-auto">
            <img src="@/assets/img/close.svg" class="cursor-pointer md:hidden" alt=""
              @click="showClaimModal = !showClaimModal">
            <div class="flex justify-between items-center bg-white rounded-lg pb-6">
              <div class="space-y-2">
                <h1 style="color: #1e1f20" class="font-bold text-3xl">
                  Event /
                  <span class="text-green-400" style="color: #3baa90">Details</span>
                </h1>
                <p class="text-sm text-gray-500 font-light">
                  Outline details of selected event
                </p>
              </div>
            </div>

            <hr>

            <div>
              <div class="overflow-x-auto shadow-md rounded-md p-6">
                <div class="space-y-6 text-sm text-gray-600 pt-3">
                  <div class="flex justify-center items-center cursor-pointer">
                    <div class="p-2 bg-green-200 rounded-full flex justify-center items-center h-32 w-32">
                      <img title="Click to view Image" :src="selectedEvent.programImageUrl" alt=""
                        class="rounded-full h-16 w-16 cursor-pointer">
                    </div>
                  </div>

                  <div class="flex items-center space-x-6 justify-between">
                    <p class="text-xs md:text-sm"><b class="uppercase text-xs md:text-sm">Program Title :</b></p>
                    <p class="text-xs md:text-sm">
                      {{ selectedEvent.programTitle }}
                    </p>
                  </div>

                  <div class="flex items-center space-x-6 justify-between">
                    <p class="text-xs md:text-sm"><b class="uppercase text-xs md:text-sm">Description :</b></p>
                    <p class="text-xs md:text-sm">{{ selectedEvent.programDescription }}</p>
                  </div>

                  <div class="flex items-center space-x-6 justify-between">
                    <p class="text-xs md:text-sm"><b class="uppercase text-xs md:text-sm">Program Date :</b></p>
                    <p class="text-xs md:text-sm">{{ selectedEvent.programDate }}</p>
                  </div>

                  <div class="flex items-center space-x-6 justify-between">
                    <p class="text-xs md:text-sm"><b class="uppercase text-xs md:text-sm">Date Created :</b></p>
                    <p class="text-xs md:text-sm"> {{ $moment(selectedEvent.createdAt).format('LL') ?? 'N/A' }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>

  </section>
</template>

<script>
import swal from 'sweetalert2/dist/sweetalert2.js'
import DashboardHeader from '@/components/DashboardHeader.vue'
export default {
  components: {
    DashboardHeader
  },
  layout: 'dashboardLayout',
  scrollToTop: true,
  data() {
    return {
      showClaimModal: false,
      loading: true,
      selectedEvent: {},
      selectedUserToDelete: {},
      processingDelete: false,
      eventsList: []
    }
  },
  created() {
    this.loadEvents()
  },
  methods: {
    handleImagePreview(value) {
      this.$zoom(value, {
        allowZoom: true,
        autoScale: true,
        closeOnClickModal: false
      })
    },
    viewEventDetails(event) {
      this.selectedEvent = event
      this.showClaimModal = !this.showClaimModal
    },
    async loadEvents() {
      const token = this.$store?.state?.app?.auth?.accessToken || ''
      const defaultOptions = {
        headers: {
          Authorization: token ? `JWT ${token}` : ''
        }
      }
      this.loading = true
      try {
        const response = await this.$axios.get(
          '/event', defaultOptions
        )
        this.eventsList = response.data
      } catch (error) {

      } finally {
        this.loading = false
      }
    },
    handleDelete(event) {
      swal.fire({
        title: 'Please Confirm',
        text: `Are you sure you want to remove ${event.programTitle} event?`,
        icon: 'question',
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete!',
        preConfirm: () => {
          return this.$axios
            .delete(`/event/${event.id}`)
            .catch((error) => {
              const msg =
                error.response && error.response.data
                  ? error.response.data.message
                  : 'An error occurred, please try again.'
              swal().showValidationMessage(msg)
            })
        },
        allowOutsideClick: () => !swal.isLoading()
      }).then((res) => {
        if (res.value) {
          swal.fire(
            {
              title: 'Success!',
              text: `${event.programTitle} event was successfully removed.`,
              icon: 'success',
              showCloseButton: true
            })
          this.loadEvents()
        }
      })
    }
  }
}
</script>

<style scoped>
.backdrop {
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  width: 100vw;
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
