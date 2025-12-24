import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Projects from '../pages/Projects.vue'
import About from '../pages/About.vue'
import Skills from '../pages/Skills.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About},
  { path: '/projects', component: Projects },
  { path: '/skills', component: Skills }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
