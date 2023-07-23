<template>
  <main>
    <section>
      <div>
        <h2 class="sr-only">Steps</h2>

        <div>
          <ol
            class="grid grid-cols-1 divide-x divide-gray-100 overflow-hidden rounded-lg border border-gray-100 text-sm text-gray-500 sm:grid-cols-4"
          >
            <li
              :class="[activeState === 0 ? 'bg-gray-50' : '']"
              class="flex items-center justify-center gap-2 p-4"
            >
              <svg
                class="h-7 w-7 shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                />
              </svg>

              <p class="leading-none">
                <strong class="block font-medium"> Create Account </strong>
                <!-- <small class="mt-1"> Some info about you. </small> -->
              </p>
            </li>

            <li
              :class="[activeState === 1 ? 'bg-gray-50' : '']"
              class="relative flex items-center justify-center gap-2 p-4"
            >
              <span
                class="absolute -left-2 top-1/2 hidden h-4 w-4 -translate-y-1/2 rotate-45 border border-gray-100 ltr:border-b-0 ltr:border-s-0 ltr:bg-white rtl:border-e-0 rtl:border-t-0 rtl:bg-gray-50 sm:block"
              >
              </span>

              <span
                class="absolute -right-2 top-1/2 hidden h-4 w-4 -translate-y-1/2 rotate-45 border border-gray-100 ltr:border-b-0 ltr:border-s-0 ltr:bg-gray-50 rtl:border-e-0 rtl:border-t-0 rtl:bg-white sm:block"
              >
              </span>

              <svg
                class="h-7 w-7 shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

              <p class="leading-none">
                <strong class="block font-medium">
                  Professional conduct policy management
                </strong>
                <!-- <small class="mt-1"> Where we sending it? </small> -->
              </p>
            </li>

            <li
              :class="[activeState === 2 ? 'bg-gray-50' : '']"
              class="flex items-center justify-center gap-2 p-4"
            >
              <svg
                class="h-7 w-7 shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>

              <p class="leading-none">
                <strong class="block font-medium"> Join reason </strong>
                <!-- <small class="mt-1"> Show us the money. </small> -->
              </p>
            </li>

            <li
              :class="[activeState === 3 ? 'bg-gray-50' : '']"
              class="flex items-center justify-center gap-2 p-4"
            >
              <svg
                class="h-7 w-7 shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>

              <p class="leading-none">
                <strong class="block font-medium"> Purchase membership </strong>
                <!-- <small class="mt-1"> Show us the money. </small> -->
              </p>
            </li>
          </ol>
        </div>
      </div>

      <section
        class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 space-y-4"
      >
        <p class="text-teal-600 text-sm md:text-base font-medium tracking-wide md:w-7/12">
          Please create an account below. If you already have an account, please
          sign in. If you're already signed in, simply click next.
        </p>

        <h1 class="font-bold text-teal-800 text-xl md:text-3xl drop-shadow-lg">
          Sign up
        </h1>

        <p>Already registered? <nuxt-link to="/signin">Sign In</nuxt-link></p>
      </section>
      <section class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <section v-if="activeState === 0" id="createAccountForm">
          <form @submit.prevent="next" class="space-y-6">
            <div class="flex flex-col space-y-3">
              <label class="text-teal-700 font-medium"> Prefix. </label>
              <select
                v-model="form.prefix"
                class="border md:w-6/12 rounded-lg px-6 py-2.5 outline-none"
              >
                <option value="associate professor">Associate professor</option>
                <option value="Dr">Dr.</option>
                <option value="Hon">Hon.</option>
                <option value="Lt.Col">Lt.Col.</option>
                <option value="Miss">Miss</option>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Ms">Ms</option>
                <option value="Pastor">Pastor</option>
                <option value="Professor">Professor</option>
                <option value="Rabbi">Rabbi</option>
                <option value="Rev">Rev</option>
                <option value="Rev. Dr">Rev. Dr</option>
                <option value="Reverend">Reverend</option>
              </select>
            </div>

            <div class="flex flex-col space-y-3">
              <label class="text-teal-700 font-medium"> FIRST NAME. </label>
              <input
                type="text"
                v-model="form.firstName"
                class="border md:w-6/12 rounded-lg px-6 py-2.5 outline-none"
                placeholder=""
              />
            </div>

            <div class="flex flex-col space-y-3">
              <label class="text-teal-700 font-medium"> MIDDLE NAME. </label>
              <input
                type="text"
                v-model="form.middleName"
                class="border md:w-6/12 rounded-lg px-6 py-2.5 outline-none"
                placeholder=""
              />
            </div>

            <div class="flex flex-col space-y-3">
              <label class="text-teal-700 font-medium"> LAST NAME. </label>
              <input
                type="text"
                v-model="form.lastname"
                class="border md:w-6/12 rounded-lg px-6 py-2.5 outline-none"
                placeholder=""
              />
            </div>

            <div class="flex flex-col space-y-3">
              <label class="text-teal-700 font-medium"> SUFFIX. </label>
              <select v-model="form.suffix">
                <option value="associate professor">II</option>
                <option value="Dr">III</option>
                <option value="Dr">IV</option>
                <option value="Dr">Jr.</option>
                <option value="Dr">Sr.</option>
              </select>
            </div>

            <div class="flex flex-col space-y-3">
              <label class="text-teal-700 font-medium"> EMAIL. </label>
              <input
                type="email"
                v-model="form.email"
                class="border md:w-6/12 rounded-lg px-6 py-2.5 outline-none"
                placeholder=""
              />
            </div>

            <div class="flex flex-col space-y-3">
              <label class="text-teal-700 font-medium"> PHONE. </label>
              <input
                type="tel"
                v-model="form.phone"
                class="border md:w-6/12 rounded-lg px-6 py-2.5 outline-none"
                placeholder=""
              />
            </div>

            <div class="flex flex-col space-y-3">
              <label class="text-teal-700 font-medium"> COUNTRY. </label>
              <input
                type="text"
                v-model="form.country"
                class="border md:w-6/12 rounded-lg px-6 py-2.5 outline-none"
                placeholder=""
              />
            </div>

            <div class="flex flex-col space-y-3">
              <label class="text-teal-700 font-medium"> ADDRESS. </label>
              <textarea
                rows="5"
                cols="5"
                v-model="form.address"
                class="border md:w-6/12 rounded-lg px-6 py-2.5 outline-none"
              ></textarea>
            </div>

            <div class="flex flex-col space-y-3">
              <label class="text-teal-700 font-medium"> CITY. </label>
              <input
                type="text"
                v-model="form.city"
                class="border md:w-6/12 rounded-lg px-6 py-2.5 outline-none"
                placeholder=""
              />
            </div>

            <div class="flex flex-col space-y-3">
              <label class="text-teal-700 font-medium"> STATE. </label>
              <input
                type="text"
                v-model="form.state"
                class="border md:w-6/12 rounded-lg px-6 py-2.5 outline-none"
                placeholder=""
              />
            </div>

            <div class="flex flex-col space-y-3">
              <label class="text-teal-700 font-medium"> POSTAL CODE. </label>
              <input
                type="tel"
                v-model="form.postalCode"
                class="border md:w-6/12 rounded-lg px-6 py-2.5 outline-none"
                placeholder=""
              />
            </div>

            <div class="flex flex-col space-y-3">
              <label class="text-teal-700 font-medium"> USERNAME. </label>
              <input
                v-model="form.username"
                type="text"
                class="border md:w-6/12 rounded-lg px-6 py-2.5 outline-none"
                placeholder=""
              />
            </div>

            <div class="flex flex-col space-y-3">
              <label class="text-teal-700 font-medium"> PASSWORD. </label>
              <input
                v-model="form.passsword"
                type="password"
                class="border md:w-6/12 rounded-lg px-6 py-2.5 outline-none"
                placeholder=""
              />
            </div>

            <div class="flex flex-col space-y-3">
              <label class="text-teal-700 font-medium">
                CONFIRM PASSWORD.
              </label>
              <input
                v-model="form.Confirmpasssword"
                type="password"
                class="border md:w-6/12 rounded-lg px-6 py-2.5 outline-none"
                placeholder=""
              />
            </div>
            <p class="text-sm">
              The password must be at least {8} characters long and contain both
              letters and numbers.
            </p>

            <button
              class="font-bold border text-teal-600 rounded-full px-6 py-2 bg-white"
              type="button"
            >
              Next
            </button>
          </form>
        </section>

        <section
          v-if="activeState === 1"
          class="space-y-8 w-10/12 tracking-widest"
        >
          <p class="text-gray-800 font-medium">
            In keeping with the AAR values of professional responsibility,
            diversity, inclusion, respect, free inquiry, critical examination,
            transparency, and academic excellence, the AAR and its members
            expect professional conduct in scholarship and research, in teaching
            and advising, in service responsibilities to the guild, and in all
            AAR programs and activities, including activities in conjunction
            with AAR programming. This policy is applicable for AAR programs and
            activities.
          </p>

          <h1 class="text-gray-900 font-black text-lg">
            Definitions and Descriptions
          </h1>

          <h1 class="text-gray-900 font-black text-lg">
            Unprofessional Conduct
          </h1>

          <p class="text-gray-800 font-medium">
            Unprofessional conduct involves any violation of the AAR
            Professional Conduct Policy such as discrimination, harassment, the
            abuse of power for professional or personal advantage, exploitation,
            intimidation, threats, or violence. Unprofessional conduct can
            include capricious or arbitrary decisions affecting working
            conditions, professional status, or academic freedom; misuse of
            confidential information; plagiarizing the work of others; and
            practicing deceit or fraud on the academic community or the public.
            Physical or verbal abuse or harassment of any attendee, speaker,
            volunteer, exhibitor, staff member, service provider, or other
            activity or program guest, also will not be tolerated.
          </p>

          Harassment

          <p class="text-gray-800 font-medium">
            Harassment is defined as verbal, non-verbal, written, visual, or
            physical conduct based on an individual's actual or perceived sex,
            sexual orientation, gender identity or expression, race, creed,
            color, place of birth, ancestry, ethnicity, religion, national
            origin, age, disability, marital status, or other characteristics as
            defined and protected by law in the location where a particular
            program is operating, that has the purpose or effect, from the point
            of view of a reasonable person, of objectively and substantially:
          </p>

          <ol class="text-gray-700 list-decimal pl-10">
            <li>
              undermining and detracting from or interfering with an
              individual's educational or work performance while participating
              in activities in conjunction with AAR programming.
            </li>
            <li>
              creating an intimidating, hostile, or offensive work environment
              while participating in activities in conjunction with AAR
              programming.
            </li>
          </ol>

          <p class="text-gray-800 font-medium">
            Harassment may include repeated slurs, or taunts in the guise of
            jokes, or disparaging references to others, use of epithets,
            stereotypes, comments, gestures, threats, graffiti, display or
            circulation of written or visual materials, taunts on manner of
            speech, giving diminishing nicknames, and negative reference to
            customs when such conduct is based on or motivated by one or more of
            the protected characteristics identified above, or other
            characteristics as defined and protected by applicable law.
          </p>

          <p class="text-gray-800 font-medium">
            Harassment (including sexual harassment) in the context of the AAR
            could include: intimidation, stalking, or following; harassing
            photography or recording; sustained disruption of talks or other
            events; inappropriate physical contact; unwelcome sexual attention;
            or advocating for, or encouraging, any of the above behavior.
          </p>

          <p class="text-gray-800 font-medium">
            Further examples of unacceptable behavior include, but are not
            limited to, offensive verbal comments related to gender, sexual
            orientation, disability, physical appearance, body size, race,
            religion, national origin, or socioeconomic class; or threatening
            any attendee, speaker, volunteer, exhibitor, AAR staff member,
            service provider, or other meeting guest.
          </p>

          <h1 class="font-extrabold text-gray-900 text-lg">
            Sexual Harassment
          </h1>

          <p class="text-gray-800 font-medium">
            Harassment may also include so-called quid pro quo sexual
            harassment, meaning unwelcome sexual advances, requests for sexual
            favors, and other verbal, written, visual or physical conduct of a
            sexual nature when:
          </p>

          <ol class="text-gray-700 list-decimal">
            <li>
              submission to that conduct is made either explicitly or implicitly
              a term or condition of collegiality while conducting AAR business
              or participating in activities in conjunction with AAR
              programming.
            </li>

            <li>
              submission to or rejection of such conduct is used as a component
              of or as the basis for AAR-related decisions affecting an
              individual.
            </li>
          </ol>

          <p class="text-gray-800 font-medium">
            Other examples of sexual harassment include, but are not limited to,
            the following:
          </p>

          <ol class="text-gray-700 list-disc pl-10">
            <li>touching or grabbing a sexual part of a member’s body;</li>

            <li>
              touching or grabbing any part of a member’s body after that person
              has indicated, or it is known or reasonably should be known by the
              context, that such physical contact was inappropriate, unwelcome,
              or both;
            </li>

            <li>
              continuing to ask a member to socialize on or off-duty when that
              person has already indicated no interest;
            </li>

            <li>
              displaying or transmitting sexually suggestive pictures, objects,
              cartoons, or posters if it is known or reasonably should be known
              by the context that the behavior is outside the bounds of
              workplace expectations;
            </li>

            <li>
              continuing to write sexually suggestive notes or letters if it is
              known or reasonably should be known by the context that the
              behavior is inappropriate or that the person does not welcome such
              behavior;
            </li>

            <li>
              referring to or calling a person a sexualized name if it is known
              or reasonably should be known by the context that the behavior is
              inappropriate or that the person does not welcome such behavior;
            </li>

            <li>
              regularly telling sexual jokes or using sexually vulgar or
              explicit language in the presence of a person if it is known or
              reasonably should be known by the context that the behavior is
              inappropriate or that the person does not welcome such behavior;
            </li>

            <li>
              derogatory or provoking remarks about or relating to a member’s
              sex, gender, or sexual orientation;
            </li>

            <li>
              harassing acts or behavior directed against a person on the basis
              of sex, gender or sexual orientation.
            </li>
          </ol>

          <h1 class="text-gray-900 font-black text-lg">Discrimination</h1>

          <p class="text-gray-800 font-medium">
            The AAR shall tolerate no discrimination on the basis of race,
            ancestry, place of origin, color, ethnicity, citizenship,
            immigration status, sex, gender expression or identification, sexual
            orientation, disability, religion, culture, political convictions,
            socioeconomic status, age, health conditions or marital, domestic,
            or parental status, or any other applicable basis proscribed by law.
          </p>

          <p class="text-gray-800 font-medium">
            *By clicking NEXT you agree to abide by the AAR's Professional
            Conduct Policy.
          </p>
          <div class="flex justify-end items-end space-x-6">
            <button
              class="font-bold border text-teal-600 rounded-full px-6 py-2 bg-white"
              type="button"
            >
              Previous
            </button>

            <button
              class="font-bold border text-teal-600 rounded-full px-6 py-2 bg-white"
              type="button"
            >
              Next
            </button>
          </div>
        </section>

        <section v-if="activeState === 2" class="space-y-6">
          <h1
            class="text-teal-800 text-2xl font-bold tracking-widest leading-snug"
          >
            What is the main reason you joined the AAR?
          </h1>

          <p class="text-teal-800 font-medium">
            WHAT IS THE MAIN REASON YOU JOINED THE AAR?
          </p>
          <select
            v-model="form.prefix"
            class="border w-6/12 rounded-lg px-6 py-2.5 outline-none"
          >
            <option value="Access to JSTOR">Access to JSTOR</option>
            <option value="Access to AURORA">Access to AURORA</option>
            <option value="Access to other books and journal discount">
              Access to other books and journal discount
            </option>
            <option value="Annual meeting discount">
              Annual meeting discount
            </option>
            <option value="Employment Services">Employment Services</option>
            <option value="Grant opportunities">Grant opportunities</option>
            <option value=" JAAR (Journal of the American Academy Of Religion)">
              JAAR (Journal of the American Academy Of Religion)
            </option>
            <option value="Leadership/Volunter opportunities">
              Leadership/Volunter opportunities
            </option>
            <option value="Networking">Networking</option>
            <option value="Professional development">
              Professional development
            </option>
            <option value="Regional meeting and activities">
              Regional meeting and activities
            </option>
            <option value="Other">Other</option>
          </select>

          <div class="flex justify-end items-end space-x-6">
            <button
              class="font-bold border text-teal-600 rounded-full px-6 py-2 bg-white"
              type="button"
            >
              Previous
            </button>

            <button
              class="font-bold border text-teal-600 rounded-full px-6 py-2 bg-white"
              type="button"
            >
              Next
            </button>
          </div>
        </section>

        <section v-if="activeState === 3" class="space-y-8">
          <h1 class="text-xl text-teal-700">Student</h1>
          <div class="flex items-center space-x-4">
            <p class="text-teal-700 font-medium">TERM DATES</p>
            <p class="font-medium">01/06/2023 to 31/05/2024</p>
          </div>

          <div class="space-y-3">
            <h1 class="text-teal-700 text-xl font-bold drop-shadow-md">
              Membership Fees
            </h1>

            <b-card header-tag="header">
              <template #header>
                <div class="flex justify-between items-center">
                  <p class="font-bold tracking-wider">Item</p>
                  <div class="flex items-center justify-end space-x-4">
                    <p class="font-bold tracking-wider">Unit</p>
                    <p class="font-bold tracking-wider">Price Quantity</p>
                    <p class="font-bold tracking-wider">Amount</p>
                  </div>
                </div>
              </template>
              <b-card-text>
                <div class="flex justify-between items-center">
                  <div class="flex items-center space-x-1">
                    <div><input type="checkbox" /></div>
                    <p class="font-boldtracking-wider">STUDENT</p>
                  </div>
                  <div class="flex items-center justify-end space-x-20">
                    <p class="font-bold tracking-wider">45.00</p>
                    <p class="font-bold tracking-wider">1</p>
                    <p class="font-bold tracking-wider">45.00</p>
                  </div>
                </div>
              </b-card-text>
            </b-card>
          </div>

          <div class="space-y-3">
            <h1 class="text-teal-700 text-xl font-bold drop-shadow-md">
              Chapter Membership Fees
            </h1>

            <b-card header-tag="header">
              <template #header>
                <div class="flex justify-between items-center">
                  <p class="font-bold tracking-wider">Item</p>
                  <div class="flex items-center justify-end space-x-4">
                    <p class="font-bold tracking-wider">Unit</p>
                    <p class="font-bold tracking-wider">Price Quantity</p>
                    <p class="font-bold tracking-wider">Amount</p>
                  </div>
                </div>
              </template>
              <b-card-text>
                <div class="flex justify-between items-center">
                  <select
                    class="border w-4/12 rounded-lg px-6 py-2.5 outline-none"
                  >
                    <option value="associate professor">
                      Region : Eastern International
                    </option>
                    <option value="Dr">Region : Mid-Atlantic</option>
                    <option value="Hon">Region : Mid west</option>
                    <option value="Lt.Col">
                      Region : New England-Maritimes
                    </option>
                    <option value="Miss">Region : Pacific Northwest</option>
                    <option value="Mr">
                      Region : Rocky mountain-Great Plains
                    </option>
                    <option value="Mrs">Region : Southeast</option>
                    <option value="Ms">Region : Southwest</option>
                    <option value="Pastor">Region : Upper Midwest</option>
                    <option value="Professor">Region : Western</option>
                  </select>
                  <div class="flex items-center justify-end space-x-20">
                    <p class="font-bold tracking-wider">0.00</p>
                    <p class="font-bold tracking-wider">0</p>
                    <p class="font-bold tracking-wider">0.00</p>
                  </div>
                </div>
              </b-card-text>
            </b-card>
          </div>

          <div class="space-y-3">
            <h1 class="text-teal-700 text-xl font-bold drop-shadow-md">
              Journals and Other Subscriptions
            </h1>

            <b-card header-tag="header">
              <template #header>
                <div class="flex justify-between items-center">
                  <p class="font-bold tracking-wider">Item</p>
                  <div class="flex items-center justify-end space-x-4">
                    <p class="font-bold tracking-wider">Unit</p>
                    <p class="font-bold tracking-wider">Price Quantity</p>
                    <p class="font-bold tracking-wider">Amount</p>
                  </div>
                </div>
              </template>
              <b-card-text>
                <div class="flex justify-between items-center">
                  <div class="flex items-center space-x-1">
                    <div><input type="checkbox" /></div>
                    <p class="font-boldtracking-wider">
                      JOURNAL OF THE AMERICAN ACADEMY OF RELIGION
                    </p>
                  </div>
                  <div class="flex items-center justify-end space-x-20">
                    <p class="font-bold tracking-wider">25.00</p>
                    <p class="font-bold tracking-wider">0</p>
                    <p class="font-bold tracking-wider">0.00</p>
                  </div>
                </div>
              </b-card-text>
            </b-card>
          </div>

          <div class="flex justify-between items-center">
            <button
              class="font-bold border text-teal-600 rounded-full px-6 py-2 bg-white"
              type="button"
            >
              ADD TO CART
            </button>
            <p class="font-black text-lg">Subtotal 45.00</p>
          </div>

          <div class="flex justify-end items-end space-x-6">
            <button
              class="font-bold border text-teal-600 rounded-full px-6 py-2 bg-white"
              type="button"
            >
              Previous
            </button>

            <button
              class="font-bold border text-teal-600 rounded-full px-6 py-2 bg-white"
              type="button"
            >
              Finish
            </button>
          </div>
        </section>

        <section
          v-if="activeState === 4"
          class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8"
        >
          <div class="space-y-10">
            <div class="flex justify-end items-end">
              <button
                class="font-bold border text-teal-600 rounded-full px-6 py-2 bg-white"
                type="button"
              >
                CONTINUE SHOPPING
              </button>
            </div>
            <h1
              class="font-bold text-teal-800 text-3xl md:text-5xl drop-shadow-lg"
            >
              Shopping cart
            </h1>

            <div class="space-y-6">
              <h1 class="text-teal-700 text-xl font-bold drop-shadow-md">
                Items
              </h1>

              <b-card header-tag="header">
                <template #header>
                  <div class="flex justify-between items-center">
                    <p class="font-bold tracking-wider">Item</p>
                    <p class="font-bold tracking-wider">Unit</p>
                    <p class="font-bold tracking-wider">Price Quantity</p>
                    <p class="font-bold tracking-wider">Amount</p>
                  </div>
                </template>
                <b-card-text>
                  <div class="flex justify-between items-center">
                    <div class="flex items-center justify-end space-x-20">
                      <p class="font-bold tracking-wider">
                        There are no items in the cart
                      </p>
                    </div>
                  </div>
                </b-card-text>
              </b-card>
            </div>
          </div>
        </section>
      </section>
    </section>
  </main>
</template>

<script>
export default {
  scrollToTop: true,
  data() {
    return {
      activeState: 0,
      form: {
        prefix: "",
        suffix: "",
        firstName: "",
        middleName: "",
        lastName: "",
        email: "",
        phone: "",
        country: "",
        address: "",
        city: "",
        state: "",
        postalCode: "",
        userName: "",
        password: "",
        confirmPassword: "",
      },
    };
  },
};
</script>

<style>
</style>
