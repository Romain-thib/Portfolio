<script setup>
import projects from '../../data/projects.json'
import ProjectCard from './ProjectCard.vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const router = useRouter()
const { t } = useI18n()
const featured = projects.slice(0, 3)

import { 

  ArrowRightIcon 
} from '@heroicons/vue/24/outline'
</script>

<template>
  <section class="py-24 bg-stone-200 dark:bg-slate-900 transition-colors duration-500 overflow-hidden">
    <div class="max-w-7xl mx-auto px-6">
      
      <div class="mb-16">
        <h2 class="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 dark:text-white mb-4">
          {{ $t('project.home') }}<span class="text-emerald-600">.</span>
        </h2>
        <div class="w-20 h-2 bg-emerald-600 rounded-full"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <ProjectCard
          v-for="p in featured"
          :key="p.title"
          :project="p"
          class="transition-all duration-500"
        />
      </div>

      <div class="mt-20 flex justify-center">
        <button
          @click="router.push('/projects')"
          class="group relative px-10 py-4 bg-slate-900 dark:bg-emerald-600 
                 text-white font-bold rounded-2xl cursor-pointer
                 overflow-hidden transition-all duration-300
                 hover:shadow-2xl hover:shadow-emerald-500/20 hover:-translate-y-1
                 flex items-center gap-3"
        >
          <div class="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full"></div>
          
          <span class="relative">{{ $t('home.projects.view_all') }}</span>
          <ArrowRightIcon class="w-5 h-5 relative transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  </section>
</template>

