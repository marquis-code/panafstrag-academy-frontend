<template>
  <main
    class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 text-sm md:text-base"
  >
    <div class="flex items-center space-x-2">
      <p>Home</p>
      <p>
        <svg
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
          <path d="M13 17l5-5-5-5M6 17l5-5-5-5" />
        </svg>
      </p>
      <p>Join</p>
    </div>

    <div class="md:w-7/12 space-y-6">
      <h1
        class="font-bold text-teal-800 text-3xl md:text-5xl pt-6 drop-shadow-lg"
      >
        Sign In
      </h1>

      <p class="text-gray-700">
        Sign in to access your AAR member benefits and connect with colleagues.
        If you haven't logged in since we redesigned our website,
        <nuxt-link class="text-teal-600 underline" to="login-instructions"
          >read these instructions</nuxt-link
        >
        first. Please contact us at
        <a class="text-teal-600 underline" href="mailto:membership@aarweb.org"
          >membership@aarweb.org</a
        >
        if you experience any issues logging in.
      </p>
      <p class="text-gray-700">
        Your Username is the email address associated with your AAR account.
      </p>
    </div>

    <section class="relative flex flex-wrap lg:items-center">
      <div class="w-full px-2 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
        <form
          action=""
          class="mx-auto mb-0 mt-8 max-w-md space-y-6 md:space-y-4"
        >
          <div class="space-y-3">
            <label for="username" class="text-teal-700 text-sm font-medium"
              >USERNAME</label
            >

            <div class="relative">
              <input
                type="email"
                class="w-full rounded-full border outline-none px-4 py-3 pe-12 text-sm shadow-sm"
                placeholder="Enter username"
              />

              <span
                class="absolute inset-y-0 end-0 grid place-content-center px-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 text-gray-400"
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

          <div class="space-y-3">
            <label for="password" class="text-teal-700 text-sm font-medium"
              >PASSWORD</label
            >

            <div class="relative">
              <input
                type="password"
                class="w-full rounded-full border outline-none px-4 py-3 pe-12 text-sm shadow-sm"
                placeholder="Enter password"
              />

              <span
                class="absolute inset-y-0 end-0 grid place-content-center px-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div class="">
            <button
              type="submit"
              class="inline-block rounded-full bg-gray-100 font-extrabold hover:bg-teal-500 hover:text-white w-full px-5 py-3 text-sm uppercase text-teal-700"
            >
              Sign in
            </button>
            <div class="flex items-center justify-center space-x-3 mt-3">
              <nuxt-link
                class="underline text-teal-700 font-medium"
                to="/forgot-username"
                >Forgot Username?</nuxt-link
              >
              <nuxt-link
                class="underline text-teal-700 font-medium"
                to="/forgot-password"
                >Forgot Password?</nuxt-link
              >
            </div>
          </div>
        </form>
      </div>

      <div
        class="w-full lg:w-1/2 shadow-md rounded-md space-y-8 p-6 md:p-10 border bg-teal-300"
      >
        <h1 class="font-bold text-teal-800 text-3xl md:text-5xl pt-6">
          Join the AAR Today!
        </h1>
        <p>
          Connect with colleagues from around the world and receive special
          member benefits—including career resources, registration and
          publication discounts, and online networking opportunities.
        </p>

        <button @click="$router.push('/join')"
          class="font-bold text-teal-700 hover:bg-teal-500 hover:text-white px-6 py-2.5 bg-gray-100 rounded-full shadow-lg"
        >
          BECOME A MEMBER
      </button>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  scrollToTop: true
};
</script>

<style>
</style>
