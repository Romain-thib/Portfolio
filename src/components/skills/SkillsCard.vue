<script setup>
const props = defineProps({
  tech: {
    type: Object,
    required: true
  },
  colorIndex: {
    type: Number,
    required: true
  }
})

const colorPalette = [
  'bg-purple-100 hover:bg-purple-200',
  'bg-cyan-100 hover:bg-cyan-200',
  'bg-orange-100 hover:bg-orange-200',
  'bg-green-100 hover:bg-green-200'
]

const getColor = () => {
  return colorPalette[props.colorIndex % colorPalette.length]
}
</script>

<template>
  <li class="group">
    <div 
      class="p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 min-w-35 flex flex-col items-center gap-3"
      :class="getColor()"
    >
      <div class="w-16 h-16 flex items-center justify-center">
        <img 
          :src="tech.logo || defaultLogo" 
          :alt="tech.name"
          class="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div class="text-gray-800 font-semibold text-sm text-center">
        {{ tech.name }}
      </div>
    </div>
  </li>
</template>