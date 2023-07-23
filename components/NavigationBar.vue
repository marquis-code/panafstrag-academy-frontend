<template>
  <header aria-label="Site Header" class="bg-gray-300">
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-2">
      <div class="flex h-16 items-center justify-between">
        <div class="md:flex md:items-center md:gap-12">
          <a class="block text-teal-600" href="/">
            <span class="sr-only">Home</span>
            <img src="@/assets/img/logo.png" alt="" class="h-10 w-10">
          </a>
        </div>

        <div class="hidden md:block">
          <nav aria-label="Site Nav" class="">
            <ul class="flex items-center gap-3 text-sm">
              <li>
                <nuxt-link
                  :class="[$route.name === 'support' ? 'text-green-800 hover:text-green-500/75 font-black' : 'text-gray-800 hover:text-gray-500/75']"
                  class=" text-sm transition font-bold" to="/support">
                  Support AAIRTA
                </nuxt-link>
              </li>

              <li>
                <nuxt-link
                  :class="[$route.name === 'products' ? 'text-green-800 hover:text-green-500/75' : 'text-gray-800 hover:text-gray-500/75']"
                  class=" text-sm transition font-bold" to="/products">
                  Online Store
                </nuxt-link>
              </li>
              <li>
                <nuxt-link
                  :class="[$route.name === 'regions' ? 'text-green-800 hover:text-green-500/75' : 'text-gray-800 hover:text-gray-500/75']"
                  class=" text-sm transition font-bold" to="/regions">
                  Regions
                </nuxt-link>
              </li>
              <li>
                <nuxt-link
                  :class="[$route.name === 'membership' ? 'text-green-800 hover:text-green-500/75' : 'text-gray-800 hover:text-gray-500/75']"
                  class=" text-sm transition font-bold" to="/membership">
                  Membership
                </nuxt-link>
              </li>
              <li>
                <nuxt-link
                  :class="[$route.name === 'about-us' ? 'text-green-800 hover:text-green-500/75' : 'text-gray-800 hover:text-gray-500/75']"
                  class=" text-sm transition font-bold" to="/about-us">
                  About AAIRTA
                </nuxt-link>
              </li>
              <li>
                <div class="relative">
                  <div class="inline-flex items-center overflow-hidden bg-gray-300" @click="togglePublicationsDropdown">
                    <a :class="[$route.name === 'publications' || $route.name === 'book-series' || $route.name === 'newsroom' || $route.name === 'member-spotlight' || $route.name === 'resources' ? 'text-green-800 hover:text-green-500/75' : 'text-gray-800 hover:text-gray-500/75']"
                      href.prevent="#"
                      class="py-2 text-sm/none font-extrabold text-gray-800  hover:bg-gray-300 hover:text-gray-700">
                      Publications
                    </a>

                    <button class="h-full p-2 text-gray-600 hover:bg-gray-300 hover:text-gray-700">
                      <span class="sr-only">Menu</span>
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd" />
                      </svg>
                    </button>
                  </div>

                  <div v-if="showPublicationsDropdown"
                    class="absolute end-0 z-10 mt-2 w-60 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg"
                    role="menu">
                    <div class="p-2">
                      <strong class="block p-2 text-xs font-medium uppercase text-gray-400">
                        General
                      </strong>
                      <div class="space-y-4">
                        <button
                          class="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                          @click="handleRouting('/publications')">
                          <img src="@/assets/img/books.png" class="h-5 w-5">
                          Publication & News
                        </button>

                        <button
                          class="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                          @click="handleRouting('/book-series')">
                          <img src="@/assets/img/books.png" class="h-5 w-5">
                          AAIRTA Book series
                        </button>

                        <button
                          class="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                          @click="handleRouting('/newsroom')">
                          <img src="@/assets/img/newsroom.png" class="h-5 w-5">
                          Newsroom
                        </button>

                        <button
                          class="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                          @click="handleRouting('/member-spotlight')">
                          <img src="@/assets/img/spotlight.png" alt="" class="h-5 w-5">
                          Member Spotlight
                        </button>
                      </div>
                    </div>

                    <div class="p-2">
                      <button
                        class="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                        @click="handleRouting('/resources')">
                        <img src="@/assets/img/spotlight.png" class="h-5 w-5">

                        Resources
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </div>

        <div class="flex items-center gap-4">
          <div class="hidden sm:flex sm:gap-4">
            <nuxt-link class="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow" to="/join">
              Join
            </nuxt-link>

            <div class="hidden sm:flex">
              <nuxt-link class="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600" to="/signin">
                Sign in
              </nuxt-link>
            </div>
          </div>

          <div class="lg:hidden">
            <button v-b-toggle.sidebar-backdrop class="rounded-lg bg-gray-100 p-2 text-gray-600" type="button">
              <span class="sr-only">Open menu</span>
              <svg aria-hidden="true" class="h-5 w-5" fill="none" stroke="currentColor" viewbox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6h16M4 12h16M4 18h16" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="md:hidden">
      <b-sidebar id="sidebar-backdrop" no-header backdrop shadow width="380px">
        <template #default="{ hide }">
          <div class="flex justify-between items-center py-3 w-10/12 mx-auto">
            <div class="" @click="$router.push('/')">
              <img src="@/assets/img/logo.png" class="h-12 w-12" alt="">
            </div>
            <div>
              <svg class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24"
                fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                @click="hide">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
          </div>

          <nav aria-label="Main Nav" class="mt-6 flex flex-col space-y-9 w-10/12 mx-auto pb-6">
            <div class="space-y-6">
              <nuxt-link :class="[$route.path === '/' ? 'bg-green-500 text-white' : '']" to="/"
                class="flex items-center gap-2 rounded-md px-4 py-2.5 text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                  stroke="#5b6977" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                </svg>

                <span class="font-medium text-sm"> Home</span>
              </nuxt-link>

              <nuxt-link :class="[$route.path === '/regions' ? 'bg-green-500 text-white' : '']" to="/regions"
                class="flex items-center gap-2 rounded-md px-4 py-2.5 text-gray-700">
                <img src="@/assets/img/regions.png" alt="" class="h-6 w-6">

                <span class="font-medium text-sm"> Regions </span>
              </nuxt-link>

              <nuxt-link :class="[$route.path === '/support' ? 'bg-green-500 text-white' : '']" to="/support"
                class="flex items-center gap-2 rounded-md px-4 py-2.5 text-gray-700">
                <img src="@/assets/img/support.png" alt="" class="h-6 w-6">

                <span class="font-medium text-sm"> Support AAIRTA</span>
              </nuxt-link>
              <!-- </div>
              </div> -->

              <nuxt-link :class="[$route.path === '/publications' ? 'bg-green-500 text-white' : '']" to="/publications"
                class="flex items-center gap-2 rounded-md px-4 py-2.5 text-gray-700">
                <img src="@/assets/img/books.png" alt="" class="h-6 w-6">

                <span class="font-medium text-sm"> Publications & News</span>
              </nuxt-link>

              <nuxt-link :class="[$route.path === '/resources' ? 'bg-green-500 text-white' : '']" to="/resources"
                class="flex items-center gap-2 rounded-md px-4 py-2.5 text-gray-700">
                <img src="@/assets/img/resources.png" alt="" class="h-6 w-6">

                <span class="font-medium text-sm"> Resources</span>
              </nuxt-link>
              <nuxt-link :class="[$route.path === '/products' ? 'bg-green-500 text-white' : '']" to="/products"
                class="flex items-center gap-2 rounded-md px-4 py-2.5 text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none"
                  stroke="#606f82" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="10" cy="20.5" r="1" />
                  <circle cx="18" cy="20.5" r="1" />
                  <path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1" />
                </svg>
                <span class="font-medium text-sm">Online Store</span>
              </nuxt-link>

              <nuxt-link :class="[$route.path === '/membership' ? 'bg-green-500 text-white' : '']" to="/membership"
                class="flex items-center gap-2 rounded-md px-4 py-2.5 text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none"
                  stroke="#5b6977" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>

                <span class="font-medium text-sm">Membership</span>
              </nuxt-link>

              <nuxt-link :class="[$route.path === '/newsroom' ? 'bg-green-500 text-white' : '']" to="/newsroom"
                class="flex items-center gap-2 rounded-md px-4 py-2.5 text-gray-700">
                <img src="@/assets/img/newsroom.png" alt="" class="h-6 w-6">

                <span class="font-medium text-sm">Newsroom</span>
              </nuxt-link>

              <nuxt-link :class="[$route.path === '/member-spotlight' ? 'bg-green-500 text-white' : '']"
                to="/member-spotlight" class="flex items-center gap-2 rounded-md px-4 py-2.5 text-gray-700">
                <img src="@/assets/img/spotlight.png" alt="" class="h-6 w-6">

                <span class="font-medium text-sm">Member Spotlight</span>
              </nuxt-link>

              <nuxt-link :class="[$route.path === '/book-series' ? 'bg-green-500 text-white' : '']" to="/book-series"
                class="flex items-center gap-2 rounded-md px-4 py-2.5 text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none"
                  stroke="#5b6977" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                  <line x1="7" y1="7" x2="7.01" y2="7" />
                </svg>

                <span class="font-medium text-sm">AAIRTA book series</span>
              </nuxt-link>

              <div class="flex justify-center items-center">
                <nuxt-link to="/signin" class="text-white font-medium py-2.5 text-center rounded-md w-full bg-green-500">
                  Sign in
                </nuxt-link>
              </div>
            </div>

            <div class="flex justify-center items-center">
              <nuxt-link to="/join" class="text-white font-medium py-2.5 text-center rounded-md w-full bg-green-400">
                Join
              </nuxt-link>
            </div>
          </nav>
        </template>
      </b-sidebar>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      showPublicationsDropdown: false
    }
  },
  methods: {
    togglePublicationsDropdown() {
      this.showPublicationsDropdown = !this.showPublicationsDropdown
    },
    handleRouting(routePath) {
      this.$router.push(routePath)
      this.showPublicationsDropdown = false
    }
  }
}
</script>
