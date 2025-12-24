<script setup>
import { useI18n } from 'vue-i18n'
import SkillsCard from '../components/skills/SkillsCard.vue'
import projects from '../data/projects.json'

const { t } = useI18n()

// Extraire toutes les compétences uniques de tous les projets
// Normaliser en majuscules pour éviter les doublons (ex: "PHP" et "php")
const allTechs = [...new Set(projects.flatMap(p => p.tech.map(t => t.toUpperCase())))]
</script>

<template>
  <div class="min-h-[80vh] pt-15 pb-1 mb-10">
    <div class="container mx-auto px-4">
      <h1 class="text-4xl font-bold mb-8 text-center">
        {{ t('ui.skills') }}
      </h1>
      
      <ul class="flex flex-wrap gap-4 justify-center">
        <SkillsCard
          v-for="tech in allTechs"
          :key="tech"
          :tech="tech"
        />
      </ul>
    </div>
  </div>
</template>