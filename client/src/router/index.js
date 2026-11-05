import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  // Home
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/HomeView.vue'),
  },

  // Words
  {
    path: '/words/',
    name: 'words',
    component: () => import('@/views/words/WordsView.vue'),
  },
  {
    path: '/words/practice',
    name: 'words-practice',
    component: () => import('@/views/words/PracticeWords.vue'),
  },

  // Reading
  {
    path: '/reading/',
    name: 'reading',
    component: () => import('@/views/reading/ReadingView.vue'),
  },
  {
    path: '/reading/:slug',
    name: 'reading-article',
    component: () => import('@/views/reading/ArticleReaderView.vue'),
  },
  /*
  // Listening
  {
    path: '/listening/',
    name: 'listening',
    component: () => import('@/views/listening/ListeningView.vue'),
  },
  {
    path: '/listening/:slug',
    name: 'listening-lesson',
    component: () => import('@/views/listening/AudioLessonView.vue'),
  },

  // Speaking
  {
    path: '/speaking/',
    name: 'speaking',
    component: () => import('@/views/speaking/SpeakingView.vue'),
  },

  // Writing
  {
    path: '/writing/',
    name: 'writing',
    component: () => import('@/views/writing/WritingView.vue'),
  },
  {
    path: '/writing/:slug',
    name: 'writing-task',
    component: () => import('@/views/writing/WritingTaskView.vue'),
  },

  // Grammar
  {
    path: '/grammar/',
    name: 'grammar',
    component: () => import('@/views/grammar/GrammarView.vue'),
  },
  {
    path: '/grammar/:slug',
    name: 'grammar-topic',
    component: () => import('@/views/grammar/GrammarTopicView.vue'),
  },

  // Community
  {
    path: '/community/',
    name: 'community',
    component: () => import('@/views/community/CommunityView.vue'),
  },

  // Streak
  {
    path: '/streak/',
    name: 'streak',
    component: () => import('@/views/streak/StreakView.vue'),
  },

  // Goals
  {
    path: '/goals/',
    name: 'goals',
    component: () => import('@/views/goals/GoalsView.vue'),
  },

  // Settings
  {
    path: '/settings/',
    name: 'settings',
    component: () => import('@/views/settings/PreferencesView.vue'),
  },*/
  { 
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/NotFoundView.vue') 
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  strict: false,
  scrollBehavior: () => ({ top: 0 }),
})

export default router