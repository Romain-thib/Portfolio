<script setup>
import { useI18n } from 'vue-i18n'
import TimelineItem from './TimelineItem.vue'

const { t } = useI18n()

const timelineItems = ['but', 'lycee']
</script>

<template>
  <div class="w-full mt-15">
    <h2 class="relative z-10 text-4xl font-semibold tracking-tight mb-10 text-zinc-800 dark:text-amber-400 text-center">
      {{ t('timeline.title') }}
    </h2>

    <div class="relative flex flex-col gap-8">
      <div class="absolute -left-16 top-0 bottom-0 w-1 bg-gray-300 dark:bg-slate-800 rounded">
      <div class="absolute left-1/2 -translate-x-1/2 w-5 h-5 border-l-5 border-t-5 border-gray-300 dark:border-slate-800 rotate-45 bg-white dark:bg-slate-900"></div>
      </div>
      
      <TimelineItem
        v-for="item in timelineItems"
        :key="item"
        :date="t(`timeline.${item}.date`)"
        :city="t(`timeline.${item}.city`)"
        :place="t(`timeline.${item}.place`)"
        :diploma="t(`timeline.${item}.diploma`)"
        :subtitle="t(`timeline.${item}.subtitle`)"
        :description="t(`timeline.${item}.description`)"
        :is-current="item === 'but'"
      />
    </div>
  </div>
</template>