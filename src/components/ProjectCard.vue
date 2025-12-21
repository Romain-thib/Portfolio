<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div
    class="bg-white rounded-xl shadow-md p- hover:shadow-lg transition-shadow duration-300 flex flex-col gap-10"
  >
    <h3 class="text-xl font-semibold text-gray-800 text-center">
      {{ project.title }}
    </h3>

    <img
      :src="project.image"
      :alt="project.title"
    />

    <p class="text-gray-600 text-sm leading-relaxed">
      {{ project.description }}
    </p>

    <ul class="flex flex-wrap gap-2 mt-2">
      <li
        v-for="t in project.tech"
        :key="t"
        class="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full border border-gray-200"
      >
        {{ t }}
      </li>
    </ul>
  </div>
</template>


<style scoped>

</style>
