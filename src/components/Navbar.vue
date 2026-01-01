<script setup>
import { ref } from 'vue'
import { useUiStore } from '../store/ui'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from '@heroicons/vue/24/solid'
import frFlag from '/icons/fr.svg'
import enFlag from '/icons/en.svg'

const ui = useUiStore()
const router = useRouter()
const { locale } = useI18n()
const isMenuOpen = ref(false)

function toggleLang() {
  const newLang = locale.value === 'fr' ? 'en' : 'fr'
  ui.setLanguage(newLang)
  locale.value = newLang
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function navigateAndClose(path) {
  router.push(path)
  isMenuOpen.value = false
}
</script>

<template>
  <nav class="fixed top-0 left-0 z-50 w-full px-6 py-4 
             bg-stone-200/80 dark:bg-slate-900/80 backdrop-blur-md
             border-b border-stone-500 dark:border-slate-800">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      
      <div
        class="group text-2xl font-black tracking-tighter cursor-pointer"
        @click="navigateAndClose('/')"
      >
        <span class="text-slate-900 dark:text-white transition-colors group-hover:text-emerald-600">
          ROMAIN<span class="text-emerald-600">.</span>
        </span>
      </div>

      <!-- Menu Desktop -->
      <div class="hidden md:flex items-center gap-8">
        <div class="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-slate-300 
                 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            active-class="text-emerald-600 dark:text-emerald-400">
          <router-link
            to="/"
            class="text-zinc-700 dark:text-slate-200
                  hover:text-zinc-900 dark:hover:text-emerald-700 transition"
          >
            {{ $t('ui.home') }}
          </router-link>

          <router-link
            to="/projects"
            class="text-slate-700 dark:text-slate-200
                  hover:text-zinc-900 dark:hover:text-emerald-700 transition"
          >
            {{ $t('ui.projects') }}
          </router-link>

          <router-link
            to="/skills"
            class="text-slate-700 dark:text-slate-200
                  hover:text-zinc-900 dark:hover:text-emerald-700 transition"
          >
            {{ $t('ui.skills') }}
          </router-link>

          <router-link
            to="/about"
            class="text-zinc-700 dark:text-slate-200
                  hover:text-zinc-900 dark:hover:text-emerald-700 transition"
          >
            {{ $t('ui.about') }}
          </router-link>

          <router-link
            to="/contact"
            class="text-zinc-700 dark:text-slate-200
                  hover:text-zinc-900 dark:hover:text-emerald-700 transition"
          >
            {{ $t('ui.contact') }}
          </router-link>
        </div>

        <div class="h-6 w-px bg-stone-300 dark:border-slate-800"></div>

        <div class="flex items-center gap-3">
          <button @click="toggleLang" class="hover:scale-110 transition-transform">
            <img :src="locale === 'fr' ? frFlag : enFlag" class="w-6 h-4 object-cover rounded-sm shadow-sm" />
          </button>

          <button @click="ui.toggleTheme" class="p-2 rounded-xl hover:bg-stone-300 dark:hover:bg-slate-800 transition-colors">
            <SunIcon v-if="ui.isDark" class="w-5 h-5 text-amber-400" />
            <MoonIcon v-else class="w-5 h-5 text-slate-600" />
          </button>
        </div>
      </div>

      <!-- Bouton hamburger mobile -->
      <button @click="toggleMenu" class="md:hidden p-2 text-slate-900 dark:text-white">
        <Bars3Icon v-if="!isMenuOpen" class="w-7 h-7" />
        <XMarkIcon v-else class="w-7 h-7" />
      </button>
    </div>

    <!-- Menu Mobile -->
    <div 
      v-if="isMenuOpen" 
      class="md:hidden absolute top-full left-0 w-full bg-stone-200 dark:bg-slate-900 border-b border-stone-300 dark:border-slate-800 p-6 flex flex-col gap-4 shadow-xl"
    >
      <button
        @click="navigateAndClose('/')"
        class="text-left text-lg font-bold text-slate-900 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition py-2"
      >
        {{ $t('ui.home') }}
      </button>

      <button
        @click="navigateAndClose('/projects')"
        class="text-left text-lg font-bold text-slate-900 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition py-2"
      >
        {{ $t('ui.projects') }}
      </button>

      <button
        @click="navigateAndClose('/skills')"
        class="text-left text-lg font-bold text-slate-900 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition py-2"
      >
        {{ $t('ui.skills') }}
      </button>

      <button
        @click="navigateAndClose('/about')"
        class="text-left text-lg font-bold text-slate-900 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition py-2"
      >
        {{ $t('ui.about') }}
      </button>

      <button
        @click="navigateAndClose('/contact')"
        class="text-left text-lg font-bold text-slate-900 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition py-2"
      >
        {{ $t('ui.contact') }}
      </button>

      <div class="h-px bg-stone-300 dark:bg-slate-700 my-2"></div>

      <div class="flex items-center gap-4">
        <button @click="toggleLang" class="flex items-center gap-2 py-2">
          <img :src="locale === 'fr' ? frFlag : enFlag" class="w-6 h-4 object-cover rounded-sm shadow-sm" />
          <span class="text-sm font-bold text-slate-900 dark:text-slate-200">
            {{ locale === 'fr' ? 'Français' : 'English' }}
          </span>
        </button>

        <button @click="ui.toggleTheme" class="p-2 rounded-xl hover:bg-stone-300 dark:hover:bg-slate-800 transition-colors">
          <SunIcon v-if="ui.isDark" class="w-6 h-6 text-amber-400" />
          <MoonIcon v-else class="w-6 h-6 text-slate-600" />
        </button>
      </div>
    </div>
  </nav>
</template>