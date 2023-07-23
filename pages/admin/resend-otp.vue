<template>
  <Transition name="fade">
    <section class="grid place-items-center lg:h-screen lg:items-center">
      <div
        class="
          w-full
          px-4
          py-12
          sm:px-6 sm:py-16
          lg:w-1/2 lg:px-8 lg:py-24
          mt-28
        "
      >
        <div class="mx-auto max-w-lg text-center">
          <h1 class="text-2xl font-bold sm:text-3xl">
            Email verification
          </h1>

          <p class="text-gray-400 text-sm font-light">
            A 4 digit code would be sent to your email. Please check your email
            and enter the code here to complete the verification.
          </p>
        </div>

        <form
          class="mx-auto mt-8 mb-0 max-w-md space-y-4"
          @submit.prevent="handleOtpVerification"
        >
          <div>
            <label for="email" class="sr-only">Email address</label>

            <div class="relative">
              <input
                v-model="form.email"
                type="email"
                class="
                  w-full
                  rounded-lg
                  ring-1 ring-gray-300
                  border
                  outline-none
                  p-3
                  pr-12
                  text-sm
                  shadow-sm
                "
                placeholder="Enter your email address"
              >
            </div>
          </div>
          <p class="text-sm">
            Did'nt recieve the OTP?
            <nuxt-link
              to="/admin/resend-otp"
              class="underline text-green-500 cursor-pointer"
            >
              Resend
            </nuxt-link>
          </p>
          <div class="flex items-center justify-between flex-col space-y-5">
            <button
              :disabled="loading"
              type="submit"
              :class="[loading ? 'cursor-not-allowed opacity-20' : '']"
              class="
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
              "
            >
              {{ loading ? "processing..." : "Verify" }}
            </button>
          </div>
        </form>
      </div>
    </section>
  </Transition>
</template>
<script>
export default {
  name: 'OtpVerification',
  auth: false,
  layout: 'errorLayout',
  data () {
    return {
      loading: false,
      userId: '',
      showPassword: false,
      form: {
        email: ''
      }
    }
  },
  created () {
    if (process.server) {
      return ''
    } else {
      this.userId = localStorage.getItem('userId')
    }

    if (!this.userId) {
      this.$router.push({ path: '/login' })
    }

    if (this.userId) {
      this.$router.push('/admin/')
    }
  },
  scrollToTop: true,
  methods: {
    async handleOtpVerification () {
      // try {
      this.loading = true
      const payload = {
        email: this.form.email,
        userId: localStorage.getItem('userId')
      }
      this.$axios
        .post(
          'https://panafstrag.onrender.com/api/admin/resendOTPVerificationCode',
          payload
        )
        .then((resp) => {
          window.location.reload(true)
          this.$router.push({ path: '/otp-verification' })
          // this.$toast.success("Welcome back!").goAway(1500);
          this.$toast.success(resp.data.successMessage).goAway(1500)
          this.loading = false
        })
        .catch((error) => {
          if (error.response) {
            this.$toast.error(error.response.data.errorMessage).goAway(1500)
            this.loading = false
          } else if (error.request) {
            this.loading = false
          } else {
            this.loading = false
          }
        })
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
