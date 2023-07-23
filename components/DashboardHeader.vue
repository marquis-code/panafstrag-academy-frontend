<template>
  <div>
    <div class="flex justify-between md:flex md:justify-end">
      <button
        v-b-toggle.sidebar-backdrop
        style="background-color: #fdf4ff"
        class="block rounded p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
      >
        <span class="sr-only">Toggle menu</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <div
        class="md:flex md:justify-between md:items-center flex-col md:flex-row flex items-end justify-end pr-6 md:pr-0"
      >
        <div class="md:flex items-center md:space-x-6">
          <div class="hidden md:flex">
            <img src="@/assets/img/header_avatar.jpeg" class="rounded-full h-8 w-8" alt="">
          </div>
          <p style="color: #360040" class="lg:text-sm font-bold pb-0 mb-0">
            Hi, {{ loggedUser || 'Admin' }}
          </p>
        </div>
      </div>
    </div>

    <div class="md:hidden">
      <b-sidebar id="sidebar-backdrop" no-header backdrop shadow width="380px">
        <template #default="{ hide }">
          <div class="flex justify-between items-center pb-3 pt-6 w-10/12 mx-auto">
            <div class="" @click="$router.push('/dashboard')">
              <img src="@/assets/img/logo.png" class="h-12 w-12" alt="">
            </div>
            <div>
              <svg
                class="cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                @click="hide"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
          </div>

          <nav aria-label="Main Nav" class="mt-6 flex flex-col space-y-9 w-10/12 mx-auto pb-6">
            <div class="space-y-6">
              <nuxt-link
                :class="[$route.path === '/dashboard/members' ? 'bg-green-500 text-white' : '']"
                to="/dashboard/members"
                class="flex items-center gap-2 rounded-md px-4 py-2.5 text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#5b6977"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>

                <span class="font-medium text-sm">Membership</span>
              </nuxt-link>

              <nuxt-link
                :class="[$route.path === '/dashboard/events' ? 'bg-green-500 text-white' : '']"
                to="/dashboard/events"
                class="flex items-center gap-2 rounded-md px-4 py-2.5 text-gray-700"
              >
                <img src="@/assets/img/regions.png" alt="" class="h-6 w-6">

                <span class="font-medium text-sm">Events </span>
              </nuxt-link>

              <nuxt-link
                :class="[$route.path === '/dashboard/supports' ? 'bg-green-500 text-white' : '']"
                to="/dashboard/supports"
                class="flex items-center gap-2 rounded-md px-4 py-2.5 text-gray-700"
              >
                <img src="@/assets/img/books.png" alt="" class="h-6 w-6">

                <span class="font-medium text-sm"> Supports</span>
              </nuxt-link>

              <nuxt-link
                :class="[$route.path === '/dashboard/store' ? 'bg-green-500 text-white' : '']"
                to="/dashboard/store"
                class="flex items-center gap-2 rounded-md px-4 py-2.5 text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#606f82"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="10" cy="20.5" r="1" />
                  <circle cx="18" cy="20.5" r="1" />
                  <path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1" />
                </svg>
                <span class="font-medium text-sm">Online Store</span>
              </nuxt-link>

              <nuxt-link
                :class="[$route.path === '/dashboard/newsroom' ? 'bg-green-500 text-white' : '']"
                to="/dashboard/newsroom"
                class="flex items-center gap-2 rounded-md px-4 py-2.5 text-gray-700"
              >
                <img src="@/assets/img/newsroom.png" alt="" class="h-6 w-6">

                <span class="font-medium text-sm">Newsroom</span>
              </nuxt-link>

              <nuxt-link
                :class="[$route.path === '/dashboard/subscriptions' ? 'bg-green-500 text-white' : '']"
                to="/dashboard/subscriptions"
                class="flex items-center gap-2 rounded-md px-4 py-2.5 text-gray-700"
              >
                <img src="@/assets/img/spotlight.png" alt="" class="h-6 w-6">

                <span class="font-medium text-sm">Subscriptions</span>
              </nuxt-link>

              <nuxt-link
                :class="[$route.path === '/dashboard/publications' ? 'bg-green-500 text-white' : '']"
                to="/dashboard/publications"
                class="flex items-center gap-2 rounded-md px-4 py-2.5 text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#5b6977"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                  <line x1="7" y1="7" x2="7.01" y2="7" />
                </svg>

                <span class="font-medium text-sm">Publications</span>
              </nuxt-link>

              <div class="flex justify-center items-center">
                <nuxt-link to="/signin" class="text-red-600 font-medium py-2.5 text-center rounded-md w-full bg-red-200">
                  Logout
                </nuxt-link>
              </div>
            </div>
          </nav>
        </template>
      </b-sidebar>
      <!-- <b-sidebar id="sidebar-backdrop" no-header backdrop shadow width="380px">
        <template #default="{ hide }">
          <div class="flex justify-between items-center mx-auto w-10/12 py-3">
            <div class="grid h-10 w-32 place-content-center">
              <img src="@/assets/img/logo.svg" alt="" />
            </div>

            <div class="flex items-center space-x-3">
              <div>
                <img src="@/assets/img/nigeriaLogo.svg" alt="" />
              </div>
              <div>
                <svg
                  @click="hide"
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="27"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </div>
            </div>
          </div>

          <nav
            aria-label="Main Nav"
            class="mt-6 flex flex-col space-y-9 w-10/12 mx-auto pb-6"
          >
            <div class="space-y-6">
              <p style="color: #360040">Products</p>

              <div class="flex items-center space-x-5">
                <div
                  class="p-2.5 rounded-full"
                  style="background-color: #e7caec"
                >
                  <img
                    src="@/assets/img/side_dropshippers.svg"
                    alt=""
                    class="h-6 w-6"
                  />
                </div>
                <div class="space-y-1">
                  <p
                    class="font-medium pb-0 mb-0 text-sm"
                    style="color: #360040"
                  >
                   Members
                  </p>
                  <p
                    class="font-light pt-0 mt-0 text-xs"
                    style="color: #360040"
                  >
                    These are online vendors
                  </p>
                </div>
              </div>
              <div class="flex items-center space-x-5">
                <div
                  class="p-2.5 rounded-full"
                  style="background-color: #e7caec"
                >
                  <img
                    src="@/assets/img/side_shoppers.svg"
                    alt=""
                    class="h-6 w-6"
                  />
                </div>
                <div class="space-y-1">
                  <p
                    class="font-medium pb-0 mb-0 text-sm"
                    style="color: #360040"
                  >
                    Events
                  </p>
                  <p
                    class="font-light pt-0 mt-0 text-xs"
                    style="color: #360040"
                  >
                    These are our buyers
                  </p>
                </div>
              </div>
              <div class="flex items-center space-x-5">
                <div
                  class="p-2.5 rounded-full"
                  style="background-color: #e7caec"
                >
                  <img
                    src="@/assets/img/side_freelancers.svg"
                    alt=""
                    class="h-6 w-6"
                  />
                </div>
                <div class="space-y-1">
                  <p
                    class="font-medium pb-0 mb-0 text-sm"
                    style="color: #360040"
                  >
                    TrustX freelancers
                  </p>
                  <p
                    class="font-light pt-0 mt-0 text-xs"
                    style="color: #360040"
                  >
                    These are our talents
                  </p>
                </div>
              </div>
              <div class="flex items-center space-x-5">
                <div
                  class="p-2.5 rounded-full"
                  style="background-color: #e7caec"
                >
                  <img
                    src="@/assets/img/side_merchants.svg"
                    alt=""
                    class="h-6 w-6"
                  />
                </div>
                <div class="space-y-1">
                  <p
                    class="font-medium pb-0 mb-0 text-sm"
                    style="color: #360040"
                  >
                    TrustX Merchants
                  </p>
                  <p
                    class="font-light pt-0 mt-0 text-xs"
                    style="color: #360040"
                  >
                    These are store owners
                  </p>
                </div>
              </div>
            </div>

            <div class="space-y-6">
              <p style="color: #360040">Monetization</p>

              <div class="flex items-center space-x-5">
                <div
                  class="p-2.5 rounded-full"
                  style="background-color: #e7caec"
                >
                  <img
                    src="@/assets/img/side_dropshippers.svg"
                    alt=""
                    class="h-6 w-6"
                  />
                </div>
                <div class="space-y-1">
                  <p
                    class="font-medium pb-0 mb-0 text-sm"
                    style="color: #360040"
                  >
                    Profit from TXW
                  </p>
                  <p
                    class="font-light pt-0 mt-0 text-xs"
                    style="color: #360040"
                  >
                    Let’s make money together
                  </p>
                </div>
              </div>
              <div class="flex items-center space-x-5">
                <div
                  class="p-2.5 rounded-full"
                  style="background-color: #e7caec"
                >
                  <img
                    src="@/assets/img/side_merchants.svg"
                    alt=""
                    class="h-6 w-6"
                  />
                </div>
                <div class="space-y-1">
                  <p
                    class="font-medium pb-0 mb-0 text-sm"
                    style="color: #360040"
                  >
                    COAD
                  </p>
                  <p
                    class="font-light pt-0 mt-0 text-xs"
                    style="color: #360040"
                  >
                    Peer to peer payment
                  </p>
                </div>
              </div>
              <div class="flex items-center space-x-5">
                <div
                  class="p-2.5 rounded-full"
                  style="background-color: #e7caec"
                >
                  <img
                    src="@/assets/img/side_merchants.svg"
                    alt=""
                    class="h-6 w-6"
                  />
                </div>
                <div class="space-y-1">
                  <p
                    class="font-medium pb-0 mb-0 text-sm"
                    style="color: #360040"
                  >
                    DEI
                  </p>
                  <p
                    class="font-light pt-0 mt-0 text-xs"
                    style="color: #360040"
                  >
                    Disruptive Entrepreneurial Industrialization
                  </p>
                </div>
              </div>
            </div>

            <div class="space-y-3">
              <div>
                <nuxt-link style="color: #360040" class="font-medium" to="/"
                  >Pricing</nuxt-link
                >
              </div>
              <div>
                <nuxt-link style="color: #360040" class="font-medium" to="/"
                  >Testimonials</nuxt-link
                >
              </div>
              <div>
                <nuxt-link style="color: #360040" class="font-medium" to="/"
                  >Team
                  <b style="color: #360040" class="font-bold">X</b></nuxt-link
                >
              </div>
              <div>
                <nuxt-link style="color: #360040" class="font-medium" to="/"
                  >Support
                  <b style="color: #360040" class="font-bold">X</b></nuxt-link
                >
              </div>
            </div>

            <div class="flex justify-center items-center">
              <nuxt-link
                to="/login"
                class="text-white font-medium py-2.5 text-center rounded-md w-full"
                style="background-color: #8b4e96"
              >
                Log in
              </nuxt-link>
            </div>
          </nav>
        </template>
      </b-sidebar> -->
    </div>
  </div>
</template>

<script>
export default {
  layout: 'dashboardLayout',
  computed: {
    loggedUser () {
      if (this.$store.state.app.auth) {
        return this.$store?.state?.app?.auth?.user?.username || ''
      }
    }
  }
}
</script>

<style></style>
