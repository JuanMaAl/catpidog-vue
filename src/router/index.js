import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TiposDeMascotasView from '@/views/TiposDeMascotasView.vue'
import MascotasView from '@/views/MascotasView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/tipos-de-mascotas',
      name: 'TiposDeMascotas',
      component: TiposDeMascotasView,
    },
    {
      path: '/mascotas/:tipoMascota', // Añade ':tipoMascota' para hacerlo dinámico
      name: 'MascotasPorTipo', // Cambia el nombre para reflejar su funcionalidad
      component: MascotasView,
      props: true,
    },
  ],
})

export default router
