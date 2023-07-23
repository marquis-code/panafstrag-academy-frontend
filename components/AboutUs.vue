<template>
  <section>
    <div class="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
        <div class="relative z-10 lg:py-16">
          <div class="relative h-64 sm:h-80 lg:h-full">
            <img alt="House" src="@/assets/img/landing.jpg" class="absolute inset-0 h-full w-full object-cover" />
          </div>
        </div>

        <div class="relative flex items-center px-3 md:px-10 bg-gray-100">
          <span class="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

          <div class="lg:p-24 py-10">
            <h2 class="text-lg md:text-2xl font-bold sm:text-xl">
              About the Academy of Africana Indigenous Religions, Theology and
              Arts website project (AAIRTA).
            </h2>

            <p class="mt-4 text-gray-600 text-justify md:text-base text-sm">
              The AAIRTA is the largest scholarly society dedicated to the
              academic study of religion, with more than 8,000 members around
              the world. The AAR's mission is to foster excellence in the
              academic study of religion and enhance the public understanding of
              religion.
            </p>

            <nuxt-link to="/about-us" href="#"
              class="mt-8 inline-block rounded-full shadow-lg border border-green-600 text-center bg-white px-6 md:px-12 py-3 md:py-3 text-xs md:text-sm font-medium text-green-600 hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">
              LEARN MORE ABOUT THE AAIRTA
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
