import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Projects from '../pages/Projects.vue'
import About from '../pages/About.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About},
  { path: '/projects', component: Projects }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
