<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps({
  projects: {
    type: Array,
    required: true
  },
  selectedTech: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:selectedTech'])

const searchInput = ref('')
const showDropdown = ref(false)

// Extraire toutes les technologies uniques
const allTechnologies = computed(() => {
  const techSet = new Set()
  props.projects.forEach(project => {
    project.tech.forEach(tech => {
      techSet.add(tech.toUpperCase())
    })
  })
  return Array.from(techSet).sort()
})

// Filtrer les technologies selon la recherche
const filteredTechnologies = computed(() => {
  if (!searchInput.value) {
    return allTechnologies.value
  }
  return allTechnologies.value.filter(tech =>
    tech.toLowerCase().includes(searchInput.value.toLowerCase())
  )
})

const selectTech = (tech) => {
  searchInput.value = tech
  emit('update:selectedTech', tech)
  showDropdown.value = false
}

const clearFilter = () => {
  searchInput.value = ''
  emit('update:selectedTech', '')
  showDropdown.value = false
}

const handleInput = (event) => {
  searchInput.value = event.target.value
  showDropdown.value = true
  
  // Si l'input est vide, effacer le filtre
  if (!event.target.value) {
    emit('update:selectedTech', '')
  }
}

const handleFocus = () => {
  showDropdown.value = true
}

const handleBlur = () => {
  // Délai pour permettre le clic sur une option
  setTimeout(() => {
    showDropdown.value = false
  }, 200)
}
</script>

<template>
  <div class="max-w-6xl mx-auto mb-12">
    <div class="flex flex-col sm:flex-row gap-4 items-center justify-center">     
      <div class="relative flex gap-3 items-center w-full max-w-md">
        
        <div class="relative w-full group">
          <span class="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-600 dark:text-emerald-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>

          <input
            id="tech-filter"
            type="text"
            :value="searchInput"
            @input="handleInput"
            @focus="handleFocus"
            @blur="handleBlur"
            :placeholder="t('project.placeHolder')"
            class="w-full bg-white dark:bg-slate-800/50 
                   backdrop-blur-sm
                   border-2 border-stone-300 dark:border-slate-700
                   text-slate-900 dark:text-white
                   rounded-2xl px-12 py-3
                   transition-all duration-300
                   focus:outline-none focus:border-emerald-600 focus:ring-4 focus:ring-emerald-600/10
                   placeholder:text-slate-400 dark:placeholder:text-slate-500"
          />
          
          <transition 
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="translate-y-1 opacity-0"
            enter-to-class="translate-y-0 opacity-100"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="translate-y-0 opacity-100"
            leave-to-class="translate-y-1 opacity-0"
          >
            <div
              v-if="showDropdown && filteredTechnologies.length > 0"
              class="absolute z-20 w-full mt-2
                     bg-white/95 dark:bg-slate-800/95 backdrop-blur-md
                     border border-stone-200 dark:border-slate-700
                     rounded-2xl shadow-2xl max-h-60 overflow-y-auto
                     transition-colors duration-500"
            >
              <button
                v-for="tech in filteredTechnologies"
                :key="tech"
                @mousedown.prevent="selectTech(tech)"
                class="w-full text-left px-5 py-3
                       text-slate-700 dark:text-slate-200
                       hover:bg-emerald-50 dark:hover:bg-emerald-900/30
                       hover:text-emerald-600 dark:hover:text-emerald-400
                       transition-colors font-medium border-b border-stone-100 dark:border-slate-700/50 last:border-none"
              >
                {{ tech }}
              </button>
            </div>
          </transition>
        </div>

        <button
          v-if="selectedTech"
          @click="clearFilter"
          class="flex-shrink-0 bg-red-50 dark:bg-red-900/20
                 text-red-500 dark:text-red-400
                 p-3 rounded-xl
                 hover:bg-red-500 hover:text-white
                 transition-all duration-300 shadow-sm"
          title="Effacer le filtre"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>