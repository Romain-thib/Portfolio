<script setup>
import { useI18n } from 'vue-i18n'
import TechBadge from './TechBadge.vue'

const { t } = useI18n()

defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div
  class="from-stone-300 to-stone-50  bg-linear-to-br dark:from-slate-900 dark:to-slate-800
         border-emerald-600 dark:border-emerald-900 border-2
         rounded-xl shadow-sm hover:shadow-lg
         p-6 flex flex-col gap-6
         transition transform hover:scale-103"
>

  <div class="flex items-center justify-between">
    <h3 class="text-2xl font-semibold text-zinc-800 dark:text-slate-100">
      {{ t(project.titleKey) }}
    </h3>

    
    <a 
      :href="t(project.lien)" 
      target="_blank"
      rel="noopener noreferrer"
      class="group flex flex-col items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-zinc-900 dark:hover:text-white transition-all"
      :title="t('project.messageLink')"
    >
      <div class="rounded-full shadow-md group-hover:shadow-xl group-hover:scale-105 transition-all bg-black">
        <img 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" 
          alt="Lien vers le dépôt gitHub"
          class="w-12 h-auto invert brightness-0"
        />
      </div>
    </a>
    
  </div>

  <img
    :src="project.image"
    :alt="t(project.titleKey)"
    class="w-full h-50 object-cover rounded-lg"
  />

  <p class="text-zinc-800 dark:text-slate-300 text-2xs leading-relaxed">
    {{ t(project.descriptionKey) }}
  </p>

  <ul class="flex flex-wrap gap-2 mt-auto">
    <TechBadge 
      v-for="tech in project.tech"
      :key="tech"
      :tech="tech"
    />
  </ul>

</div>

</template>