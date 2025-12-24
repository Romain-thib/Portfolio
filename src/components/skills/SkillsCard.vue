<script setup>
const props = defineProps({
  tech: {
    type: String,
    required: true
  }
})

// Logo des technologie
const techLogos = {
  'PHP': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
  'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  'LARAVEL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg',
  'TAILWIND CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  'VUE': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
  'JAVASCRIPT': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  'REACT': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'NODE': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'PYTHON': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'MYSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  'POSTGRESQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  'MONGODB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  'GIT': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  'DOCKER': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  'TYPESCRIPT': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  'JAVA': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  'JAVAFX': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
}

const getLogo = (tech) => {
  return techLogos[tech.toUpperCase().trim()] || 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg'
}

// Couleurs de fond pour les cards
const techColors = {
  'PHP': 'bg-purple-100 hover:bg-purple-200',
  'HTML': 'bg-orange-100 hover:bg-orange-200',
  'LARAVEL': 'bg-red-100 hover:bg-red-200',
  'TAILWIND CSS': 'bg-cyan-100 hover:bg-cyan-200',
  'VUE': 'bg-green-100 hover:bg-green-200',
  'JAVASCRIPT': 'bg-yellow-100 hover:bg-yellow-200',
  'CSS': 'bg-blue-100 hover:bg-blue-200'
}

const getColor = (tech) => {
  return techColors[tech.toUpperCase()] || 'bg-gray-100 hover:bg-gray-200'
}
</script>

<template>
  <li class="group">
    <div 
      class="p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 min-w-[140px] flex flex-col items-center gap-3"
      :class="getColor(tech)"
    >
      <div class="w-16 h-16 flex items-center justify-center">
        <img 
          :src="getLogo(tech)" 
          :alt="tech"
          class="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div class="text-gray-800 font-semibold text-sm text-center">
        {{ tech }}
      </div>
    </div>
  </li>
</template>