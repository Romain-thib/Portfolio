<script setup>
const props = defineProps({
  date: { type: String, required: true },
  city: { type: String, required: true },
  place: { type: String, required: true },
  diploma: { type: String, required: true },
  subtitle: { type: String, default: "" },
  description: { type: String, default: "" },
  isCurrent: { type: Boolean, default: false }
})
</script>

<template>
  <div class="relative flex items-start -ml-20">
    
    <!-- Cercle décoratif avec animation pour "Aujourd'hui" -->
    <div 
      class="absolute -left-4 top-15 w-5 h-5 bg-slate-800 dark:bg-amber-400 rounded-full"
      :class="{ 'animate-pulse': isCurrent }"
    >
      <!-- Effet de ring pour l'élément actuel -->
      <div 
        v-if="isCurrent"
        class="absolute inset-0 rounded-full dark:bg-amber-500 bg-slate-800 animate-ping opacity-75"
      ></div>
    </div>

    <div class="m-5 p-5 ml-8 w-full max-w-138 mr-5 min-h-50 bg-stone-200 dark:bg-slate-900
                border border-stone-300 dark:border-slate-800 rounded-xl">
      
      <div class="text-sm font-medium text-amber-600 dark:text-amber-500 mb-2">
        {{ date }}
      </div>

      <h3 class="text-xl font-semibold text-slate-900 dark:text-slate-100">
        {{ place }}
      </h3>
      <p class="text-sm text-slate-600 dark:text-slate-400 mt-1">
        {{ city }}
      </p>

      <h4 class="text-lg font-medium text-slate-800 dark:text-slate-200 mt-3">
        {{ diploma }}
      </h4>

      <p
        v-if="subtitle"
        class="text-md font-medium text-slate-700 dark:text-slate-300 mt-1"
      >
        {{ subtitle }}
      </p>

      <p
        v-if="description"
        class="mt-3 text-slate-600 dark:text-slate-400"
      >
        {{ description }}
      </p>

      <slot />
    </div>
  </div>
</template>