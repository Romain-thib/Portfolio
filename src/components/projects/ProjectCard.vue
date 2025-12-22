<script setup>
import { useI18n } from 'vue-i18n'

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
  class="bg-stone-50 dark:bg-slate-800
         border border-stone-200 dark:border-slate-700
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

    <p class="text-zinc-600 dark:text-slate-300 text-2xs leading-relaxed">
      {{ t(project.descriptionKey) }}
    </p>

    <ul class="flex flex-wrap gap-2 mt-auto">
      <li
        v-for="tech in project.tech"
        :key="tech"
        class="bg-stone-100 dark:bg-slate-700
         text-zinc-700 dark:text-slate-200
         text-xs px-3 py-1 rounded-full"
      >
        {{ tech }}
      </li>
    </ul>
  </div>
</template>
