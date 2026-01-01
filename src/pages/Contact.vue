<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const baseUrl = import.meta.env.BASE_URL

const email = "romainthibaut20@gmail.com"
const githubUrl = "https://github.com/Romain-thib"
const linkedinUrl = "http://www.linkedin.com/in/romain-thibaut"

const cvUrl = computed(() => 
    locale.value === 'fr' 
      ? `${baseUrl}cv/CV_Romain_THIBAUT_FR.pdf`
      : `${baseUrl}cv/CV_Romain_THIBAUT_EN.pdf`
)

const cvLabel = computed(() => 
    locale.value === 'fr' ? 'Télécharger mon CV' : 'Download my Resume'
)

</script>

<template>
  <div class="min-h-screen pt-15 pb-12 flex items-center justify-center bg-stone-200 dark:bg-slate-900 transition-colors duration-500">
    <div class="max-w-5xl mx-auto px-6 w-full">
      
      <div class="text-center mb-16">
        <div class="mb-10 text-center">
          <div class="inline-block text-left">
            <h2 class="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 dark:text-white mb-4">
              {{ $t("contact.title") }}<span class="text-emerald-600">.</span>
            </h2>
            <div class="w-20 h-2 bg-emerald-600 rounded-full"></div>
          </div>
        </div>
        
        <p class="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed transition-colors duration-500">
          {{ $t("contact.description") }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div class="md:col-span-2 group relative overflow-hidden rounded-3xl p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none transition-all hover:border-emerald-500/50">
          <div class="relative z-10 flex flex-col h-full justify-between">
            <div>
              <div class="inline-flex p-3 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-slate-800 dark:text-white mb-10">{{ $t("contact.message") }}</h3>
            </div>
            
            <a 
              :href="`mailto:${email}`" 
              class="group/btn relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white text-xl font-bold rounded-2xl transition-all active:scale-95 overflow-hidden"
            >
              <span class="relative z-10">{{ email }}</span>
              <div class="absolute inset-0 bg-linear-to-r from-emerald-400 to-teal-400 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
            </a>
          </div>
          <div class="absolute -right-10 -bottom-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-colors"></div>
        </div>

        <a 
          :href="cvUrl" 
          download
          class="group flex flex-col items-center justify-center p-8 rounded-3xl border-2 border-slate-300 dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all hover:bg-emerald-50/50 dark:hover:bg-emerald-900/10"
        >
          <div class="w-16 h-16 mb-4 flex items-center justify-center rounded-full 
            text-slate-600 dark:text-slate-400  
            group-hover:text-emerald-600 
            dark:group-hover:text-emerald-500 
            transition-all duration-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <span class="text-lg font-bold text-slate-700 dark:text-slate-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
            {{ cvLabel }}
          </span>
        </a>

        <div class="md:col-span-3 flex flex-wrap items-center justify-between p-8 rounded-3xl bg-slate-100 dark:bg-slate-900/50 border border-transparent dark:border-slate-800">
          <p class="text-xl font-semibold text-slate-700 dark:text-slate-300 mb-4 md:mb-0">
            {{ $t("contact.socialMedia") }}
          </p>
          
          <div class="flex gap-4">
            <a :href="githubUrl" target="_blank" class="flex items-center gap-3 px-6 py-3 rounded-xl bg-white dark:bg-slate-800 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" class="w-6 h-6 dark:invert" alt="GitHub" />
              <span class="font-bold text-slate-800 dark:text-white text-sm">GitHub</span>
            </a>
            
            <a :href="linkedinUrl" target="_blank" class="flex items-center gap-3 px-6 py-3 rounded-xl bg-white dark:bg-slate-800 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" class="w-6 h-6" alt="LinkedIn" />
              <span class="font-bold text-slate-800 dark:text-white text-sm">LinkedIn</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>