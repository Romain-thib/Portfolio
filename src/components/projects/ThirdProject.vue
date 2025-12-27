<script setup>
import projects from '../../data/projects.json'
import ProjectCard from './ProjectCard.vue'

const featured = projects.slice(0, 3)

import { 

  ArrowRightIcon 
} from '@heroicons/vue/24/outline'
</script>

<template>
  <section class="py-16 bg-stone-100 dark:bg-slate-900 mx-5">
    <h2 class="text-3xl md:text-4xl font-bold mb-6 text-white text-center pb-10">
      Mes projets
    </h2>

    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <ProjectCard
        v-for="p in featured"
        :key="p.title"
        :project="p"
      />
    </div>

    <div>
      <button
            @click="router.push('/contact')"
            class="mt-15 px-8 py-3 bg-transparent border-2 border-zinc-700 dark:border-emerald-500
                   text-zinc-700 dark:text-emerald-500 font-semibold rounded-lg cursor-pointer
                   hover:bg-zinc-700 hover:text-white dark:hover:bg-emerald-800 dark:hover:text-white
                   transition transform hover:scale-105
                   flex items-center gap-2 mx-auto"
          >
            {{ $t('home.projects.view_all') }}
            <ArrowRightIcon class="w-5 h-5" />
      </button>
    </div>
  </section>
</template>

