<script setup>
import { ref } from 'vue'
import projects from './data/projects.json'

const showIntro = ref(true)
</script>

<template>
  <section class="hero">
    <transition name="fade">
      <h1 v-if="showIntro">Bienvenue sur mon portfolio</h1>
    </transition>

    <p>Développeur front-end passionné par Vue.js</p>
  </section>

  <section class="projects">
    <h2>Mes projets</h2>

    <div class="grid">
      <div v-for="p in projects" :key="p.title" class="card">
        <img :src="p.image" :alt="p.title" />
        <h3>{{ p.title }}</h3>
        <p>{{ p.description }}</p>

        <ul class="tech">
          <li v-for="t in p.tech" :key="t">{{ t }}</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="contact">
    <h2>Contact</h2>
    <a href="mailto:contact@exemple.com" class="btn">Me contacter</a>
  </section>
</template>

<style scoped>
.hero {
  text-align: center;
  padding: 3rem 1rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
}

.card {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.tech {
  display: flex;
  gap: .5rem;
  flex-wrap: wrap;
}

.tech li {
  background: #eee;
  padding: .3rem .6rem;
  border-radius: 6px;
}

.btn {
  background: #42b883;
  color: white;
  padding: .8rem 1.4rem;
  border-radius: 8px;
  text-decoration: none;
}
</style>
