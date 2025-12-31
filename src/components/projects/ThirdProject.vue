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
  <section class="py-16  dark:bg-slate-900 mx-5">
    <h2 class="text-5xl md:text-5xl lg:text-6xl font-bold mb-6 text-zinc-800 dark:text-gray-100 text-center pb-10">
      {{ $t('project.home') }}
    </h2>

    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2
                  lg:grid-cols-3 xl:grid-cols-3 gap-8 justify-items-center">
        <ProjectCard
          v-for="p in featured"
          :key="p.title"
          :project="p"
        />
      </div>
    </div>

    <div>
      <button
            @click="router.push('/projects')"
            class="mt-15 px-8 py-3 bg-emerald-600 hover:bg-emerald-800
                   border border-emerald-600 dark:hover:border-emerald-800
                   hover:border-emerald-800 
                   text-white dark:hover:bg-emerald-800
                   font-semibold rounded-lg cursor-pointer
                   transition transform hover:scale-102
                   flex items-center gap-2 mx-auto"
          >
            {{ $t('home.projects.view_all') }}
            <ArrowRightIcon class="w-5 h-5" />
      </button>
    </div>
  </section>
</template>

