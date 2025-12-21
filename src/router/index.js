import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Projects from '../pages/Projects.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/projects', component: Projects }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
