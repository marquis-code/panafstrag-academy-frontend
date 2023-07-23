<template>
  <section class="relative flex flex-wrap lg:h-screen lg:items-center">
    <div class="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24 mt-20">
      <div class="mx-auto max-w-lg text-center rounded-md shadow-md border-2 border-red-400">
        <h1 class="text-2xl font-bold">
          Create Admin Account!
        </h1>

        <p class="mt-1 text-gray-500">
          Enter valid credentials to create an Admin!
        </p>
      </div>

      <form
        class="mx-auto mt-8 mb-0 max-w-md space-y-4"
        @submit.prevent="handleSignup"
      >
        <!-- <div>
          <label for="email" class="sr-only">First Name</label>

          <div class="relative">
            <span>
              <input
                v-model="form.firstName"
                type="text"
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
                placeholder="Enter first name"
              >
            </span>
          </div>
        </div> -->

        <div>
          <label for="email" class="sr-only">User Name</label>

          <div class="relative">
            <span>
              <input
                v-model="form.username"
                type="text"
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
                placeholder="Enter Full Name"
              >
            </span>
          </div>
        </div>

        <div>
          <label for="email" class="sr-only">Email</label>

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
              placeholder="Enter email"
            >

            <span class="absolute inset-y-0 right-4 inline-flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            </span>
          </div>
        </div>

        <div>
          <label for="password" class="sr-only">Password</label>
          <div class="relative">
            <input
              v-if="!showPassword"
              v-model="form.password"
              type="password"
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
              placeholder="Enter password"
            >
            <input
              v-if="showPassword"
              v-model="form.password"
              type="text"
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
              placeholder="Enter password"
            >

            <span class="absolute inset-y-0 right-4 inline-flex items-center">
              <span
                v-if="!showPassword"
                class="text-green-500 font-medium text-sm cursor-pointer"
                @click="togglePassword"
              >Show</span>
              <span
                v-if="showPassword"
                class="text-red-500 font-medium text-sm cursor-pointer"
                @click="togglePassword"
              >Hide</span>
            </span>
          </div>
        </div>

        <div class="flex items-center justify-between flex-col space-y-5">
          <p class="text-sm text-gray-500">
            No account?
            <nuxt-link to="/admin" class="underline">
              Sign in
            </nuxt-link>
          </p>

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
            {{ loading ? "processing..." : "Sign up" }}
          </button>
        </div>
      </form>
    </div>

    <div
      class="
        hidden
        relative
        h-64
        w-full
        lg:flex
        sm:h-96
        lg:h-full lg:w-1/2 lg:flex
        hidden
      "
    >
      <img
        alt="Welcome"
        src="@/assets/img/auth.jpg"
        class="absolute inset-0 h-full w-full object-cover"
      >
    </div>
  </section>
</template>

<script>
export default {
  name: 'Signup',
  // auth: false,
  layout: 'adminAuthLayout',
  scrollToTop: true,
  data () {
    return {
      loading: false,
      showPassword: false,
      form: {
        username: '',
        email: '',
        password: ''
      }
    }
  },
  created() {
    if (this.$store?.state?.app?.auth?.isLoggedIn) {
      this.$router.push('/dashboard')
    }
  },
  methods: {
    togglePassword () {
      this.showPassword = !this.showPassword
    },
    async handleSignup () {
      this.loading = true
      try {
        const payload = {
          username: this.form.username,
          email: this.form.email,
          password: this.form.password,
          role: 'admin'
        }

        await this.$axios.post('/auth/signup', payload)
        this.$toast.success('signup was successful').goAway(1500)
        this.$router.push('/otp-verification')
        this.loading = false
      } catch (error) {
        this.$toast.error('Something went wrong, please try again').goAway(1500)
        this.loading = false
      }
    }
  }
}
</script>
