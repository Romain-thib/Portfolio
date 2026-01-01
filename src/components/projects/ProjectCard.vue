<script setup>
import { useI18n } from 'vue-i18n'
import TechBadge from './TechBadge.vue'

const { t } = useI18n()
const baseUrl = import.meta.env.BASE_URL

defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div
    class="group relative flex flex-col h-full bg-white dark:bg-slate-900 
           border border-slate-200 dark:border-slate-800
           rounded-3xl overflow-hidden transition-all duration-500
           hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-2"
  >
    <div class="relative h-52 overflow-hidden">
      <img
        :src="`${baseUrl}${project.image}`"
        :alt="t(project.titleKey)"
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      <div class="absolute inset-0 bg-linear-to-t from-slate-900/90 via-slate-900/40 to-transparent 
                  opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 
                  flex items-end p-6">
        <a 
          v-if="project.lien"
          :href="t(project.lien)" 
          target="_blank"
          class="hidden lg:flex items-center gap-2 bg-white text-slate-900 px-4 py-2 rounded-xl font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-emerald-50"
        >
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" class="w-4 h-4" />
          Code
        </a>
      </div>
    </div>

    <div class="p-6 flex flex-col grow">
      <div class="flex justify-between items-center mb-3">
        <h3 class="text-xl font-bold text-slate-800 dark:text-white group-hover:text-emerald-600 transition-colors">
          {{ t(project.titleKey) }}
        </h3>
        
        <a 
          v-if="project.lien"
          :href="t(project.lien)" 
          target="_blank"
          class="lg:hidden p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
        >
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" class="w-6 h-6 dark:invert" />
        </a>
      </div>

      <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
        {{ t(project.descriptionKey) }}
      </p>

      <div class="mt-auto">
        <ul class="flex flex-wrap gap-2">
          <TechBadge 
            v-for="tech in project.tech"
            :key="tech"
            :tech="tech"
          />
        </ul>
      </div>
    </div>
  </div>
</template>