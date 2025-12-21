<script setup>
import projects from '../data/projects.json'
import ThirdProject from '../components/ThirdProject.vue';

const featured = projects.slice(0, 3)
</script>

<template>
  <section class="py-16 bg-stone-100 dark:bg-slate-900">
    <h2 class="text-4xl font-semibold tracking-tight mb-10 text-zinc-800 dark:text-slate-100 text-center">
      {{ $t("presentation.title") }}
    </h2>
    <p class="px-[3%] max-w-4xl mx-auto leading-relaxed text-lg text-slate-700 dark:text-slate-300"> 
      {{ $t("presentation.description") }}
    </p>
    <ThirdProject />
  </section>
  
</template>

