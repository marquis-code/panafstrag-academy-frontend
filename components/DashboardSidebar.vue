<template>
  <main class="">
    <div
      style="background-color: #070707"
      class="hidden lg:flex h-screen flex-col justify-between border-r top-10 overflow-y-auto"
    >
      <div class="px-6 pb-3">
        <div class="h-10 pt-3">
          <div class="">
            <img src="@/assets/img/logo.png" alt="" class="h-10 w-10" @click="$router.push('/dashboard')">
            <!-- <img src="@/assets/img/logo_white.svg" class="cursor-pointer" alt="" @click="$router.push('/')"> -->
          </div>
        </div>

        <nav aria-label="Main Nav" class="flex flex-col space-y-4 pt-10">
          <p style="color: #98a2b3" class="uppercase font-light text-xs">
            Dashboard
          </p>
          <router-link
            v-for="menuItems in dashboardMenu"
            :key="menuItems.name"
            :class="[
              $route.name === menuItems.name ? 'text-green-400 bg-neutral-700' : 'text-white',
            ]"
            :to="menuItems.path"
            class="flex items-center gap-2 rounded-lg py-2 space-x-2"
          >
            <img
              :class="[
                $route.name === menuItems.name ? 'pl-3' : '',
              ]"
              :src="require(`@/assets/img/${menuItems.imageUrl}`)"
              alt=""
            >

            <span class="text-xs font-semibold"> {{ menuItems.title }} </span>
          </router-link>
        </nav>

        <nav aria-label="Dashboard Nav" class="flex flex-col space-y-4 pt-10">
          <p style="color: #98a2b3" class="uppercase text-xs font-light">
            Configurations
          </p>
          <router-link
            v-for="menuItems in dashboardConfigurationMenu"
            :key="menuItems.name"
            :class="[
              $route.name === menuItems.name ? 'text-green-400 bg-neutral-700' : 'text-white',
            ]"
            :to="menuItems.path"
            class="flex items-center gap-2 rounded-lg py-2 space-x-2"
          >
            <img
              :class="[
                $route.name === menuItems.name ? 'pl-3' : '',
              ]"
              :src="require(`@/assets/img/${menuItems.imageUrl}`)"
              alt=""
            >

            <span class="text-xs font-semibold"> {{ menuItems.title }} </span>
          </router-link>
        </nav>
      </div>

      <div class="flex items-center space-x-3 cursor-pointer px-6 pb-3">
        <button
          class="rounded-md shadow-md text-white bg-red-400 py-2.5  justify-center flex items-center space-x-3 w-full"
          @click="handleLogout"
        >
          <p>Logout</p>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#f1f4f7"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M10 3H6a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h4M16 17l5-5-5-5M19.8 12H9" />
            </svg>
          </p>
        </button>
      </div>
    </div>

    <!-- <div class="md:hidden">
      <b-sidebar id="sidebar-backdrop" no-header backdrop shadow width="380px">
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
                    Trust X Dropshippers
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
                    TrustX Shoppers
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
      </b-sidebar>
    </div> -->
  </main>
</template>

<script>
import swal from 'sweetalert2/dist/sweetalert2.js'
export default {
  data () {
    return {
      showSidebar: false,
      dashboardConfigurationMenu: [
        {
          title: 'Members',
          name: 'dashboard-members',
          path: '/dashboard/members',
          imageUrl: 'analytics.svg'
        },
        {
          title: 'Events',
          name: 'dashboard-events',
          path: '/dashboard/events',
          imageUrl: 'sales.svg'
        },
        {
          title: 'Newsroom',
          name: 'dashboard-newsroom',
          path: '/dashboard/newsroom',
          imageUrl: 'policies.svg'
        },
        {
          title: 'Support',
          name: 'dashboard-supports',
          path: '/dashboard/supports',
          imageUrl: 'products.svg'
        },
        {
          title: 'Online Store',
          name: 'dashboard-store',
          path: '/dashboard/store',
          imageUrl: 'customer.svg'
        },
        {
          title: 'User Subscriptions',
          name: 'dashboard-subscriptions',
          path: '/dashboard/subscriptions',
          imageUrl: 'users.svg'
        },
        {
          title: 'Publications',
          name: 'dashboard-publications',
          path: '/dashboard/publications',
          imageUrl: 'claims.svg'
        },
        {
          title: 'Settings',
          name: 'dashboard-settings',
          path: '/dashboard/settings',
          imageUrl: 'settings.svg'
        }
      ],
      dashboardMenu: [
        {
          title: 'Get Started',
          name: 'dashboard',
          path: '/dashboard',
          imageUrl: 'analytics.svg'
        }
      ]
    }
  },
  methods: {
    toggleSidebar () {
      this.showSidebar = !this.showSidebar
    },
    handleLogout () {
      swal.fire({
        title: 'Please Confirm',
        text: 'Are you sure you want logout?',
        icon: 'question',
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Proceed!',
        preConfirm: () => {
          this.$store.commit('app/resetState')
        },
        allowOutsideClick: () => !swal.isLoading()
      }).then((res) => {
        if (res.value) {
          swal.fire(
            {
              title: 'Success!',
              text: 'Logout was successful',
              icon: 'success',
              showCloseButton: true
            })
          this.$router.push('/admin')
        }
      })
    }
  }
}
</script>
