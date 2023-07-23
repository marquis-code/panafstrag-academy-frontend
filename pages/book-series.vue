<template>
  <main class="text-sm md:text-base">
    <section class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
      <div class="flex items-center space-x-2">
        <p class="text-xs md:text-base">Home</p>
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
        <p class="text-xs md:text-base">AAR Book Series</p>
      </div>
    </section>

    <section class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div class="">
        <h1 class="font-bold text-teal-800 text-2xl md:text-5xl drop-shadow-lg">
          AAR Book Series
        </h1>

        <div class="md:w-8/12 space-y-6 mt-3">
          <p>
            The AAR publishing program with Oxford University Press produces
            quality scholarship for scholars of religion. This includes hundreds
            of titles, many of which have become essential tools in the
            development of the field and in the training of new scholars. The
            five current book series are:
          </p>

          <ul class="space-y-1 border-t border-gray-200 p-4 list-disc">
            <li class="font-medium text-teal-700 underline">
              <nuxt-link to="#">Academy</nuxt-link>
            </li>

            <li class="font-medium text-teal-700 underline">
              <nuxt-link to="#">Reflection and Theory in the Study of Religion</nuxt-link>
            </li>

            <li class="font-medium text-teal-700 underline">
              <nuxt-link to="#">Religion, Culture, and History</nuxt-link>
            </li>

            <li class="font-medium text-teal-700 underline">
              <nuxt-link to="#">Religion in Translation</nuxt-link>
            </li>

            <li class="font-medium text-teal-700 underline">
              <nuxt-link to="#">Teaching Religious Studies</nuxt-link>
            </li>
          </ul>

          <p>
            OUP also publishes titles
            <nuxt-link to="#" class="font-medium text-teal-700 underline">originally published by AAR through Scholars
              Press.</nuxt-link>
          </p>
        </div>
      </div>
    </section>

    <section class="bg-gray-50">
      <section class="mt-10">
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <h1 class="">Latest Books</h1>
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
        </div>
      </section>
    </section>

    <section class="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8 space-y-14">
      <h1 class="font-medium text-3xl text-teal-700">Book Series</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div class="space-y-4">
          <h1 class="font-bold text-teal-900 text-xl">
            <nuxt-link to="#">Academy Series</nuxt-link>
          </h1>
          <p>
            The Academy Series is devoted to publishing books that originate as
            dissertations in the field of religious studies. The series seeks to
            reflect the full range of cultural areas and methodological
            approaches in the field.
          </p>
        </div>

        <div class="space-y-4">
          <h1 class="font-bold text-teal-900 text-xl">
            <nuxt-link to="#">Reflection and Theory in the Study of Religion Series</nuxt-link>
          </h1>
          <p>
            The Series in Reflection and Theory in the Study of Religion is
            broadly concerned with theories of religion, the history and nature
            of religious studies, religious thought, theological investigation,
            and the philosophy of religion.
          </p>
        </div>

        <div class="space-y-4">
          <h1 class="font-bold text-teal-900 text-xl">
            <nuxt-link to="#">Religion, Culture, and History Series</nuxt-link>
          </h1>
          <p>
            The Religion, Culture, and History Series publishes scholarly work
            that addresses the relation between religious studies and cultural
            studies/theory. It brings new and disparate voices into the academic
            debate on issues related to the interdependence of cultural and
            religious phenomena.
          </p>
        </div>

        <div class="space-y-4">
          <h1 class="font-bold text-teal-900 text-xl">
            <nuxt-link to="#">Religion in Translation Series</nuxt-link>
          </h1>
          <p>
            The Religion in Translation Series seeks to make available to
            research scholars and classroom teachers alike significant primary
            texts in English translation, important secondary scholarship on
            religious texts, and reprints of major theoretical works in the
            field of religious studies.
          </p>
        </div>

        <div class="space-y-4">
          <h1 class="font-bold text-teal-900 text-xl">
            <nuxt-link to="#">Teaching Religious Studies Series</nuxt-link>
          </h1>
          <p>
            The Teaching Religious Studies Series locates itself at the
            intersection of pedagogical concerns and the substantive content of
            religious studies. Each volume provides scholarly and pedagogic
            discussion about a key topic (e.g., a text, theme, or thinker) of
            significance for teaching and scholarship in religious studies.
          </p>
        </div>

        <div class="space-y-4">
          <h1 class="font-bold text-teal-900 text-xl">
            <nuxt-link to="#">Legacy Series</nuxt-link>
          </h1>
          <p>
            Oxford University Press continues to publish volumes originally
            published by Scholars Press in cooperation with the AAR. These
            legacy series include: Aids for Study of Religion, Classics in
            Religious Studies, Studies in Religion, Thematic Studies, and
            American Academy of Religion Series.
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  scrollToTop: true
};
</script>

<style></style>
