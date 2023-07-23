<!-- eslint-disable vue/max-attributes-per-line -->
<template>
  <Transition name="fade">
    <section class="grid place-items-center lg:h-screen lg:items-center">
      <div class="
          w-full
          px-4
          py-12
          sm:px-6 sm:py-16
          lg:w-1/2 lg:px-8 lg:py-24
          mt-28
        ">
        <div class="mx-auto max-w-lg text-center">
          <h1 class="text-2xl font-bold sm:text-3xl">
            Admin Login
          </h1>

          <p class="mt-2 text-gray-500">
            Login to your account!
          </p>
        </div>

        <form class="mx-auto mt-8 mb-0 max-w-md space-y-4" @submit.prevent="handleSignin">
          <div>
            <label for="email" class="sr-only">Email</label>

            <div class="relative">
              <input v-model="form.email" type="email" class="
                  w-full
                  rounded-lg
                  ring-1 ring-gray-300
                  border
                  outline-none
                  p-3
                  pr-12
                  text-sm
                  shadow-sm
                " placeholder="Enter email">

              <span class="absolute inset-y-0 right-4 inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none"
                  stroke="#e0dada" stroke-width="1.5" stroke-linecap="butt" stroke-linejoin="bevel">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label for="password" class="sr-only">Password</label>
            <div class="relative">
              <input v-if="!showPassword" v-model="form.password" type="password" class="
                  w-full
                  rounded-lg
                  ring-1 ring-gray-300
                  border
                  outline-none
                  p-3
                  pr-12
                  text-sm
                  shadow-sm
                " placeholder="Enter password">
              <input v-if="showPassword" v-model="form.password" type="text" class="
                  w-full
                  rounded-lg
                  ring-1 ring-gray-300
                  border
                  outline-none
                  p-4
                  pr-12
                  text-sm
                  shadow-sm
                " placeholder="Enter password">

              <span class="absolute inset-y-0 right-4 inline-flex items-center">
                <span v-if="!showPassword" class="text-green-500 font-medium text-sm cursor-pointer"
                  @click="togglePassword">Show</span>
                <span v-if="showPassword" class="text-red-500 font-medium text-sm cursor-pointer"
                  @click="togglePassword">Hide</span>
              </span>
            </div>
          </div>

          <div class="flex items-center justify-between flex-col space-y-5">
            <p class="text-sm text-gray-500">
              No account?
              <nuxt-link to="/admin/signup" class="underline">
                Sign up
              </nuxt-link>
            </p>

            <button :disabled="loading" type="submit" :class="[loading ? 'cursor-not-allowed opacity-20' : '']" class="
                ml-3
                w-full
                inline-block
                rounded-lg
                bg-black
                px-5
                py-3
                text-sm
                font-medium
                text-white
              ">
              {{ loading ? "processing..." : "Sign in" }}
            </button>
          </div>
        </form>
      </div>
    </section>
  </Transition>
</template>
<script>
import swal from 'sweetalert2/dist/sweetalert2.js'
export default {
  name: 'Login',
  // auth: false,
  layout: 'adminAuthLayout',
  scrollToTop: true,
  data() {
    return {
      loading: false,
      showPassword: false,
      userId: null,
      form: {
        email: '',
        password: ''
      }
    }
  },
  created() {
    if (this.$store?.state?.app?.auth?.isLoggedIn) {
      // this.$router.push('/dashboard')
    }
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword
    },
    async handleSignin() {
      this.loading = true
      try {
        const payload = {
          email: this.form.email,
          password: this.form.password
        }
        const response = await this.$axios
          .post('https://academy-api-service.onrender.com/api/auth/login', payload)
        this.$store.commit('app/setAuthUser', response?.data?.data)
        this.$router.push('/admin/otp-verification')
        this.loading = false
      } catch (error) {
        if (error.response) {
          this.$toast.error(error.response.data.errorMessage).goAway(1500)
          this.loading = false
        } else if (error.request) {
          this.loading = false
        } else {
          this.loading = false
        }
      }
    }

  }

}
</script>

<style scoped>
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
</style>
