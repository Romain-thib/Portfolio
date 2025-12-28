<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const email = "romainthibaut20@gmail.com"
const githubUrl = "https://github.com/Romain-thib"
const linkedinUrl = "http://www.linkedin.com/in/romain-thibaut"

const cvUrl = computed(() => 
    locale.value === 'fr' ? '/cv/CV_Romain_THIBAUT_FR.pdf' : '/cv/CV_Romain_THIBAUT_EN.pdf'
)

const cvLabel = computed(() => 
    locale.value === 'fr' ? 'Télécharger mon CV' : 'Download my Resume'
)

</script>

<template>
  <div class="min-h-[80vh] pt-15 pb-1 mt-20">
    <div class="max-w-4xl mx-auto px-10">
      
      <h2 class="text-5xl font-semibold tracking-tight mb-10 text-zinc-800 dark:text-gray-100 text-center">
        {{ $t("contact.title") }}
      </h2>

      <div class="pl-6 py-4 bg-stone-50 dark:bg-slate-900 rounded-r-xl mb-8">
        <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-center text-lg">
          {{ $t("contact.description") }}
        </p>
      </div>

      <div class="text-center mb-12">
        <a 
          :href="`mailto:${email}`" 
          class="inline-flex items-center px-8 py-3 text-2xl border gap-2
                    dark:border-emerald-600 bg-emerald-600 hover:bg-emerald-800
                   dark:hover:border-emerald-800
                   text-white font-semibold rounded-lg cursor-pointer
                   transition transform hover:scale-102
                    "
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          {{ email }}
        </a>
      </div>

      <div class="pl-6 bg-stone-50 dark:bg-slate-900 rounded-r-xl text-center">
          <a 
            :href="cvUrl" 
            download
            class="inline-flex items-center gap-3 text-xl font-semibold text-slate-700 dark:text-slate-300 hover:text-emerald-800 dark:hover:text-emerald-800 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            {{ cvLabel }}
          </a>
     </div>

      <div class="pl-6 py-6 bg-stone-50 dark:bg-slate-900 rounded-r-xl">
        <p class="text-slate-700 dark:text-slate-300 text-center mb-6 text-lg">
          {{ $t("contact.socialMedia") }}
        </p>
        
        <div class="flex justify-center gap-8">
          <a 
            :href="githubUrl" 
            target="_blank"
            rel="noopener noreferrer"
            class="group flex flex-col items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-zinc-900 dark:hover:text-white transition-all"
          >
            <div class="p-4 bg-white dark:bg-slate-800 rounded-full shadow-md group-hover:shadow-xl group-hover:scale-110 transition-all">
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" 
                alt="GitHub"
                class="w-10 h-10 dark:invert"
              />
            </div>
            <span class="text-sm font-medium">GitHub</span>
          </a>

          <a 
            :href="linkedinUrl" 
            target="_blank"
            rel="noopener noreferrer"
            class="group flex flex-col items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
          >
            <div class="p-4 bg-white dark:bg-slate-800 rounded-full shadow-md group-hover:shadow-xl group-hover:scale-110 transition-all">
              <svg class="w-10 h-10 fill-current text-[#0A66C2]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <span class="text-sm font-medium">LinkedIn</span>
          </a>

        </div>
      </div>

    </div>
  </div>
</template>