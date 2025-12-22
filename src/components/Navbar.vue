<script setup>
import { useUiStore } from '../store/ui'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { SunIcon, MoonIcon } from '@heroicons/vue/24/solid'
import frFlag from '/icons/fr.svg'
import enFlag from '/icons/en.svg'

const ui = useUiStore()
const router = useRouter()
const { locale } = useI18n()

function toggleLang() {
  const newLang = locale.value === 'fr' ? 'en' : 'fr'
  ui.setLanguage(newLang)
  locale.value = newLang
}
</script>

<template>
  <nav
  class="w-full px-6 py-4 flex items-center justify-between
         bg-stone-200 dark:bg-slate-800
         border-b border-stone-300 dark:border-slate-700"
>
    <div
      class="text-xl font-bold hover:text-zinc-800 dark:text-amber-400"
      @click="router.push('/')"
    >
      <p>Romain</p>
    </div>

    <div class="flex items-center gap-6">
      <router-link
      to="/"
        class="text-zinc-700 dark:text-slate-200
                hover:text-zinc-900 dark:hover:text-amber-400 transition"
      >
        {{ $t('ui.home') }}
      </router-link>

      <router-link
      to="/about"
        class="text-zinc-700 dark:text-slate-200
                hover:text-zinc-900 dark:hover:text-amber-400 transition"
      >
        {{ $t('ui.about') }}
      </router-link>

      <router-link
        to="/projects"
        class="text-slate-700 dark:text-slate-200 hover:text-zinc-900 dark:hover:text-amber-400 transition"
      >
        {{ $t('ui.projects') }}
      </router-link>

      <button @click="toggleLang" class="p-1 rounded  dark:hover:bg-slate-600 hover:hover:bg-stone-300">
        <img
          :src="locale === 'fr' ? frFlag : enFlag"
          alt="flag"
          class="w-6 h-5 object-cover rounded-sm"
        />
      </button>

      <button
        @click="ui.toggleTheme"
        class="p-1 rounded dark:hover:bg-slate-600 hover:hover:bg-stone-300"
      >
        <SunIcon v-if="ui.isDark" class="w-6 h-6 text-amber-400" />
        <MoonIcon v-else class="w-6 h-6 text-slate-700" />
      </button>
    </div>
  </nav>
</template>

