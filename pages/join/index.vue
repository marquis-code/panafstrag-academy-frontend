<template>
  <main class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 text-sm md:text-base">
    <div class="flex items-center space-x-2">
      <p class="text-sm md:text-base">
        Home
      </p>
      <p>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000"
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M13 17l5-5-5-5M6 17l5-5-5-5" />
        </svg>
      </p>
      <p class="text-sm md:text-base">
        Join
      </p>
    </div>

    <div class="">
      <h1 class="font-bold text-teal-800 text-2xl md:text-5xl pt-6 drop-shadow-lg">
        Become an AAIRTA Member!
      </h1>

      <div class="md:w-8/12 space-y-6 mt-3">
        <p>
          <span class="text-gray-700 font-extrabold text-lg leading-loose">Please Note:</span>
          As of 2019, AAR memberships follow a rolling-year cycle. Each
          membership lasts one year from the join or renew date. Members will
          also be able to pay in advance of their renew date. Also, as part of a
          Green Initiative, there is a $27 charge to receive four physical
          copies of JAAR. All members continue to receive digital access to
          JAAR.
        </p>

        <p>
          <span class="text-gray-700 font-extrabold text-lg leading-loose">Membership Refund Policy:</span>
          Refunds for membership must be requested within 30 days of the
          purchase date and are at the discretion of the AAR. No refunds will be
          given after 30 days of purchase. Refunds will not be given in the
          event an individual's proposal for the Annual Meeting is not accepted.
          To request a refund, please contact
          <a class="font-medium text-teal-700 underline" href="mailto:membership@aarweb.org"> membership@aarweb.org</a>.
        </p>
      </div>

      <section class="">
        <div class="max-w-screen-xl py-8 sm:py-12 lg:py-16">
          <div class="max-w-xl">
            <h2 class="text-3xl sm:text-2xl text-teal-700">
              How to Join
            </h2>
          </div>

          <div class="mt-4 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
            <div class="flex items-start gap-4">
              <div>
                <h2 class="font-bold text-lg md:text-2xl text-gray-600">
                  Online
                </h2>

                <p class="mt-1 text-gray-800">
                  To join online,
                  <a class="text-teal-700 font-medium underline" href="#categories">select the appropriate category
                    below.</a>
                  We accept all major credit cards including VISA, MasterCard,
                  and AMEX.
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div>
                <h2 class="font-bold text-lg md:text-2xl text-gray-600">
                  Postal Mail
                </h2>

                <p class="mt-1 text-gray-800">
                  You can print and complete
                  <nuxt-link class="text-teal-700 font-medium underline" to="/signin">
                    this membership form
                  </nuxt-link>
                  and then return it with payment via postal mail. In addition
                  to credit cards, we accept money orders and checks.
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div>
                <h2 class="font-bold text-lg md:text-2xl text-gray-600">
                  Over the Phone
                </h2>

                <p class="mt-1 text-gray-800">
                  Call the AAR Office at 1-404-727-3049 to join the AAR over the
                  phone using a major credit card.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="categories" class="">
        <div class="max-w-screen-xl py-3 sm:py-12 lg:py-16">
          <div class="max-w-xl">
            <h2 class="text-3xl sm:text-xl text-teal-700">
              Categories and Rates
            </h2>
          </div>

          <div class="mt-4 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
            <div class="flex items-start gap-4">
              <div class="">
                <h2 class="font-bold text-lg md:text-2xl text-teal-700 underline">
                  <nuxt-link to="/join/student-membership">
                    Student Membership
                  </nuxt-link>
                </h2>

                <p class="text-teal-600 font-semibold">
                  $45/YEAR
                </p>

                <p class="mt-4">
                  This membership category is open to all those enrolled in an
                  undergraduate or graduate program. Student memberships can be
                  renewed for up to ten years. Student members have access to
                  all AAR member benefits.
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div>
                <nuxt-link to="/join/professional-membership" class="font-bold text-lg md:text-2xl text-teal-700 underline">
                  Professional Membership
                </nuxt-link>

                <p class="text-teal-600 font-semibold">
                  $55-250/YEAR (BASED ON INCOME)
                </p>

                <p class="mt-4">
                  This membership category applies to all those not currently
                  enrolled in an undergraduate or graduate program. Professional
                  membership types include Applied Religious Studies, Part-Time
                  Contingent, Full-Time Contingent, Tenure, Tenure-Track, and
                  Independent Scholars.
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div>
                <nuxt-link to="/join/retired-membership" class="font-bold text-lg md:text-2xl text-teal-700 underline">
                  Retired Membership
                </nuxt-link>

                <p class="text-teal-600 font-semibold">
                  $55–$250/YEAR (BASED ON INCOME)
                </p>

                <p class="mt-4">
                  This membership category is open to any individual who is
                  retired from one’s institution or place of employment. Retired
                  members have access to all AAR member benefits.
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div>
                <nuxt-link to="/join/special-international-membership"
                  class="font-bold text-lg md:text-2xl text-teal-700 underline">
                  Special International Membership
                </nuxt-link>

                <p class="text-teal-600 font-semibold">
                  $15/YEAR
                </p>

                <p class="mt-4">
                  International scholars working or residing outside those
                  countries designated as high income by the World Bank may take
                  advantage of a discounted rate of $15 for membership. Special
                  International members have access to all AAR member benefits.
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div>
                <nuxt-link to="/join/supporting-membership" class="font-bold text-lg md:text-2xl text-teal-700 underline">
                  Supporting Membership
                </nuxt-link>

                <p class="text-teal-600 font-semibold">
                  $500/YEAR
                </p>

                <p class="mt-4">
                  This membership category is open to any person. A portion of
                  your Supporting Membership is tax-deductible. Supporting
                  members have access to all AAR member benefits and help
                  provide a stable base for the AAR’s ongoing operating budget.
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div>
                <nuxt-link to="/join/sustaining-membership" class="font-bold text-lg md:text-2xl text-teal-700 underline">
                  Sustaining Membership
                </nuxt-link>

                <p class="text-teal-600 font-semibold">
                  $1,000/YEAR
                </p>

                <p class="mt-4">
                  This membership category is open to any person. In addition to
                  all AAR member benefits, Sustaining members receive
                  complimentary Annual Meeting registration and priority access
                  to Annual Meeting hotels as a VIP. A portion of the membership
                  is tax-deductible.
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div>
                <p class="mt-1 text-xs italic">
                  Members from the following countries are not eligible: United
                  States, Australia, Austria, Belgium, Canada, Czech Republic,
                  Denmark, Finland, France, Germany, Greece, Hungary, Iceland,
                  Ireland, Israel, Italy, Japan, Korea, Luxembourg, Netherlands,
                  New Zealand, Norway, Poland, Portugal, Slovak Republic,
                  Slovenia, Spain, Sweden, Switzerland, and the United Kingdom.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  scrollToTop: true
}
</script>

<style></style>
