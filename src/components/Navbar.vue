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
  <nav class="fixed top-0 left-0 z-50 w-full px-6 py-4 bg-stone-200
             dark:bg-slate-800 border-b border-stone-300 dark:border-slate-700"
  >
    <div class="flex items-center justify-between">
      <div
        class="text-xl font-bold hover:text-zinc-800 dark:text-emerald-400 cursor-pointer"
        @click="navigateAndClose('/')"
      >
        <p>Romain</p>
      </div>

      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center gap-6">
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

        <button
          @click="toggleLang"
          class="p-1 rounded dark:hover:bg-slate-600 hover:bg-stone-300"
        >
          <img
            :src="locale === 'fr' ? frFlag : enFlag"
            alt="flag"
            class="w-6 h-5 object-cover rounded-sm"
          />
        </button>

        <button
          @click="ui.toggleTheme"
          class="p-1 rounded dark:hover:bg-slate-600 hover:bg-stone-300"
        >
          <SunIcon v-if="ui.isDark" class="w-6 h-6 text-amber-400" />
          <MoonIcon v-else class="w-6 h-6 text-slate-700" />
        </button>
      </div>

      <!-- Mobile Menu Button -->
      <button
        @click="toggleMenu"
        class="md:hidden p-2 rounded dark:hover:bg-slate-600 hover:bg-stone-300"
      >
        <Bars3Icon v-if="!isMenuOpen" class="w-6 h-6 text-zinc-700 dark:text-slate-200" />
        <XMarkIcon v-else class="w-6 h-6 text-zinc-700 dark:text-slate-200" />
      </button>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="isMenuOpen"
      class="md:hidden mt-4 pb-4 flex flex-col gap-4"
    >
      <router-link
        to="/"
        @click="isMenuOpen = false"
        class="text-zinc-700 dark:text-slate-200
               hover:text-zinc-900 dark:hover:text-emerald-700 transition
               py-2 px-4 rounded hover:bg-stone-300 dark:hover:bg-slate-700"
      >
        {{ $t('ui.home') }}
      </router-link>

      <router-link
        to="/projects"
        @click="isMenuOpen = false"
        class="text-slate-700 dark:text-slate-200
               hover:text-zinc-900 dark:hover:text-emerald-700 transition
               py-2 px-4 rounded hover:bg-stone-300 dark:hover:bg-slate-700"
      >
        {{ $t('ui.projects') }}
      </router-link>

      <router-link
        to="/skills"
        @click="isMenuOpen = false"
        class="text-slate-700 dark:text-slate-200
               hover:text-zinc-900 dark:hover:text-emerald-700 transition
               py-2 px-4 rounded hover:bg-stone-300 dark:hover:bg-slate-700"
      >
        {{ $t('ui.skills') }}
      </router-link>

      <router-link
        to="/about"
        @click="isMenuOpen = false"
        class="text-zinc-700 dark:text-slate-200
               hover:text-zinc-900 dark:hover:text-emerald-700 transition
               py-2 px-4 rounded hover:bg-stone-300 dark:hover:bg-slate-700"
      >
        {{ $t('ui.about') }}
      </router-link>

      <router-link
        to="/contact"
        @click="isMenuOpen = false"
        class="text-zinc-700 dark:text-slate-200
               hover:text-zinc-900 dark:hover:text-emerald-700 transition
               py-2 px-4 rounded hover:bg-stone-300 dark:hover:bg-slate-700"
      >
        {{ $t('ui.contact') }}
      </router-link>

      <div class="flex items-center gap-4 px-4 pt-2 border-t border-stone-300 dark:border-slate-700">
        <button
          @click="toggleLang"
          class="p-2 rounded dark:hover:bg-slate-600 hover:bg-stone-300"
        >
          <img
            :src="locale === 'fr' ? frFlag : enFlag"
            alt="flag"
            class="w-6 h-5 object-cover rounded-sm"
          />
        </button>

        <button
          @click="ui.toggleTheme"
          class="p-2 rounded dark:hover:bg-slate-600 hover:bg-stone-300"
        >
          <SunIcon v-if="ui.isDark" class="w-6 h-6 text-amber-400" />
          <MoonIcon v-else class="w-6 h-6 text-slate-700" />
        </button>
      </div>
    </div>
  </nav>
</template>