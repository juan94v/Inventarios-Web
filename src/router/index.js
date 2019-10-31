import Vue from 'vue'
import Router from 'vue-router'
import Navbar from '@/components/Menu/Navbar'
import Articulos from '@/components/Articulos/Articulos'
import Lector from '@/components/Lector/Lector'
import MiPerfil from '@/components/MiPerfil/MiPerfil'
import Login from '@/components/Login/Login'
import Historial from '@/components/Historial/Historial'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Menu',
      name: 'Navbar',
      component: Navbar,
      children: [
      	{	
      		path:'articulos',
      		name: 'articulos',
      		component: Articulos
      	},
        {
          path: 'lector',
          name: 'lector',
          component: Lector
        },
        {
          path: 'perfil',
          name: 'perfil',
          component: MiPerfil
        },
         {
          path: 'historial',
          name: 'historial',
          component: Historial
        }
      ]
    }
  ]
})
