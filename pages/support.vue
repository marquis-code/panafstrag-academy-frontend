<template>
  <main class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
    <div class="flex items-center space-x-2">
      <p class="text-sm md:text-base">Home</p>
      <p>
        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="#000000"
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M13 17l5-5-5-5M6 17l5-5-5-5" />
        </svg>
      </p>
      <p class="text-sm md:text-base">Support AAIRTA</p>
    </div>

    <div class="md:w-9/12 space-y-8 text-sm md:text-base">
      <h1 class="font-bold text-teal-800 text-2xl md:text-5xl pt-6 drop-shadow-lg">
        Support the AAIRTA
      </h1>
      <p class="text-lg md:text-2xl text-teal-700 font-light">
        Giving Opportunities</p>
      <div class="space-y-4">
        <h1 class="text-gray-600 font-bold text-xl md:text-2xl">AAIRTA Academy Fund</h1>
        <p class="leading-loose">
          The Academy Fund provides much needed support for general and
          programmatic operations that support AAR’s mission to foster
          excellence in the academic study of religion and to enhance the public
          understanding of religion. Contributions to this fund help AAR
          implement the work of our committees/working groups and execute the
          Annual Meeting.
        </p>
        <button class="text-teal-600 rounded-full bg-white shadow-lg md:px-6 px-3 py-3 md:py-2.5 text-sm md:text-base"
          @click="$router.push('/academy-fund-support')">
          SUPPORT THE ACADEMY FUND
        </button>
      </div>

      <div class="space-y-4">
        <h1 class="text-gray-600 font-bold text-xl md:text-2xl">
          AAIRTA Membership Support Fund
        </h1>
        <p class="leading-loose">
          Recognizing that some members have been adversely impacted financially
          by current times and recognizing the need to support our collective,
          collaborative work, we have created this Membership Support Fund to
          cover membership dues for our colleagues who do not have access to
          resources at this time to maintain their AAR membership.
        </p>
        <button class="text-teal-600 rounded-full text-sm md:text-base bg-white shadow-lg md:px-6 px-3 py-3 md:py-2.5">
          SUPPORT THE MEMBERSHIP SUPPORT FUND
        </button>
      </div>

      <div class="space-y-4">
        <h1 class="text-gray-600 font-bold text-xl md:text-2xl">
          Awards in Excellence Fund
        </h1>
        <p class="leading-loose">
          The AAIRTA Katie Geneva Cannon Excellence in Teaching Award, the AAR
          Lawrence H. Mamiya Excellence in Public Service Award, and the James
          H. Cone Excellence in Mentoring Award recognize the importance of
          academic teaching, public service and faculty mentoring, and honors
          outstanding legacy bearers in each of these separate yet related
          fields.
        </p>
        <button to="/excellence-fund-support"
          class="text-teal-600 rounded-full text-sm md:text-base bg-white shadow-lg md:px-6 px-3 py-3 md:py-2.5">
          SUPPORT THE AWARDS IN EXCELLENCE FUND
        </button>
      </div>

      <div class="space-y-4">
        <h1 class="text-gray-600 font-bold text-xl md:text-2xl">
          Annual Meeting Travel Grants Fund
        </h1>
        <p class="leading-loose">
          AAIRTS’s Annual Meeting Travel Grants Fund provides support to defray
          costs and make attending the Annual Meeting a reality for members who
          may otherwise find the cost of attendance to be prohibitive.
          Contributions to this fund will help to broaden the participation at
          the Annual Meeting for our student, contingent faculty, and
          unemployed/underemployed members where their attendance, delivering of
          papers, serving on panels, and interviewing at the Employment Center
          affords them with valuable opportunities for scholarly development.
        </p>
        <button class="text-teal-600 rounded-full bg-white shadow-lg md:px-6 px-3 py-3 md:py-2.5 text-sm md:text-base">
          SUPPORT THE TRAVEL GRANT FUND
        </button>
      </div>

      <div class="space-y-4">
        <h1 class="text-gray-600 font-bold text-xl md:text-2xl">
          Awards and Recognition Fund
        </h1>
        <p class="leading-loose">
          The Awards and Recognition Fund provides support to AAR’s awards
          programs that recognize extraordinary contributions to the academic
          study of religion and the public understanding of religion as well as
          service to the AAR membership. Contributions to this fund will help
          AAR to continue to offer awards such as the Martin E. Marty Award for
          the Public Understanding of Religion, Religion and the Arts Award,
          Book Awards, and Journalism Awards.
        </p>
        <button class="text-teal-600 rounded-full bg-white shadow-lg md:px-6 px-3 py-3 md:py-2.5 text-sm md:text-base">
          SUPPORT THE AWARD FUND
        </button>
      </div>

      <div class="space-y-4">
        <h1 class="text-gray-600 font-bold text-xl md:text-2xl">
          Research and Development Grants Fund
        </h1>
        <p class="leading-loose">
          The Research and Development Grant Fund provides support to AAR’s
          grant programs that provide funding for development grants, public
          engagement fellowships and seed grants. Contributions to this fund
          will help AAR to continue to offer widely popular grants programs such
          as individual research grants, collaborative research grants,
          collaborative international research grants, international
          dissertation research and regional development grants.
        </p>
        <button class="text-teal-600 rounded-full bg-white shadow-lg md:px-6 px-3 py-3 md:py-2.5 text-sm md:text-base">
          SUPPORT THE GRANTS FUNDS
        </button>
      </div>

      <div class="space-y-4">
        <h1 class="text-gray-600 font-bold text-xl md:text-2xl">
          AAIRTA Pandemic Crisis Fund
        </h1>
        <p class="leading-loose">
          The AAR recognizes that some members have been adversely impacted
          financially by the pandemic. In 2020, we provided financial assistance
          to nearly 200 members through crisis grants and by converting travel
          grants into annual meeting registration waivers. In 2021, we helped
          lapsed members regain access to benefits such as discounted
          registration fees for the Annual Meeting, networking opportunities
          with colleagues around the world, and promotion of their work and
          achievements. We would like to continue helping lapsed members in this
          way in 2022.
        </p>
        <button class="text-teal-600 rounded-full bg-white shadow-lg md:px-6 px-3 py-3 md:py-2.5 text-sm md:text-base">
          SUPPORT THE CRISES FUND
        </button>
      </div>

      <div class="space-y-4">
        <h1 class="text-gray-600 font-bold text-xl md:text-2xl">Mail Your Donation</h1>
        <p class="leading-loose">
          If you prefer to mail in your donation, fill out this printable
          contribution form and mail it to:
        </p>

        <p class="md:w-4/12 pl-8 italic">
          American Academy of Religion 825 Houston Mill Road Atlanta, GA 30329
        </p>
        <p>
          The AAIRTS is a 501(c)3 tax-exempt organization recognized by the IRS.
          Your gift is tax deductible to the extent allowed by law.
        </p>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  scrollToTop: true
};
</script>

<style></style>
