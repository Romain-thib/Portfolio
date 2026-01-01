<script setup>
import { computed } from 'vue'
import skills from '../../data/skills.json'

const props = defineProps({
  tech: {
    type: String,
    required: true
  }
})

// Trouver la compétence correspondante dans skills.json
// On normalise les noms pour la comparaison (insensible à la casse et aux espaces)
const skill = computed(() => {
  const normalizedTech = props.tech.toLowerCase().trim()
  return skills.find(s => {
    const normalizedSkillName = s.name.toLowerCase().trim()
    // Vérifier correspondance exacte ou variantes (ex: "Java FX" vs "JavaFX")
    return normalizedSkillName === normalizedTech || 
           normalizedSkillName.replace(/\s+/g, '') === normalizedTech.replace(/\s+/g, '') // Supprimer les espaces
  })
})

// Récupérer le logo et le nom de la compétence
const techLogo = computed(() => skill.value?.logo || null)
const techName = computed(() => skill.value?.name || props.tech)
</script>

<template>
  <li
    class="flex items-center gap-1.5 px-3 py-1 rounded-lg
           bg-slate-100 dark:bg-slate-800/50 
           border border-slate-200 dark:border-slate-700
           text-slate-700 dark:text-slate-300
           text-[11px] font-bold uppercase tracking-wider
           transition-colors hover:border-emerald-500/50 hover:bg-emerald-50 dark:hover:bg-emerald-900/20"
  >
    <img
      v-if="techLogo"
      :src="techLogo"
      :alt="techName"
      class="w-4 h-4 object-contain"
    />
    {{ techName }}
  </li>
</template>