<script setup>
const props = defineProps({
  tech: {
    type: Object,
    required: true
  }
})

const defaultLogo = '/images/default-skill.svg'
</script>

<template>
  <li class="group list-none">
    <div 
      class="h-full p-6 rounded-2xl flex flex-col items-center justify-center gap-4
             bg-white dark:bg-slate-800/40
             border border-stone-300 dark:border-slate-800
             transition-all duration-500 ease-out
             hover:bg-emerald-50 dark:hover:bg-emerald-900/20 
             hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-2"
    >
      <div class="w-12 h-12 flex items-center justify-center">
        <img 
          :src="tech.logo || defaultLogo" 
          :alt="tech.name"
          class="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <span class="text-xs font-bold uppercase tracking-widest text-slate-800 dark:text-slate-200 transition-colors group-hover:text-emerald-600 text-center leading-tight">
        {{ tech.name }}
      </span>
    </div>
  </li>
</template>