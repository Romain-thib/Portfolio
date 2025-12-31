<script setup>
import { useUiStore } from '../store/ui'
const ui = useUiStore()
</script>

<template>
  <button @click="ui.toggleTheme">
    {{ ui.isDark ? 'Mode clair' : 'Mode sombre' }}
  </button>
</template>
