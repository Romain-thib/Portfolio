<script setup>
import projects from '../data/projects.json'
import ProjectCard from '../components/ProjectCard.vue'
</script>

<template>
  <section class="py-10">
    <h2 class="text-3xl font-bold mb-6 text-center">Tous mes projets</h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <ProjectCard
        v-for="p in projects"
        :key="p.title"
        :project="p"
      />
    </div>
  </section>
</template>
