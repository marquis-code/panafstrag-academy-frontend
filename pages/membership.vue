<template>
  <main class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 space-y-10 text-sm md:text-base">
    <div class="flex items-center space-x-2">
      <p class="text-sm md:text-base">Home</p>
      <p>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000"
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M13 17l5-5-5-5M6 17l5-5-5-5" />
        </svg>
      </p>
      <p class="text-sm md:text-base">Membership</p>
    </div>

    <div class="space-y-10">
      <section class="overflow-hidden sm:grid sm:grid-cols-2" style="background-color: #178489">
        <div class="p-8 md:p-12 lg:px-16 lg:py-24">
          <div class="mx-auto max-w-xl sm:text-left rounded-lg">
            <h2 class="text-2xl font-bold text-white md:text-4xl">
              Connect with colleagues from around the world. Join today!
            </h2>
            <div class="mt-4 md:mt-8">
              <buttonn @click="$router.push('/join')"
                class="inline-block rounded-full shadow-md cursor-pointer font-medium px-12 py-2.5 hover:bg-teal-600 text-teal-700 bg-white transition focus:outline-none">
                BECOME A MEMBER
              </buttonn>
            </div>
          </div>
        </div>

        <img alt="Student" src="@/assets/img/landing.jpeg" class="hidden md:block h-56 w-full object-cover sm:h-full" />
      </section>

      <div class="space-y-10">
        <div class="space-y-4 md:w-8/12">
          <h1 class="text-gray-600 font-bold text-lg md:text-2xl">
            Benefits of Joining the AAIRTA
          </h1>
          <p class="leading-loose">
            When you become an AAR member, you join the largest society
            dedicated to the academic study of religion. Your participation
            strengthens the field and advances the invaluable work being done by
            scholars around the world. As a member, you receive special
            discounts, access to the latest scholarship, promotion of your own
            accomplishments through our official channels, and invitations to
            members-only events.
          </p>
        </div>

        <div class="space-y-4 md:w-8/12">
          <h1 class="text-gray-600 font-bold text-lg md:text-2xl">Networking</h1>
          <p class="leading-loose">
            For more than a century, we've convened scholars of religion for
            discussion, collaboration, and professional development. Our
            in-person events bring together members from around the world for
            presentations and critique, workshops, and conversations with
            publishers. Scholars can also connect through the AAR member
            directory and online communities.
          </p>
        </div>
      </div>

      <section
        class="grid grid-cols-1 mt-10 lg:grid-cols-3 gap-10 mx-auto max-w-screen-xl md:border-r-8 md:border-r-teal-600 md:border-b-8 md:border-b-teal-600 md:divide-x md:divide-gray-800 pb-6 md:bg-gray-50 md:p-10">
        <!--
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them they are not needed in your project.
-->

        <article class="overflow-hidden">
          <div class="md:p-4">
            <h1 class="text-gray-600 font-bold text-lg md:text-2xl">Annual Meeting</h1>

            <p class="mt-2 text-md/relaxed text-gray-700 text-justify">
              Members receive deep discounts on registration fees for the Annual
              Meeting, which is held in a major US city every November. Each
              year's program includes more than 500 academic sessions, plenaries
              with leaders in the field, and hundreds of academic publishers.
              <nuxt-link class="text-teal-500 font-medium" to="#">Learn more about the Annual Meeting.</nuxt-link>
            </p>
          </div>
        </article>

        <article class="overflow-hidden">
          <div class="md:p-4">
            <h1 class="text-gray-600 font-bold text-lg md:text-2xl">Regional Meetings</h1>

            <p class="mt-2 text-md/relaxed text-gray-700 text-justify">
              For many scholars, meetings organized by our ten regions provide
              deeper engagement than the much larger annual event. Regional
              meetings offer increased local accessibility, exchange across
              specializations, and presentation opportunities for students.
              <nuxt-link class="text-teal-500 font-medium" to="#">
                Learn more about the AAR regions.</nuxt-link>
            </p>
          </div>
        </article>

        <article class="overflow-hidden">
          <div class="md:p-4">
            <h1 class="text-gray-600 font-bold text-lg md:text-2xl">Member Directory</h1>

            <p class="mt-2 text-md/relaxed text-gray-700 text-justify">
              Through our member directory and online communities, scholars can
              engage in conversation, share resources, and search for colleagues
              by research area, institution, or involvement in the AAR. Members
              must sign in to access the
              <nuxt-link class="text-teal-500 font-medium" to="#">
                member directory.</nuxt-link>
            </p>
          </div>
        </article>

        <article class="overflow-hidden">
          <div class="md:p-4">
            <h1 class="text-gray-600 font-bold text-lg md:text-2xl">Member Promotion</h1>

            <p class="mt-2 text-md/relaxed text-gray-700 text-justify">
              Members can submit their professional accomplishments—such as
              awards, media mentions, and major publications and projects—for
              promotion through our official communication channels, including
              social media, our website, and quarterly newsletters.
              <nuxt-link class="text-teal-500 font-medium" to="#">
                Submit a member note.</nuxt-link>
            </p>
          </div>
        </article>

        <article class="overflow-hidden">
          <div class="md:p-4">
            <h1 class="text-gray-600 font-bold text-lg md:text-2xl">
              Volunteer Leadership
            </h1>

            <p class="mt-2 text-md/relaxed text-gray-700 text-justify">
              Serving on a committee, task force, or jury offers meaningful
              opportunities to connect with scholars who share similar interests
              or expertise. Becoming a volunteer leader also strengthens the AAR
              membership and advances the field.
              <nuxt-link class="text-teal-500 font-medium" to="#">
                Learn more about our volunteer leadership groups.
              </nuxt-link>
            </p>
          </div>
        </article>

        <article class="overflow-hidden">
          <div class="md:p-4">
            <h1 class="text-gray-600 font-bold text-lg md:text-2xl">Membership</h1>

            <p class="mt-2 text-md/relaxed text-gray-700 text-justify">
              Because we're a member of the International Association for the
              History of Religions (IAHR), all AAR members enjoy IAHR membership
              as well, including registration discounts for the IAHR World
              Congress and eligibility for travel grants.
              <nuxt-link class="text-teal-500 font-medium" to="#">
                Learn more about IAHR.
              </nuxt-link>
            </p>
          </div>
        </article>
      </section>

      <div class="space-y-4 md:w-8/12">
        <h1 class="text-gray-600 font-bold text-lg md:text-2xl">Career Resources</h1>
        <p class="leading-loose">
          Members enjoy access to numerous career resources, including a job
          board, online training for job seekers, funding opportunities for
          research projects and travel to the Annual Meeting, and promotion of
          professional accomplishments through our official channels.
        </p>
      </div>

      <section
        class="grid grid-cols-1 mt-10 lg:grid-cols-3 gap-10 mx-auto max-w-screen-xl md:border-r-8 md:border-r-teal-600 md:border-b-8 md:border-b-teal-600 md:divide-x md:divide-gray-800 pb-6 bg-gray-50 md:p-10">
        <!--
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them they are not needed in your project.
-->

        <article class="overflow-hidden">
          <div class="md:p-4">
            <h1 class="text-gray-600 font-bold text-lg md:text-2xl">
              Training for Job Seekers
            </h1>

            <p class="mt-2 text-md/relaxed text-gray-700 text-justify">
              Through a partnership with Beyond the Professoriate, we provide
              access to an e-learning platform for scholars pursuing work within
              or outside academia. It covers topics such as interviewing,
              resumes, and networking, among others.
              <nuxt-link to="#" class="text-teal-600 font-medium">
                Learn more about Beyond the Professoriate.</nuxt-link>
            </p>
          </div>
        </article>

        <article class="overflow-hidden">
          <div class="md:p-4">
            <h1 class="text-gray-600 font-bold text-lg md:text-2xl">Job Board</h1>

            <p class="mt-2 text-md/relaxed text-gray-700 text-justify">
              Members can search employment listings on our job board, managed
              jointly with the Society of Biblical Literature. We post openings
              regularly, including faculty positions, editorial jobs, and
              ministerial roles.
              <nuxt-link class="text-teal-500 font-medium" to="#">
                Visit the job board site.</nuxt-link>
            </p>
          </div>
        </article>

        <article class="overflow-hidden">
          <div class="md:p-4">
            <h1 class="text-gray-600 font-bold text-lg md:text-2xl">Grant Programs
            </h1>

            <p class="mt-2 text-md/relaxed text-gray-700 text-justify">
              We maintain several grant programs for members. You can apply for
              funding to pursue individual or collaborative projects, regional
              development, international dissertation research, travel to the
              Annual Meeting, and public engagement
              <nuxt-link class="text-teal-500 font-medium" to="#">
                Learn more about our grant programs.</nuxt-link>
            </p>
          </div>
        </article>
      </section>

      <div class="space-y-4 md:w-8/12">
        <h1 class="text-gray-600 font-bold text-lg md:text-2xl">
          Discounts on Publications, Travel, Technology and More
        </h1>
        <p class="leading-loose">
          Members enjoy online access to the
          <span class="italic">Journal of the American Academy
            of Religion</span>
          and significant discounts on books from Oxford University Press. We
          also have discounts available on academic journals and presses, car
          rentals, hotels, technology, and more.
        </p>
      </div>

      <section
        class="grid grid-cols-1 mt-10 lg:grid-cols-3 gap-10 mx-auto max-w-screen-xl md:border-r-8 md:border-r-teal-600 md:border-b-8 md:border-b-teal-600 md:divide-x md:divide-gray-800 pb-6 md:bg-gray-50 md:p-10">
        <!--
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them they are not needed in your project.
-->

        <article class="overflow-hidden">
          <div class="md:p-4">
            <h1 class="text-gray-600 font-bold text-lg md:text-2xl">Access to JAAR
            </h1>

            <p class="mt-2 text-md/relaxed text-gray-700 text-justify">
              AAR membership includes
              <nuxt-link class="font-medium text-teal-600" to="#">online access</nuxt-link>
              to current and archived issues of the Journal of the American
              Academy of Religion, the premier academic journal in religious
              studies. Each issue also contains a large and valuable book review
              section.
            </p>
          </div>
        </article>

        <article class="overflow-hidden">
          <div class="md:p-4">
            <h1 class="text-gray-600 font-bold text-lg md:text-2xl">
              JSTOR Religious Studies Collection
            </h1>

            <p class="mt-2 text-md/relaxed text-gray-700 text-justify">
              <nuxt-link class="text-teal-500 font-medium" to="#">
                Access</nuxt-link>
              to JSTOR's Religious Studies Collection comes with every AAR
              membership. JSTOR updates its collections on an annual basis, with
              the current list of journals nearing 150.
            </p>
          </div>
        </article>

        <article class="overflow-hidden">
          <div class="md:p-4">
            <h1 class="text-gray-600 font-bold text-lg md:text-2xl">
              Publication Discounts
            </h1>

            <p class="mt-2 text-md/relaxed text-gray-700 text-justify">
              Our partner in publishing, Oxford University Press,
              <nuxt-link class="text-teal-500 font-medium" to="#">
                offers discounts</nuxt-link>
              on academic and trade books across all disciplines. Members also
              receive discounts on journals from Penn State Press and Cambridge
              University Press, among others.
            </p>
          </div>
        </article>

        <article class="overflow-hidden">
          <div class="md:p-4">
            <h1 class="text-gray-600 font-bold text-lg md:text-2xl">
              Travel and Transportation
            </h1>

            <p class="mt-2 text-md/relaxed text-gray-700 text-justify">
              <nuxt-link class="text-teal-500 font-medium" to="#">Save on car rentals and hotel reservations</nuxt-link>
              through our partnerships with Avis, Budget, and Hotel Engine.
            </p>
          </div>
        </article>

        <article class="overflow-hidden">
          <div class="md:p-4">
            <h1 class="text-gray-600 font-bold text-lg md:text-2xl">
              Technology and Office Supplies
            </h1>

            <p class="mt-2 text-md/relaxed text-gray-700 text-justify">
              <nuxt-link class="text-teal-500 font-medium" to="#">Get discounts</nuxt-link>
              on supplies and products through Office Depot, Office Max, and
              Lenovo, in-store and online.
            </p>
          </div>
        </article>
      </section>

      <div class="md:hidden pt-6">
        <div class="bg-teal-500 p-10 space-y-6 rounded-md">
          <h1 class="text-5xl font-black text-teal-800 drop-shadow-lg">
            Become a Member Today!
          </h1>
          <p class="text-teal-900 font-bold">JOIN THE AAR COMMUNITY</p>
          <p class="text-teal-900">
            Connect with colleagues from around the world and receive special
            member benefits—including career resources, registration and
            publication discounts, and online networking opportunities.
          </p>
          <button @click="$router.push('/join')" class="text-teal-700 rounded-full bg-white font-bold shadow-md px-6 py-2.5">
            JOIN THE COMMUNITY
          </button>
        </div>
      </div>

      <div class="relative pt-20 bg-gray-100 hidden md:block">
        <div>
          <img src="@/assets/img/community.jpeg" alt="" class="object-cover h-80 w-full" />
        </div>
        <div class="absolute -top-20 left-32 z-50 pt-20">
          <div class="md:w-6/12 bg-teal-500 p-10 space-y-4">
            <h1 class="text-xl md:text-5xl tracking-widest leading-relaxed font-black text-teal-800 drop-shadow-lg">
              Become a Member Today!
            </h1>
            <p class="text-teal-900 font-bold">JOIN THE AAR COMMUNITY</p>
            <p class="text-teal-900">
              Connect with colleagues from around the world and receive special
              member benefits—including career resources, registration and
              publication discounts, and online networking opportunities.
            </p>
            <button @click="$router.push('/join')" class="text-teal-700 rounded-full bg-white font-bold shadow-md px-6 py-2.5">
              JOIN THE COMMUNITY
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default { scrollToTop: true };
</script>

<style></style>
