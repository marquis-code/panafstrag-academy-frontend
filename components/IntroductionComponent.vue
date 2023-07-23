<template>
  <section class="overflow-hidden bg-cover bg-center bg-no-repeat">
    <div class="">
      <client-only>
        <carousel v-bind="options" class="">
          <slide v-for="(image, index) in images" :key="index" class="relative">
            <div class="md:h-[600px] bg-cover bg-center">
              <img class="w-full object-cover" :src="require(`@/assets/img/${image.url}`)" alt="">
            </div>
            <div class="ltr:sm:text-left rtl:sm:text-right absolute backdrop-brightness-50 w-full h-full inset-0">
              <div
                class="ltr:sm:text-left rtl:sm:text-right space-y-3 flex justify-center items-center flex-col backdrop-brightness-50 w-full h-full inset-0">
                <h2 class="text-xl font-bold text-gray-100 sm:text-3xl md:text-5xl">
                  {{ image.title }}
                </h2>

                <p class="text-white/90 text-center md:mt-6 md:block text-xs md:text-lg md:leading-relaxed">
                  {{ image.descrription }}
                </p>

                <div class="mt-4 sm:mt-8 w-full flex justify-center items-center">
                  <button
                    class="inline-block text-sm md:text-base rounded-full bg-indigo-600 w-4/12 md:w-1/12 py-2.5 md:py-2.5  font-medium text-white transition hover:bg-indigo-700 focus:outline-none">
                    {{ image.actionText }}
                  </button>
                </div>
              </div>
            </div>
          </slide>
        </carousel>
      </client-only>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      options: {
        loop: true,
        perPage: 1,
        autoplay: true,
        showPagination: false,
        speed: 2000,
        autoplayTimeout: 3000
      },
      images: [
        {
          id: 1,
          url: 'landing.jpeg',
          title: '2023 AAIRTA Regional Meetings',
          descrription: ' AARIRTA Regions have meetings happening in March and May.',
          actionText: 'Learn more'
        },
        {
          id: 2,
          url: 'volunteering.jpg',
          title: '2023 AAIRTA Regional Meetings',
          descrription: ' AARIRTA Regions have meetings happening in March and May.',
          actionText: 'Follow us'
        },
        {
          id: 3,
          url: 'landing.jpg',
          title: '2023 AAIRTA Regional Meetings',
          descrription: ' AARIRTA Regions have meetings happening in March and May.',
          actionText: 'Apply here'
        }
      ]
    }
  }
}
</script>

<style scoped>
.background {
  background-image: url("@/assets/img/background.jpeg");
}
</style>
