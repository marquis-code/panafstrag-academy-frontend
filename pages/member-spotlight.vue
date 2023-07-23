<template>
  <main class="text-sm md:text-base">
    <section class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
      <div class="flex items-center space-x-2">
        <p class="text-xs md:text-base">
          Home
        </p>
        <p>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M13 17l5-5-5-5M6 17l5-5-5-5" />
          </svg>
        </p>
        <p class="text-xs md:text-base text-teal-600 font-medium" @click="$router.push('/publications')">
          Publications & News
        </p>
        <p>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M13 17l5-5-5-5M6 17l5-5-5-5" />
          </svg>
        </p>
        <p class="text-xs md:text-base">
          Member Spotlight
        </p>
      </div>
    </section>

    <section class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div class="">
        <h1 class="font-bold text-teal-800 text-xl md:text-5xl drop-shadow-lg">
          AAIRTA Member Spotlight
        </h1>

        <div class="md:w-8/12 space-y-6 mt-5">
          <p>
            Below, find brief interviews with AAR members making waves in their
            departments, institutions, and communities—as well as AAR at large!
          </p>

          <p>
            If you would like to submit a member for a spotlight interview,
            please email
            <a class="text-teal-600 font-semibold" href="mailto:aabdalla@aarweb.org">aabdalla@aarweb.org</a>
            with the member's name and a blurb about their involvement with the
            AAR.
          </p>

          <p>
            This page will be updated once per month with the latest Member
            Spotlight. Stay tuned for more!
          </p>
        </div>
      </div>
    </section>

    <section class="bg-gray-50 mt-10">
      <section class="text-white">
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <img src="@/assets/img/background.jpeg" alt="">

              <div
                class="border border-gray-800 space-y-6 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 rounded-b-md">
                <h2 class="mt-4 text-xl font-bold text-teal-600">
                  4/17/2023
                </h2>

                <h2 class="mt-4 text-xl font-bold text-teal-800">
                  Sara Ann Swenson
                </h2>

                <p class="mt-1 text-sm text-teal-600 pt-3">
                  Member Note: Awards and Accomplishments
                </p>
              </div>
            </div>

            <div>
              <img src="@/assets/img/background.jpeg" alt="">

              <div
                class="border border-gray-800 space-y-6 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 rounded-b-md">
                <h2 class="mt-4 text-xl font-bold text-teal-600">
                  4/17/2023
                </h2>

                <h2 class="mt-4 text-xl font-bold text-teal-800">
                  Sara Ann Swenson
                </h2>

                <p class="mt-1 text-sm text-teal-600 pt-3">
                  Member Note: Awards and Accomplishments
                </p>
              </div>
            </div>

            <div>
              <img src="@/assets/img/background.jpeg" alt="">

              <div
                class="border border-gray-800 space-y-6 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 rounded-b-md">
                <h2 class="mt-4 text-xl font-bold text-teal-600">
                  4/17/2023
                </h2>

                <h2 class="mt-4 text-xl font-bold text-teal-800">
                  Sara Ann Swenson
                </h2>

                <p class="mt-1 text-sm text-teal-600 pt-3">
                  Member Note: Awards and Accomplishments
                </p>
              </div>
            </div>

            <div>
              <img src="@/assets/img/background.jpeg" alt="">

              <div
                class="border border-gray-800 space-y-6 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 rounded-b-md">
                <h2 class="mt-4 text-xl font-bold text-teal-600">
                  4/17/2023
                </h2>

                <h2 class="mt-4 text-xl font-bold text-teal-800">
                  Sara Ann Swenson
                </h2>

                <p class="mt-1 text-sm text-teal-600 pt-3">
                  Member Note: Awards and Accomplishments
                </p>
              </div>
            </div>
          </div>

          <div class="mt-12 text-center">
            <a href="#"
              class="inline-block rounded-full border bg-teal-600 px-12 py-2.5 text-sm font-medium text-white transition focus:outline-none focus:ring">
              NEXT
            </a>
          </div>
        </div>
      </section>
    </section>
  </main>
</template>

<script>
export default {
  scrollToTop: true
}
</script>
