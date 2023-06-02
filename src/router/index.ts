import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";

export const constantRoutes: Array<RouteRecordRaw> = [
  {
    name: 'login',
    path: '/',
    component: () => import('@/views/login/Login.vue')
  },
  {
    name: 'main',
    path: '/main',
    component: () => import('@/views/main/Main.vue')
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
})

export function resetRouter() {
  const newRouter = router;
  (router as any).matcher = (newRouter as any).matcher // reset router
}

export default router
