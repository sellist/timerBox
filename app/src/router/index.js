import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListView from '../views/ListView.vue'
import ActiveView from '../views/ActiveView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home-view',
      component: HomeView
    },
    {
      path: '/list',
      name: 'list-view',
      component: ListView
    },
    {
      path: '/active',
      name: 'active-view',
      component: ActiveView
    }
  ]
})

export default router
