<script setup>
import { ref, computed } from 'vue'

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
  <div class="max-w-6xl mx-auto mb-8">
    <div class="flex flex-col sm:flex-row gap-4 items-center justify-center">
      <label for="tech-filter" class="text-zinc-800 dark:text-slate-100 font-medium">
        Filtrer par technologie :
      </label>
      
      <div class="relative flex gap-2 items-center">
        <div class="relative">
          <input
            id="tech-filter"
            type="text"
            :value="searchInput"
            @input="handleInput"
            @focus="handleFocus"
            @blur="handleBlur"
            placeholder="Rechercher une technologie..."
            class="bg-stone-50 dark:bg-slate-800
                   border border-stone-200 dark:border-slate-700
                   text-zinc-800 dark:text-slate-100
                   rounded-lg px-4 py-2 min-w-62.5
                   focus:outline-none focus:ring-2 focus:ring-blue-950
                   placeholder:text-zinc-400 dark:placeholder:text-slate-500"
          />
          
          <div
            v-if="showDropdown && filteredTechnologies.length > 0"
            class="absolute z-10 w-full mt-1
                   bg-stone-50 dark:bg-slate-800
                   border border-stone-200 dark:border-slate-700
                   rounded-lg shadow-lg max-h-60 overflow-y-auto"
          >
            <button
              v-for="tech in filteredTechnologies"
              :key="tech"
              @click="selectTech(tech)"
              class="w-full text-left px-4 py-2
                     text-zinc-800 dark:text-slate-100
                     hover:bg-stone-100 dark:hover:bg-slate-700
                     transition-colors first:rounded-t-lg last:rounded-b-lg"
            >
              {{ tech }}
            </button>
          </div>
        </div>

        <button
          v-if="selectedTech"
          @click="clearFilter"
          class="bg-red-100 dark:bg-red-900/30
                 text-red-700 dark:text-red-300
                 px-3 py-2 rounded-lg
                 hover:bg-red-200 dark:hover:bg-red-900/50
                 transition-colors"
          title="Effacer le filtre"
        >
          ✕
        </button>
      </div>
    </div>
  </div>
</template>