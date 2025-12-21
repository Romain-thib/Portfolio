<script setup>
import projects from '../data/projects.json'
import ThirdProject from '../components/ThirdProject.vue';

const featured = projects.slice(0, 3)
</script>

<template>
  <ThirdProject />
</template>

