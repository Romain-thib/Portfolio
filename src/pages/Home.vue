<script setup>
import { useRouter } from 'vue-router'
import { computed } from 'vue'
import projects from '../data/projects.json'
import skills from '../data/skills.json'
import ThirdProject from '../components/projects/ThirdProject.vue'
import RaquetteAnimation from '../components/images/RaquetteAnimation.vue'
import BallonFoot from '../components/images/BallonFoot.vue'
import Livre from '../components/images/Livre.vue'
import Pion from '../components/images/Pion.vue'
import { 
  EnvelopeIcon,
  ArrowRightIcon 
} from '@heroicons/vue/24/outline'

const router = useRouter()
const featured = projects.slice(0, 3)

const keySkills = computed(() => {
  const selectedSkills = [
    'Java',
    'Laravel', 
    'Python',
    'PostgreSQL',
    'Git',
    'Tailwind CSS'
  ]
  
  return skills.filter(skill => selectedSkills.includes(skill.name))
})
</script>

<template>
  <section class="relative min-h-[85vh] flex items-center justify-center overflow-hidden
                    bg-gradient-to-br from-stone-50 to-stone-200 
                    dark:from-slate-900 dark:to-slate-800">
      
      <div class="absolute inset-0 pointer-events-none">
        <div class="right-2/30 ml-5 top-7 opacity-100 absolute  rotate-280
                  w-23 sm:w-28 md:w-30 lg:w-30 xl:w-40
                  -mt-13 sm:-mt-10 md:-mt-11 lg:-mt-11 xl:mt-6
                  -mr-15 sm:-mr-13 md:-mr-10 lg:-mr-11 xl:-mr-10 2xl:mr-11">
        <RaquetteAnimation />
        </div>

        <div class="left-2/30 top-9 opacity-100 absolute 
                    w-20 sm:w-24 md:w-28 lg:w-30 xl:w-38
                    -mt-2 sm:-mt-2 md:-mt-5 lg:mt-0 xl:mt-10
                    -ml-3 sm:ml-0 md:-ml-1 lg:ml-2 xl:ml-0 2xl:ml-20">
          <BallonFoot />
        </div>

        <div class="right-2/30 bottom-9 opacity-100 absolute
                    w-30 sm:w-30 md:w-50 lg:w-50 xl:w-70
                    -ml-3 sm:ml-0 md:-ml-1 lg:ml-2 xl:ml-0 2xl:ml-20">
          <Livre />
        </div>

        <div class="left-1/30 bottom-9 opacity-100 absolute -rotate-15
                    w-30 sm:w-30 md:w-50 lg:w-50 xl:w-70
                    -ml-3 sm:ml-0 md:-ml-1 lg:ml-2 xl:ml-0 2xl:ml-20">
          <Pion />
        </div>
      </div>

      <div class="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold mb-6
                   text-zinc-800 dark:text-emerald-400">
          Romain
        </h1>
        
        <p class="text-2xl md:text-3xl mb-4 text-zinc-700 dark:text-slate-300 font-light">
          {{ $t('home.me.role') || 'Développeur Full Stack' }}
        </p>
        
        <p class="text-lg md:text-xl mb-10 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          {{ $t('home.me.tagline') || 'Passionné par la création d\'applications web modernes et performantes' }}
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            @click="router.push('/about')"
            class="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 
                   text-white font-semibold rounded-lg
                   transition transform hover:scale-105
                   flex items-center gap-2"
          >
            {{ $t('home.me.cta_projects') }}
            <ArrowRightIcon class="w-5 h-5" />
          </button>
          
          <button
            @click="router.push('/contact')"
            class="px-8 py-3 bg-transparent border-2 border-zinc-700 dark:border-emerald-500
                   text-zinc-700 dark:text-emerald-500 font-semibold rounded-lg
                   hover:bg-zinc-700 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-white
                   transition transform hover:scale-105
                   flex items-center gap-2"
          >
            <EnvelopeIcon class="w-5 h-5" />
            {{ $t('home.me.cta_contact') }}
          </button>
        </div>
      </div>
    </section>

    <section class="py-20 bg-linear-to-r from-emerald-500 to-emerald-600 dark:from-emerald-600 dark:to-emerald-700">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6 text-white">
          {{ $t('home.skills.title') }}
        </h2>
        
        <p class="text-lg md:text-xl mb-8 text-emerald-50">
          {{ $t('home.skills.subtitle') }}
        </p>

        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          <div
            v-for="skill in keySkills"
            :key="skill.name"
            class="p-6 bg-white dark:bg-slate-800 rounded-xl
                   border border-stone-200 dark:border-slate-700
                   hover:shadow-lg hover:scale-105 transition-all
                   text-center group"
          >
            <img 
              :src="skill.logo" 
              :alt="skill.name"
              class="w-16 h-16 mx-auto mb-4 object-contain
                     group-hover:scale-110 transition-transform"
            />
            <h3 class="text-base font-semibold text-zinc-800 dark:text-slate-200">
              {{ skill.name }}
            </h3>
          </div>
        </div>

        <div class="text-center mt-12">
          <button
            @click="router.push('/skills')"
            class="text-lg md:text-xl mb-8 text-emerald-50
                   font-semibold inline-flex items-center gap-2 transition"
          >
            {{ $t('home.skills.view_all') }}
            <ArrowRightIcon class="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>

    <ThirdProject class="z-10" />

    <!-- Section Call To Action -->
    <section class="py-20 bg-gradient-to-r from-emerald-500 to-emerald-600 dark:from-emerald-600 dark:to-emerald-700">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6 text-white">
          {{ $t('home.cta.title') }}
        </h2>
        
        <p class="text-lg md:text-xl mb-8 text-emerald-50">
          {{ $t('home.cta.description') }}
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            @click="router.push('/contact')"
            class="px-8 py-4 bg-white text-emerald-600 font-bold rounded-lg
                   hover:bg-emerald-50 transition transform hover:scale-105
                   inline-flex items-center gap-2"
          >
            <EnvelopeIcon class="w-6 h-6" />
            {{ $t('home.cta.contact_button') }}
          </button>
          
          <button
            @click="router.push('/about')"
            class="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg
                   hover:bg-white hover:text-emerald-600 transition transform hover:scale-105"
          >
            {{ $t('home.cta.about_button') }}
          </button>
        </div>
      </div>
    </section>
</template>

