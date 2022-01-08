import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    component: () => import('@/views/recommend'),
    children: [
      {
        path: ':id',
        component: () => import('@/views/album')
      }
    ]
  },
  {
    path: '/singer',
    component: () => import('@/views/singer'),
    children: [
      {
        path: ':id',
        component: () => import('@/views/singer-detail')
      }
    ]
  },
  {
    path: '/top-list',
    component: () => import('@/views/top-list'),
    children: [
      {
        path: ':id',
        component: () => import('@/views/top-detail'/* webpackChunkName: "top-detail" */)
      }
    ]
  },
  {
    path: '/search',
    component: () => import('@/views/search'),
    children: [
      {
        path: ':id',
        component: () => import('@/views/singer-detail'/* webpackChunkName: "top-detail" */)
      }
    ]
  },
  {
    path: '/user',
    components: {
      user: () => import('@/views/user-center')
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
