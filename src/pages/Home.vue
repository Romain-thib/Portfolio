<script setup>
import projects from '../data/projects.json'
import ProjectCard from '../components/ProjectCard.vue'

const featured = projects.slice(0, 3)
</script>

<template>
  <section class="py-10">
    <h2 class="text-3xl font-bold mb-6 text-center">Mes projets</h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <ProjectCard
        v-for="p in featured"
        :key="p.title"
        :project="p"
      />
    </div>

    <div class="text-center mt-8">
      <router-link
        to="/projects"
        class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Voir tous les projets
      </router-link>
    </div>
  </section>
</template>
