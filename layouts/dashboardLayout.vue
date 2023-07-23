<template>
  <section>
    <main class="md:flex" v-if="$nuxt.isOnline">
      <div class="md:w-2/12">
        <dashboard-sidebar></dashboard-sidebar>
      </div>
      <div class="md:w-10/12 h-screen overflow-y-auto">
        <dashboard-header class="mx-6 py-6"></dashboard-header>
        <Nuxt />
      </div>
    </main>
    <main v-if="$nuxt.isOffline">
      <div class="grid place-content-center h-screen">
        <div class="flex justify-center items-center flex-col space-y-3">
          <p class="text-gray-500 font-medium">You are offline.</p>
          <p class="text-gray-500 font-medium">Please check your internet connection and try again.</p>
          <button @click="$router.go(0)" class="text-white text-sm bg-green-500 rounded-full py-2 px-6">Refresh page</button>
        </div>
      </div>
    </main>
  </section>
</template>

<script>
import DashboardSidebar from "@/components/DashboardSidebar.vue";
import DashboardHeader from "@/components/DashboardHeader.vue";
export default {
  components: { DashboardSidebar, DashboardHeader }
};
</script>
