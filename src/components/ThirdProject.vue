<script setup>
import projects from '../data/projects.json'
import ProjectCard from '../components/ProjectCard.vue'

const featured = projects.slice(0, 3)
</script>

<template>
  <section class="py-16 bg-stone-100 dark:bg-slate-900">
    <h2 class="text-3xl font-semibold tracking-tight mb-10 text-zinc-800 dark:text-slate-100 text-center">
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
        class="inline-block  bg-blue-900 hover:bg-blue-950
         text-white px-8 py-3 rounded-lg transition"
      >
        {{ $t('ui.button_view_projects') }}
      </router-link>
    </div>
  </section>
</template>

