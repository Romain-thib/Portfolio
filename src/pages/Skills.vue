<script setup>
import { useI18n } from 'vue-i18n'
import SkillsCard from '../components/skills/SkillsCard.vue'
import skills from '../data/skills.json'

const { t } = useI18n()

// Ordre explicite des catégories
const categoriesOrder = [
  'Développement Web',
  'Frameworks',
  "Développement d'application",
  'Langages de programmation',
  'Bases de données',
  'Outils',
  'Versionning et travail collaboratif',
  'IDEs'
]

// Regrouper les skills par catégorie
const groupedSkills = categoriesOrder.map(category => ({
  category,
  techs: skills.filter(tech => tech.category === category)
})).filter(group => group.techs.length > 0)
</script>

<template>
  <div class="min-h-[80vh] pt-15 pb-1 mt-0">
    <div class="container mx-auto px-4">
      <h1 class="text-5xl font-bold mb-15 text-center">
        {{ t('ui.skills') }}
      </h1>

      <section
        v-for="group in groupedSkills"
        :key="group.category"
        class="mb-12"
      >
        <h2 class="text-3xl font-semibold mb-6">
          {{ group.category }}
        </h2>

        <ul class="flex flex-wrap gap-4">
          <SkillsCard
            v-for="(tech, index) in group.techs"
            :key="tech.name"
            :tech="tech"
            :color-index="index"
          />
        </ul>
      </section>
    </div>
  </div>
</template>