import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ComfirView from '@/views/ConfirView.vue';

// Definición de rutas
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView, // Componente principal (Home)
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue'), // Lazy loading para Login
  },
  {
    path: '/confirmacion',
    name: 'confirmacion',
    component: ComfirView, // Componente de confirmación
    },
  {
    path: '/registro',
    name: 'registro',
    component: () => import(/* webpackChunkName: "registro" */ '../views/RegistroView.vue'), // Lazy loading para Registro
  },
  {
    path: '/productos',
    name: 'productos',
    component: () => import(/* webpackChunkName: "productos" */ '../views/ProductosView.vue' ), // Lazy loading para Productos
  },
  {
    path: '/producto/:id',
    name: 'producto',
    component: () => import('@/components/ProductosComp.vue'),
  },
  {
    path: '/proveedores',
    name: 'proveedores',
    component: () => import('@/components/ProveedoresComp.vue'),
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: "/:catchAll(.*)",
    name: "not-found",
    component: () => import("../views/NotFoundView.vue"),
  },

];

// Creación del router
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), // Usar el historial basado en el navegador
  routes, // Registrar las rutas
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isLoggedIn()) {
    next({ name: 'login' });
  } else {
    next();
  }
});
function isLoggedIn() {
  // Verificar si el usuario está autenticado
  // Puedes usar una variable de estado, un token de autenticación, etc.
  return localStorage.getItem('token') !== null;
}
export default router;