<script setup>
import projects from '../../data/projects.json'
import ProjectCard from './ProjectCard.vue'

const featured = projects.slice(0, 3)
</script>

<template>
  <section class="py-16 bg-stone-100 dark:bg-slate-900 mx-5">
    <h2 class="text-3xl md:text-4xl font-bold mb-6 text-white text-center pb-10">
      Mes projets
    </h2>

    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <ProjectCard
        v-for="p in featured"
        :key="p.title"
        :project="p"
      />
    </div>

    <div class="text-center mt-16">
      <router-link
        to="/projects"
        class="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 
                   text-white font-semibold rounded-lg
                   transition transform hover:scale-105"
      >
        {{ $t('ui.button_view_projects') }}
      </router-link>
    </div>
  </section>
</template>

