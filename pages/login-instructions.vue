<template>
  <main
    class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
  >
    <div class="flex items-center space-x-2">
      <p class="text-sm md:text-base">Home</p>
      <p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
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
      <p class="text-sm md:text-base">Join</p>
    </div>

    <div class="">
      <h1
        class="font-bold text-teal-800 text-3xl md:text-4xl tracking-wider leading-snug pt-6 w-1/2 drop-shadow-lg"
      >
        Instructions for Logging into Your AAR Account
      </h1>

      <div class="md:w-8/12 space-y-6 mt-5">
        <p class="text-gray-700 font-extrabold text-lg leading-loose">
          If you haven't logged into your AAR account since our website was
          redesigned, you'll need to follow the steps below to access your
          information.
        </p>
      </div>

      <div class="md:w-8/12 space-y-6 mt-5">
        <p class="text-gray-700 font-extrabold text-lg leading-loose">
          To log into your account on the new website for the first time, click
          the “Forgot password?” link on the
          <nuxt-link class="font-medium text-teal-700" to="/signin"
            >sign-in page.</nuxt-link
          >
          You will be prompted to enter your username.
          <b>You must enter an email address as your new username.</b> It will
          become the email address associated with your AAR account and the
          username you need to log in each time. Numerical IDs accepted on our
          old system are no longer valid. After entering your new username,
          you'll receive a link to create a new password to log in.
        </p>
      </div>

      <div class="md:w-8/12 space-y-6 mt-5">
        <p class="text-gray-700 font-extrabold text-lg leading-loose">
          If you would like to change your username to a different email
          address, please contact us at
          <a
            class="text-teal-600 font-medium"
            href="mailto:membership@aarweb.org"
            >membership@aarweb.org.</a
          >
        </p>
      </div>

      <section class="space-y-6 md:w-9/12 mt-10">
        <h1
          class="text-teal-700 text-2xl font-medium tracking-wider leading-snug"
        >
          Lapsed members
        </h1>

        <p class="text-gray-700 font-extrabold text-lg leading-loose">
          Because your membership has lapsed, you will need to follow the steps
          below to log into your account on the new website for the first time.
        </p>

        <ol class="text-gray-600 list-disc space-y-5 pl-6">
          <li>
            Click the “Forgot username?” link on the
            <nuxt-link class="text-teal-700 font-medium underline" to="/signin"
              >sign-in page.</nuxt-link
            >
            You will be prompted to enter your username. You must enter an email
            address as your new username. It will become the email address
            associated with your AAR account and the username you need to log in
            each time. Numerical IDs accepted on our old system are no longer
            valid.
          </li>
          <li>Check your email inbox for an email from the organization.</li>
          <li>
            Click the link in the email or copy and paste it into a web browser.
            The link will take you to a page where you can enter your new
            password. Click submit. The page will be refreshed automatically and
            you will be signed into the site.
          </li>
        </ol>

        <p class="text-gray-700 font-extrabold text-lg leading-loose">
          If you would like to change your username to a different email
          address, please contact us at
          <a
            class="font-medium text-teal-700"
            href="mailto:membership@aarweb.org."
            >membership@aarweb.org.</a
          >
        </p>
      </section>
    </div>
  </main>
</template>

<script>
export default {  scrollToTop: true};
</script>

<style>
</style>
