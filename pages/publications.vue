<template>
  <main class="text-sm md:text-base">
    <main class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
      <div class="flex items-center space-x-2">
        <p>Home</p>
        <p>
          <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="#000000"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M13 17l5-5-5-5M6 17l5-5-5-5" />
          </svg>
        </p>
        <p>Publications & News</p>
      </div>
    </main>

    <main class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 pb-10">
      <h1 class="font-bold text-teal-800 text-2xl md:text-5xl drop-shadow-lg">
        Publications & News
      </h1>
    </main>

    <section class="md:hidden sm:grid sm:grid-cols-2 w-11/12 mx-auto rounded-b-lg" style="background-color: #f8c5c0">
      <div class="border-r-8 border-b-8 border-teal-700">
        <img src="@/assets/img/landing.jpeg" alt="">
      </div>
      <div class="p-6">
        <div class="sm:text-left">
          <p class="font-bold text-black text-sm md:text-base">
            We publish valuable information throughout the year in the form of
            digital and print publications, best practice guides and research
            reports from AAR working groups, and podcasts of Annual Meeting
            sessions. We also regularly promote the accomplishments of our
            highly active, diverse membership.
          </p>
        </div>
      </div>
    </section>

    <section class="hidden md:block sm:grid sm:grid-cols-2 relative" style="background-color: #f8c5c0">
      <div class="p-8 md:p-12 w-6/12 lg:py-24 ml-16">
        <div class="sm:text-left">
          <p class="text-xl font-bold text-black">
            We publish valuable information throughout the year in the form of
            digital and print publications, best practice guides and research
            reports from AAR working groups, and podcasts of Annual Meeting
            sessions. We also regularly promote the accomplishments of our
            highly active, diverse membership.
          </p>
        </div>
      </div>

      <div class="absolute top-24 right-32 w-4/12 border-r-8 border-b-8 border-teal-700">
        <img src="@/assets/img/landing.jpeg" alt="">
      </div>
    </section>

    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
      <div class="md:w-7/12 mt-16 space-y-4">
        <h1 class="text-teal-700 text-3xl">
          Featured Publications
        </h1>
        <p class="text-gray-700 text-justify">
          We publish print and online publications to serve our members, foster
          excellence in the academic study of religion, and enhance the public
          understanding of religion. Featured publications include the Journal
          of the American Academy of Religion; five academic book series
          published in partnership with Oxford University Press; Reading
          Religion, our open book review site; and Religious Studies News, our
          online magazine.
        </p>
      </div>
    </div>

    <section
      class="grid grid-cols-1 mt-10 lg:grid-cols-2 gap-10 mx-auto w-11/12 md:max-w-screen-xl md:border-r-8 md:border-r-teal-600 md:border-b-8 md:border-b-teal-600 md:divide-x md:divide-gray-800 pb-6 md:bg-gray-50 md:p-10">
      <!--
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them they are not needed in your project.
-->

      <article class="overflow-hidden">
        <div class="md:p-4 space-y-6">
          <img src="@/assets/img/reading-religion.png" alt="" class="w-full">

          <p class="mt-2 text-md/relaxed text-gray-700 text-justify tracking-wide">
            The premier academic journal in religious studies, the
            <nuxt-link class="italic font-medium text-teal-600 underline" to="#">
              Journal of the American Academy of
              Religion
            </nuxt-link>
            publishes top scholarly articles covering the full range of world
            religious traditions together with provocative studies of the
            methodologies by which these traditions are explored. AAR members
            have online access to current and archived JAAR issues through the
            "sign in via society site" option.
          </p>

          <button class="text-teal-700 rounded-full font-bold bg-gray-200 px-6 py-2.5">
            MEMBER ACCESS TO AAIRTA
          </button>
        </div>
      </article>

      <article class="overflow-hidden">
        <div class="md:p-4 space-y-6">
          <img src="@/assets/img/reading-religion.png" alt="" class="w-full mb-3">

          <p class="mt-2 text-md/relaxed text-gray-700 text-justify tracking-wide">
            Our publishing program with Oxford University Press (OUP) produces
            quality scholarship, including many titles that have become
            essential tools in the development of the field and in the training
            of new scholars. AAR members receive a 30-percent discount on all
            books from the AAR-OUP series.
          </p>
          <button class="text-teal-700 rounded-full font-bold bg-gray-200 px-6 py-2.5">
            AAIRTA-OUP BOOK SERIES
          </button>
        </div>
      </article>

      <article class="overflow-hidden">
        <div class="md:p-4 space-y-6">
          <img src="@/assets/img/reading-religion.png" alt="" class="w-full mb-3">

          <p class="mt-2 text-md/relaxed text-gray-700 text-justify tracking-wide">
            <b class="italic">Reading Religion</b>, our open book review
            website, provides up-to-date coverage of scholarly publishing in
            religious studies, reviewed by scholars with special interest and/or
            expertise in the relevant subfields. Reviews are concise,
            comprehensive, and timely.
          </p>
          <button class="text-teal-700 rounded-full font-bold bg-gray-200 px-6 py-2.5">
            READING RELIGION
          </button>
        </div>
      </article>

      <article class="overflow-hidden">
        <div class="md:p-4 space-y-6">
          <img src="@/assets/img/reading-religion.png" alt="" class="w-full mb-3">

          <p class="mt-2 text-md/relaxed text-gray-700 text-justify tracking-wide">
            <b class="italic">Religious Studies News (RSN)</b>, our online
            magazine, is a platform for students and professionals involved in
            the teaching and scholarship of religion. RSN communicates important
            events of the field and examines critical issues in education,
            pedagogy, research, publishing, and the public understanding of
            religion.
          </p>
          <button class="text-teal-700 rounded-full font-bold bg-gray-200 px-6 py-2.5">
            RELIGIOUS STUDIES NEWS
          </button>
        </div>
      </article>
    </section>

    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
      <div class="md:w-7/12 mt-16 space-y-4">
        <h1 class="text-teal-700 text-3xl">
          Newsroom
        </h1>
        <p class="text-gray-700 text-justify">
          Our newsroom captures recent developments in the field, notable member
          accomplishments—such as major publications, award announcements, and
          media mentions—as well as organizational updates and statements issued
          by the AAR Board of Directors. We also share action alerts from
          advocacy partners, including the National Humanities Alliance and
          American Council of Learned Societies.
        </p>
      </div>
    </div>

    <section class="bg-gray-50">
      <section class="mt-10">
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div class="md:border-r-8 md:border-r-teal-600 md:border-b-8 md:border-b-teal-600">
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

            <div class="md:border-r-8 md:border-r-teal-600 md:border-b-8 md:border-b-teal-600">
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

            <div class="md:border-r-8 md:border-r-teal-600 md:border-b-8 md:border-b-teal-600">
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

            <div class="md:border-r-8 md:border-r-teal-600 md:border-b-8 md:border-b-teal-600">
              <div
                class="border border-gray-800 space-y-6 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 rounded-b-md md:border-r-8 md:border-r-teal-600 md:border-b-8 md:border-b-teal-600">
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

            <div class="md:border-r-8 md:border-r-teal-600 md:border-b-8 md:border-b-teal-600">
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

            <div class="md:border-r-8 md:border-r-teal-600 md:border-b-8 md:border-b-teal-600">
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

            <div class="md:border-r-8 md:border-r-teal-600 md:border-b-8 md:border-b-teal-600">
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

            <div class="md:border-r-8 md:border-r-teal-600 md:border-b-8 md:border-b-teal-600">
              <div
                class="border border-gray-800 space-y-6 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 rounded-b-md md:border-r-8 md:border-r-teal-600 md:border-b-8 md:border-b-teal-600">
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

          <div class="mt-12">
            <a href="#"
              class="inline-block rounded-full text-teal-600 font-bold px-12 py-2.5 text-sm border bg-white transition focus:outline-none focus:ring">
              VISIT THE ROOM
            </a>
          </div>
        </div>
      </section>
    </section>

    <main class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 pb-10 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div class="space-y-4">
          <h1 class="font-bold text-teal-900 text-xl">
            <nuxt-link to="#">
              Academy Series
            </nuxt-link>
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
            <nuxt-link to="#">
              Reflection and Theory in the Study of Religion Series
            </nuxt-link>
          </h1>
          <p>
            The Series in Reflection and Theory in the Study of Religion is
            broadly concerned with theories of religion, the history and nature
            of religious studies, religious thought, theological investigation,
            and the philosophy of religion.
          </p>
        </div>
      </div>
    </main>

    <div class="pt-6 md:hidden">
      <div style="background-color: #1377a2" class="bg-teal-500 py-8 px-6 md:p-10 space-y-4">
        <h1 class="text-3xl tracking-widest leading-snug font-black text-yellow-500 drop-shadow-lg">
          Take Action with the AAR
        </h1>
        <p class="text-white font-bold">
          SIGN UP FOR ACTION ALERTS
        </p>
        <p class="text-white text-sm">
          Join a nation-wide group of advocates for the humanities by signing up
          for news from the National Humanities Alliance, an advocacy coalition
          the AAR has been a member of since 1983.
        </p>
        <button class="text-teal-700 rounded-full bg-white font-bold shadow-md px-6 py-2.5"
          @click="toggleSubscriptionModal">
          SUBSCRIBE
        </button>
      </div>
    </div>

    <div class="hidden md:block mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
      <div class="relative pt-20 bg-gray-100">
        <div>
          <img src="@/assets/img/community.jpeg" alt="" class="object-cover h-80 w-full">
        </div>
        <div class="absolute -top-20 left-16 z-50 pt-20">
          <div style="background-color: #1377a2" class="w-5/12 bg-teal-500 p-10 space-y-4">
            <h1 class="text-5xl tracking-widest leading-relaxed font-black text-yellow-500 drop-shadow-lg">
              AAR Journalism Awards
            </h1>
            <p class="text-white font-bold">
              NOMINATION DEADLINE: APRIL 10, 2023
            </p>
            <p class="text-white">
              We're seeking nominations for the best in-depth reporting on
              religion in two categories: newswriting and multimedia.
            </p>
            <button class="text-teal-700 rounded-full bg-white font-bold shadow-md px-6 py-2.5">
              AWARD INFO
            </button>
          </div>
        </div>
      </div>
    </div>

    <b-modal id="subscriptionModal" no-close-on-backdrop no-close-on-esc no-stacking hide-footer>
      <template #modal-title>
        <h1>Subcribe For NewsLetters</h1>
      </template>

      <div class="flex justify-end items-center">
        <button class="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring"
          @click="$bvModal.hide('subscriptionModal')">
          <span class="absolute inset-0 border border-red-600 group-active:border-red-500 rounded-full" />
          <span
            class="block border border-red-600 bg-red-600 rounded-full px-12 py-2 transition-transform active:border-red-500 active:bg-red-500 group-hover:-translate-x-1 group-hover:-translate-y-1">
            Close
          </span>
        </button>
      </div>
    </b-modal>
  </main>
</template>

<script>
export default {
  scrollToTop: true,
  methods: {
    toggleSubscriptionModal() {
      this.$bvModal.show('subscriptionModal')
    }
  }
}
</script>

<style></style>
