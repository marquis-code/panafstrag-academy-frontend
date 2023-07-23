<template>
  <main class="text-sm md:text-base">
    <section class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
      <div class="flex items-center space-x-1">
        <p class="text-xs md:text-base">Home</p>
        <p>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M13 17l5-5-5-5M6 17l5-5-5-5" />
          </svg>
        </p>
        <p class="text-xs md:text-base text-teal-600 font-medium" @click="$router.push('/publications')">Publications &
          News</p>

        <p>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M13 17l5-5-5-5M6 17l5-5-5-5" />
          </svg>
        </p>
        <p class="text-xs md:text-base">Newsroom</p>
      </div>
    </section>

    <section class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div class="">
        <h1 class="font-bold text-teal-800 text-3xl md:text-5xl drop-shadow-lg">
          Newsroom
        </h1>

        <div class="md:w-8/12 space-y-6 mt-5">
          <p>
            The AAR's newsroom captures recent developments in the field, member
            accomplishments—such as major publications, award announcements, and
            media mentions—as well as organizational updates and statements
            issued by the AAR Board of Directors. The AAR also shares action
            alerts from advocacy partners, including the National Humanities
            Alliance and American Council of Learned Societies.
          </p>

          <p>Are you an AAR member with a recent
            accomplishment to share?</p>

          <button class="text-teal-700 font-bold px-4 py-3 bg-gray-100 rounded-full">
            SUBMIT A MEMBER NOTE
          </button>

          <p>
            If a colleague has passed away recently, you can submit a memorial
            notice.
          </p>
        </div>
      </div>
    </section>

    <section class="bg-gray-50">
      <section class="mt-10">
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div class="flex justify-end items-end">
            <div class="flex items-center space-x-3">
              <p>Filter:</p>
              <select class="rounded-full border bg-white shadow-lg px-3 py-2">
                <option>All</option>
                <option>Advocacy</option>
                <option>In Memoriam</option>
                <option>Member notes</option>
                <option>News</option>
              </select>
            </div>
          </div>
          <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <img src="@/assets/img/background.jpeg" alt="" />

              <div
                class="border border-gray-800 space-y-6 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 rounded-b-md">
                <h2 class="mt-4 text-xl font-bold text-teal-600">4/17/2023</h2>

                <h2 class="mt-4 text-xl font-bold text-teal-800">
                  Sara Ann Swenson
                </h2>

                <p class="mt-1 text-sm text-teal-600 pt-3">
                  Member Note: Awards and Accomplishments
                </p>
              </div>
            </div>

            <div>
              <img src="@/assets/img/background.jpeg" alt="" />

              <div
                class="border border-gray-800 space-y-6 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 rounded-b-md">
                <h2 class="mt-4 text-xl font-bold text-teal-600">4/17/2023</h2>

                <h2 class="mt-4 text-xl font-bold text-teal-800">
                  Sara Ann Swenson
                </h2>

                <p class="mt-1 text-sm text-teal-600 pt-3">
                  Member Note: Awards and Accomplishments
                </p>
              </div>
            </div>
            <div>
              <img src="@/assets/img/background.jpeg" alt="" />

              <div
                class="border border-gray-800 space-y-6 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 rounded-b-md">
                <h2 class="mt-4 text-xl font-bold text-teal-600">4/17/2023</h2>

                <h2 class="mt-4 text-xl font-bold text-teal-800">
                  Sara Ann Swenson
                </h2>

                <p class="mt-1 text-sm text-teal-600 pt-3">
                  Member Note: Awards and Accomplishments
                </p>
              </div>
            </div>

            <div>
              <img src="@/assets/img/background.jpeg" alt="" />

              <div
                class="border border-gray-800 space-y-6 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 rounded-b-md">
                <h2 class="mt-4 text-xl font-bold text-teal-600">4/17/2023</h2>

                <h2 class="mt-4 text-xl font-bold text-teal-800">
                  Sara Ann Swenson
                </h2>

                <p class="mt-1 text-sm text-teal-600 pt-3">
                  Member Note: Awards and Accomplishments
                </p>
              </div>
            </div>
            <div>
              <img src="@/assets/img/background.jpeg" alt="" />

              <div
                class="border border-gray-800 space-y-6 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 rounded-b-md">
                <h2 class="mt-4 text-xl font-bold text-teal-600">4/17/2023</h2>

                <h2 class="mt-4 text-xl font-bold text-teal-800">
                  Sara Ann Swenson
                </h2>

                <p class="mt-1 text-sm text-teal-600 pt-3">
                  Member Note: Awards and Accomplishments
                </p>
              </div>
            </div>
            <div>
              <img src="@/assets/img/background.jpeg" alt="" />

              <div
                class="border border-gray-800 space-y-6 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 rounded-b-md">
                <h2 class="mt-4 text-xl font-bold text-teal-600">4/17/2023</h2>

                <h2 class="mt-4 text-xl font-bold text-teal-800">
                  Sara Ann Swenson
                </h2>

                <p class="mt-1 text-sm text-teal-600 pt-3">
                  Member Note: Awards and Accomplishments
                </p>
              </div>
            </div>
            <div>
              <img src="@/assets/img/background.jpeg" alt="" />

              <div
                class="border border-gray-800 space-y-6 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 rounded-b-md">
                <h2 class="mt-4 text-xl font-bold text-teal-600">4/17/2023</h2>

                <h2 class="mt-4 text-xl font-bold text-teal-800">
                  Sara Ann Swenson
                </h2>

                <p class="mt-1 text-sm text-teal-600 pt-3">
                  Member Note: Awards and Accomplishments
                </p>
              </div>
            </div>
            <div>
              <img src="@/assets/img/background.jpeg" alt="" />

              <div
                class="border border-gray-800 space-y-6 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 rounded-b-md">
                <h2 class="mt-4 text-xl font-bold text-teal-600">4/17/2023</h2>

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
              class="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none">
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
};
</script>

<style></style>
