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
    class="bg-slate-100 bg-linear-to-br dark:from-slate-900 dark:to-slate-800
           border border-slate-200 dark:border-slate-700
           rounded-xl shadow-sm hover:shadow-lg
           p-6 flex flex-col gap-6 transition-shadow"
  >
    <h3 class="text-2xl font-semibold text-zinc-800 dark:text-slate-100 text-center">
      {{ t(project.titleKey) }}
    </h3>

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