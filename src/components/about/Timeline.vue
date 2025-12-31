<script setup>
import { useI18n } from 'vue-i18n'
import TimelineItem from './TimelineItem.vue'

const { t } = useI18n()

const timelineItems = ['but', 'lycee']
</script>

<template>
  <div class="w-full  -ml-10">
    <div class="mb-15 text-center">
       <div class="inline-block text-left">
         <h2 class="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 dark:text-white mb-4">
          {{ t('timeline.title') }}<span class="text-emerald-600">.</span>
        </h2>
        
        <div class="w-20 h-2 bg-emerald-600 rounded-full"></div>
      </div>
    </div>

    <div class="relative flex flex-col gap-8 pl-6 ml-[20%]">
      <!-- Ligne verticale de la timeline -->
      <div class="absolute -left-16 top-0 bottom-0 w-0.5 bg-linear-to-b from-transparent via-gray-300 to-gray-300 dark:via-slate-500 dark:to-slate-700 rounded">
      </div>
      
      <!-- Flèche vers le haut (sens du temps) -->
      <div class="absolute -left-17 -top-2 flex flex-col items-center"></div>
      
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