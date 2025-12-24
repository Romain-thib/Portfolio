<script setup>
defineProps({
  tech: {
    type: String,
    required: true
  }
})

const techLogos = {
  'PHP': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
  'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  'JAVA': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  'JAVA FX': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  'JavaFx': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
}

const getTechLogo = (tech) => {
  return techLogos[tech] || null
}
</script>

<template>
  <li
    class="bg-stone-100 dark:bg-slate-700
           text-zinc-700 dark:text-slate-200
           text-xs px-3 py-1 rounded-full
           flex items-center gap-2"
  >
    <img
      v-if="getTechLogo(tech)"
      :src="getTechLogo(tech)"
      :alt="tech"
      class="w-4 h-4"
    />
    {{ tech }}
  </li>
</template>