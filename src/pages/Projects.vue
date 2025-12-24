<script setup>
import { ref, computed } from 'vue'
import projects from '../data/projects.json'
import ProjectCard from '../components/projects/ProjectCard.vue'
import ProjectFilter from '../components/projects/ProjectFilter.vue'

const selectedTech = ref('')

// Filtrer les projets selon la technologie sélectionnée
const filteredProjects = computed(() => {
  if (!selectedTech.value) {
    return projects
  }
  return projects.filter(project =>
    project.tech.some(tech => 
      tech.toUpperCase() === selectedTech.value.toUpperCase()
    )
  )
})
</script>

<template>
  <section class="py-10">
    <h2 class="text-4xl font-semibold tracking-tight mb-10 text-zinc-800 dark:text-amber-400 text-center">Tous mes projets</h2>

    <!-- Filtre par technologie -->
    <ProjectFilter
      :projects="projects"
      v-model:selected-tech="selectedTech"
    />

    <!-- Grille des projets -->
    <div class="max-w-7xl px-5 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <ProjectCard
        v-for="p in filteredProjects"
        :key="p.id"
        :project="p"
      />
    </div>

    <!-- Message si aucun résultat -->
    <div
      v-if="filteredProjects.length === 0"
      class="text-center text-zinc-600 dark:text-slate-400 mt-8"
    >
      Aucun projet trouvé avec cette technologie.
    </div>
  </section>
</template>