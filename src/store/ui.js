import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUiStore = defineStore('ui', () => {
  const isDark = ref(false)
  const language = ref('fr')

  function toggleTheme() {
    isDark.value = !isDark.value
    updateTheme()
  }

  function updateTheme() {
    if (isDark.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  }

  function setLanguage(lang) {
    language.value = lang
    localStorage.setItem('lang', lang)
  }

  function init() {
    const savedTheme = localStorage.getItem('theme')
    isDark.value = savedTheme === 'dark'
    updateTheme()

    const savedLang = localStorage.getItem('lang')
    if (savedLang) {
      language.value = savedLang
    }
  }

  return { isDark, toggleTheme, language, setLanguage, init }
})