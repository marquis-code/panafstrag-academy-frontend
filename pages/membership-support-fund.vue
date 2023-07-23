<template>
  <main>
    <section>
      <section
        class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 space-y-4"
      >
        <h1 class="font-bold text-teal-800 text-3xl md:text-5xl drop-shadow-lg">
          AAR Academy Fund
        </h1>
        <p class="text-gray-700 font-medium tracking-wide w-7/12">
          The Academy Fund provides much needed support for general and
          programmatic operations that support AAR’s mission to foster
          excellence in the academic study of religion and to enhance the public
          understanding of religion. Contributions to this fund help AAR
          implement the work of our committees/working groups and execute the
          Annual Meeting.
        </p>

        <p class="text-gray-700 font-medium tracking-wide w-7/12">
          We appreciate your generosity, please select your desired contribution
          below.
        </p>
      </section>

      <section class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <section class="space-y-6">
          <div class="space-y-6">
            <h1
              class="text-teal-700 font-medium text-2xl leading-snug tracking-wider"
            >
              My Details
            </h1>
            <p>
              If you are an AAR member, please sign in to complete your
              donation.
            </p>
          </div>
          <form @submit.prevent="next" class="space-y-6">
            <div class="space-y-3">
              <p class="font-medium text-teal-600 text-2xl">Gift amount</p>
              <div class="flex space-x-6 items-center">
                <div class="text-teal-700 font-medium">
                  <input v-model="giftAmount" type="radio" value="1,000.00" />
                  1,000.00
                </div>
                <div class="text-teal-700 font-medium">
                  <input v-model="giftAmount" type="radio" value="500.00" />
                  500.00
                </div>

                <div class="text-teal-700 font-medium">
                  <input v-model="giftAmount" type="radio" value="250.00" />
                  250.00
                </div>

                <div class="text-teal-700 font-medium">
                  <input v-model="giftAmount" type="radio" value="100.00" />
                  100.00
                </div>

                <div class="text-teal-700 font-medium">
                  <input v-model="giftAmount" type="radio" value="50.00" />
                  50.00
                </div>

                <div class="text-teal-700 font-medium">
                  <input v-model="giftAmount" type="radio" value="25.00" />
                  25.00
                </div>

                <div class="text-teal-700 font-medium">
                  <input v-model="giftAmount" type="radio" value="other" />
                  Other
                </div>
              </div>
            </div>
            <div v-if="giftAmount === 'other'">
              <input type="text" class="border py-2.5 px-6 rounded-md" />
            </div>

            <div class="space-y-3">
              <p class="font-medium text-teal-600 text-2xl">
                Create a Recurring Gift?
              </p>
              <div class="flex space-x-6 items-center">
                <div class="text-teal-700 font-medium">
                  <input v-model="isRecurringGift" type="radio" value="No" />
                  NO, THIS IS A ONE TIME GIFT
                </div>
                <div class="text-teal-700 font-medium">
                  <input v-model="isRecurringGift" type="radio" value="Yes" />
                  YES, PLEASE MAKE THIS A RECURRING GIFT
                </div>
              </div>
            </div>

            <div v-if="isRecurringGift === 'Yes'">
              <div class="flex flex-col space-y-3">
                <label class="text-teal-700 font-medium">
                  SELECT GIFT FREQUENCY
                </label>
                <select
                  class="border w-6/12 rounded-lg px-6 py-2.5 outline-none"
                >
                  <option value="Monthly">Monthly</option>
                  <option value="Quarterly">Quarterly</option>
                  <option value="Yearly">Yearly</option>
                </select>
              </div>

              <div class="flex flex-col space-y-3">
                <label class="text-teal-700 font-medium">
                  COLLECTION DAY
                </label>
                <select
                  class="border w-6/12 rounded-lg px-6 py-2.5 outline-none"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>

                  <option value="13">13</option>

                  <option value="14">14</option>

                  <option value="15">15</option>

                  <option value="16">16</option>

                  <option value="17">17</option>

                  <option value="18">18</option>
                  <option value="19">19</option>

                  <option value="20">20</option>

                  <option value="21">21</option>

                  <option value="22">22</option>

                  <option value="23">23</option>

                  <option value="24">24</option>

                  <option value="25">25</option>

                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                </select>
              </div>
            </div>

            <div class="flex flex-col space-y-3">
              <label class="text-teal-700 font-medium"> FIRST NAME. </label>
              <input
                type="text"
                v-model="form.firstName"
                class="border w-6/12 rounded-lg px-6 py-2.5 outline-none"
                placeholder=""
              />
            </div>

            <div class="flex flex-col space-y-3">
              <label class="text-teal-700 font-medium"> MIDDLE NAME. </label>
              <input
                type="text"
                v-model="form.middleName"
                class="border w-6/12 rounded-lg px-6 py-2.5 outline-none"
                placeholder=""
              />
            </div>

            <div class="flex flex-col space-y-3">
              <label class="text-teal-700 font-medium"> LAST NAME. </label>
              <input
                type="text"
                v-model="form.lastname"
                class="border w-6/12 rounded-lg px-6 py-2.5 outline-none"
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
                class="border w-6/12 rounded-lg px-6 py-2.5 outline-none"
                placeholder=""
              />
            </div>

            <div class="flex flex-col space-y-3">
              <label class="text-teal-700 font-medium"> PHONE. </label>
              <input
                type="tel"
                v-model="form.phone"
                class="border w-6/12 rounded-lg px-6 py-2.5 outline-none"
                placeholder=""
              />
            </div>

            <div class="flex flex-col space-y-3">
              <label class="text-teal-700 font-medium"> COUNTRY. </label>
              <input
                type="text"
                v-model="form.country"
                class="border w-6/12 rounded-lg px-6 py-2.5 outline-none"
                placeholder=""
              />
            </div>

            <div class="flex flex-col space-y-3">
              <label class="text-teal-700 font-medium"> ADDRESS. </label>
              <textarea
                rows="5"
                cols="5"
                v-model="form.address"
                style="resize: none"
                class="border w-6/12 rounded-lg px-6 py-2.5 outline-none"
              ></textarea>
            </div>

            <div class="flex flex-col space-y-3">
              <label class="text-teal-700 font-medium"> CITY. </label>
              <input
                type="text"
                v-model="form.city"
                class="border w-6/12 rounded-lg px-6 py-2.5 outline-none"
                placeholder=""
              />
            </div>

            <div class="flex flex-col space-y-3">
              <label class="text-teal-700 font-medium"> STATE. </label>
              <input
                type="text"
                v-model="form.state"
                class="border w-6/12 rounded-lg px-6 py-2.5 outline-none"
                placeholder=""
              />
            </div>

            <div class="flex flex-col space-y-3">
              <label class="text-teal-700 font-medium"> POSTAL CODE. </label>
              <input
                type="tel"
                v-model="form.postalCode"
                class="border w-6/12 rounded-lg px-6 py-2.5 outline-none"
                placeholder=""
              />
            </div>

            <div class="flex items-center space-x-2">
              <input v-model="isCreatingAccount" type="checkbox" />
              <p class="text-medium text-teal-600">CREATE AN ACCOUNT</p>
            </div>
            <div v-if="isCreatingAccount">
              <div class="flex flex-col space-y-3">
                <label class="text-teal-700 font-medium"> USERNAME. </label>
                <input
                  v-model="form.username"
                  type="text"
                  class="border w-6/12 rounded-lg px-6 py-2.5 outline-none"
                  placeholder=""
                />
              </div>

              <div class="flex flex-col space-y-3">
                <label class="text-teal-700 font-medium"> PASSWORD. </label>
                <input
                  v-model="form.passsword"
                  type="password"
                  class="border w-6/12 rounded-lg px-6 py-2.5 outline-none"
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
                  class="border w-6/12 rounded-lg px-6 py-2.5 outline-none"
                  placeholder=""
                />
              </div>

              <p>
                The password must be at least {8} characters long and contain
                both letters and numbers.
              </p>
            </div>

            <div class="flex flex-col space-y-3">
              <label class="text-teal-700 font-medium">
                PLEASE SPECIFY THE NAME(S) YOU WOULD LIKE US TO USE TO PUBLICLY
                RECOGNIZE YOUR CONTRIBUTION.</label
              >
              <input
                type="text"
                v-model="form.email"
                class="border w-6/12 rounded-lg px-6 py-2.5 outline-none"
                placeholder=""
              />
            </div>

            <div class="flex items-center space-x-2">
              <input v-model="isAnonymous" type="checkbox" />
              <p class="text-medium text-teal-600">
                PLEASE MAKE THIS AN ANONYMOUS GIFT
              </p>
            </div>

            <div class="flex items-center space-x-4">
              <p>IS THIS DONATION A TRIBUTE?</p>
              <div>
                <input v-model="isTributeDonation" type="radio" value="Yes" />
                Yes
              </div>
              <div>
                <input v-model="isTributeDonation" type="radio" value="No" /> No
              </div>
            </div>

            <div v-if="isTributeDonation === 'Yes'" class="space-y-6">
              <div class="flex flex-col space-y-3">
                <label class="text-teal-700 font-medium">TRIBUTE TYPE</label>
                <select
                  v-model="form.suffix"
                  class="border w-6/12 rounded-lg px-6 py-2.5 outline-none"
                >
                  <option value="In memory of">In memory of</option>
                  <option value="In Honor of">In Honor of</option>
                  <option value="In Recognition of">In Recognition of</option>
                </select>
              </div>
              <div class="flex flex-col space-y-3">
                <label class="text-teal-700 font-medium">NAME</label>
                <input
                  type="text"
                  class="border w-6/12 rounded-lg px-6 py-2.5 outline-none"
                  placeholder=""
                />
              </div>

              <div class="flex flex-col space-y-3">
                <label class="text-teal-700 font-medium">
                  TRIBUTE MESSAGE</label
                >
                <textarea
                  rows="5"
                  cols="5"
                  style="resize: none"
                  class="border w-6/12 rounded-lg px-6 py-2.5 outline-none"
                ></textarea>
              </div>
            </div>

            <div class="space-y-6">
              <div class="flex flex-col space-y-3">
                <label class="text-teal-700 font-medium">PAYMENT METHOD</label>
                <select
                  class="border w-6/12 rounded-lg px-6 py-2.5 outline-none"
                >
                  <option value="visa">Visa</option>
                  <option value="MasterCard">MasterCard</option>
                  <option value="AMEX">AMEX</option>
                </select>
              </div>
              <div class="flex flex-col space-y-3">
                <label class="text-teal-700 font-medium">NAME ON CARD </label>
                <input
                  type="text"
                  class="border w-6/12 rounded-lg px-6 py-2.5 outline-none"
                  placeholder=""
                />
              </div>

              <div class="flex flex-col space-y-3">
                <label class="text-teal-700 font-medium"> CARD </label>
                <div
                  class="border rounded-lg py-3 w-6/12 flex justify-center items-center"
                >
                  <input
                    type="text"
                    maxlength="16"
                    placeholder="Card number"
                    class="px-3 text-xs outline-none w-3/12"
                  />
                  <input
                    type="text"
                    maxlength="4"
                    placeholder="MM/YY"
                    class="px-3 text-xs outline-none w-3/12"
                  />
                  <input
                    type="text"
                    maxlength="3"
                    placeholder="CSC"
                    class="px-3 text-xs outline-none w-3/12"
                  />
                  <input
                    type="text"
                    maxlength="12"
                    placeholder="Postal code"
                    class="px-3 text-xs outline-none w-3/12"
                  />
                </div>
              </div>
            </div>
            <button
              class="font-bold border text-teal-600 rounded-full px-6 py-2 bg-white"
              type="button"
            >
              SUBMIT DONATION
            </button>
          </form>
        </section>
      </section>
    </section>
  </main>
</template>

<script>
import index from "./index.vue";
export default {
  components: { index },
  data() {
    return {
      isCreatingAccount: false,
      isTributeDonation: "",
      isRecurringGift: "",
      isAnonymous: false,
      giftAmount: "",
      form: {
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
  scrollToTop: true,
  watch: {
    isTributeDonation(value) {
      // if (value) {
      //   this.showAccountCreationForm = true;
      // }
    },
  },
};
</script>

<style>
</style>
