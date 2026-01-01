<script setup>
import { useI18n } from 'vue-i18n'
import SkillsCard from '../components/skills/SkillsCard.vue'
import skills from '../data/skills.json'
import { computed } from 'vue'

const { t } = useI18n()

// Ordre explicite des catégories (avec les clés)
const categoriesOrder = [
  'web',
  'frameworks',
  'app',
  'prog',
  'data',
  'tools',
  'git',
  'ide'
]

// Regrouper les skills par catégorie
const groupedSkills = computed(() =>
  categoriesOrder.map(categoryKey => ({
      categoryKey,
      categoryLabel: t(`skills.${categoryKey}`),
      techs: skills.filter(tech => tech.category === categoryKey) 
  })).filter(group => group.techs.length > 0) 
)
</script>

<template>
  <div class="min-h-screen pt-15 pb-1 my-20 bg-stone-200 dark:bg-slate-900 transition-colors duration-500">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      
      <div class="mb-10 text-center">
       <div class="inline-block text-left">
         <h2 class="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 dark:text-white mb-4">
            {{ t('ui.skills') }}<span class="text-emerald-600">.</span>
          </h2>
          <div class="w-20 h-2 bg-emerald-600 rounded-full"></div>
        </div>
      </div>

      <section
        v-for="group in groupedSkills"
        :key="group.categoryKey"
        class="mb-12 sm:mb-16 last:mb-0"
      >
        <div class="flex items-center gap-4 mb-6 sm:mb-8">
          <h2 class="text-base sm:text-xl font-bold uppercase tracking-[0.2em] text-slate-800 dark:text-emerald-500 whitespace-nowrap">
            {{ group.categoryLabel }}
          </h2>
          <div class="w-full h-px bg-stone-300 dark:bg-slate-800 transition-colors duration-500"></div>
        </div>

        <ul class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
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