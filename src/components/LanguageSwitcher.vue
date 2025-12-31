<script setup>
import { useUiStore } from '../store/ui'
const ui = useUiStore()
</script>

<template>
  <button @click="ui.setLanguage('fr')">FR</button>
  <button @click="ui.setLanguage('en')">EN</button>
</template>
