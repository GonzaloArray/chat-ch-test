import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AllView from '../views/AllView.vue'
import ChatView from '../views/ChatView.vue'
import PreviewChatView from '../views/PreviewChatView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'conversaciones',
      component: HomeView,
      children: [
        {
          path: '/conversaciones',
          component: AllView,
          redirect: '/conversaciones',
          children: [
            {
              path: '/',
              name: 'default',
              component: PreviewChatView
            },
            {
              path: ':id',
              name: 'ChatView',
              component: ChatView
            }
          ]
        },
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {

  next()
})

export default router
