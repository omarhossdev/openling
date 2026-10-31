import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Vocabs from '../views/Vocabs.vue'
import VocabsLearn from '../views/VocabsLearn.vue'
import ReadHome from '../views/read/Home.vue'
import ReadPage from '../views/read/Page.vue'


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
    {
      path: '/read',
      name: 'read',
      component: ReadHome,
    },
    {
      path: '/read/page',
      name: 'read_page',
      component: ReadPage,
    },
  ],
})

export default router