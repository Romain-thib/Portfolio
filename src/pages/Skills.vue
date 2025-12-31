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
  <div class="min-h-screen pt-15 pb-1 my-20 bg-stone-200 dark:bg-slate-900 transition-colors duration-500">
    <div class="max-w-6xl mx-auto px-6">

      <h2 class="text-5xl font-semibold tracking-tight mb-10 text-zinc-800 dark:text-gray-100 text-center">
          {{ t('ui.skills') }}
        </h2>

      <section
        v-for="group in groupedSkills"
        :key="group.category"
        class="mb-16 last:mb-0"
      >
        <div class="flex items-center gap-4 mb-8">
          <h2 class="text-xl font-bold uppercase tracking-[0.2em] text-slate-800 dark:text-emerald-500 whitespace-nowrap">
            {{ group.category }}
          </h2>
          <div class="w-full h-px bg-stone-300 dark:bg-slate-800 transition-colors duration-500"></div>
        </div>

        <ul class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <SkillsCard
            v-for="tech in group.techs"
            :key="tech.name"
            :tech="tech"
          />
        </ul>
      </section>
    </div>
  </div>
</template>