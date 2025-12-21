<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100" style="font-family: 'Inter', sans-serif">
    <Navbar />

    <main class="flex-1">
      <router-view />
    </main>

    <Footer />
  </div>
</template>

