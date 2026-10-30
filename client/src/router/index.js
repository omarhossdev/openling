import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Vocabs from '../views/Vocabs.vue'
import VocabsLearn from '../views/VocabsLearn.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/vocabs',
      name: 'vocabs',
      component: Vocabs,
    },
    {
      path: '/vocabs/learn',
      name: 'vocabs_learn',
      component: VocabsLearn,
    },
  ],
})

export default router