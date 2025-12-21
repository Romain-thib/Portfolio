<script setup>
import { useUiStore } from '../store/ui'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const ui = useUiStore()
const router = useRouter()
const { locale } = useI18n()

function changeLang(lang) {
  ui.setLanguage(lang)
  locale.value = lang
}
</script>

<template>
  <nav class="w-full py-4 px-6 flex items-center justify-between bg-white dark:bg-gray-900 shadow">
    <div class="text-xl font-bold cursor-pointer" @click="router.push('/')">
      Romain.dev
    </div>

    <div class="flex items-center gap-6">
      <router-link to="/" class="text-gray-700 dark:text-gray-200 hover:underline">
        {{ $t('ui.home') }}
      </router-link>

      <router-link to="/projects" class="text-gray-700 dark:text-gray-200 hover:underline">
        {{ $t('ui.projects') }}
      </router-link>

      <div class="flex gap-2">
        <button @click="changeLang('fr')" class="px-2 py-1 text-sm rounded hover:bg-gray-200 dark:hover:bg-gray-700">
          FR
        </button>
        <button @click="changeLang('en')" class="px-2 py-1 text-sm rounded hover:bg-gray-200 dark:hover:bg-gray-700">
          EN
        </button>
      </div>

      <button @click="ui.toggleTheme">
        {{ ui.isDark ? $t('ui.theme_light') : $t('ui.theme_dark') }}
      </button>

    </div>
  </nav>
</template>
