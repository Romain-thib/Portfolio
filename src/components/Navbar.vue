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
      class="text-xl font-bold text-zinc-800 dark:text-slate-100"
      @click="router.push('/')"
    >
      Romain
    </div>

    <div class="flex items-center gap-6">
      <router-link
      to="/"
        class="text-zinc-700 dark:text-slate-200
                hover:text-blue-950 dark:hover:text-amber-400 transition"
      >
        {{ $t('ui.home') }}
      </router-link>

      <router-link
        to="/projects"
        class="text-slate-700 dark:text-slate-200 hover:text-blue-950 dark:hover:text-amber-400 transition"
      >
        {{ $t('ui.projects') }}
      </router-link>

      <button @click="toggleLang" class="p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700">
        <img
          :src="locale === 'fr' ? frFlag : enFlag"
          alt="flag"
          class="w-6 h-4 object-cover rounded-sm"
        />
      </button>

      <button
        @click="ui.toggleTheme"
        class="p-2 rounded hover:bg-slate-200 dark:hover:bg-slate-700 transition"
      >
        <SunIcon v-if="ui.isDark" class="w-6 h-6 text-amber-400" />
        <MoonIcon v-else class="w-6 h-6 text-slate-700" />
      </button>
    </div>
  </nav>
</template>

