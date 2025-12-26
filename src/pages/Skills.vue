<script setup>
import { useI18n } from 'vue-i18n'
import SkillsCard from '../components/skills/SkillsCard.vue'
import skills from '../data/skills.json'

const { t } = useI18n()

const allTechs = skills
</script>

<template>
  <div class="min-h-[80vh] pt-15 pb-1 mb-10">
    <div class="container mx-auto px-4">
      <h1 class="text-4xl font-bold mb-8 text-center">
        {{ t('ui.skills') }}
      </h1>
      
      <ul class="flex flex-wrap gap-4 justify-center">
        <SkillsCard
          v-for="(tech, index) in allTechs"
          :key="tech.name"
          :tech="tech"
          :color-index="index"
        />
      </ul>
    </div>
  </div>
</template>