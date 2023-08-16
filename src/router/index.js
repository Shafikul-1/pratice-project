import { createRouter, createWebHistory } from 'vue-router'
const Home = ()=> import ('../components/Home.vue')
const About = ()=> import ('../views/AboutView.vue')
const Note = ()=> import ('../components/Note.vue')
const Check = ()=> import ('../views/CheckView.vue')
const Card = ()=> import ('../views/CardView.vue')
const CardComponent = ()=> import ('../views/CardComponent.vue')
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: About
    },
    {
      path: '/note',
      name: 'note',
      component: Note
    },
    {
      path: '/check',
      name: 'check',
      component: Check
    },
    {
      path: '/card',
      name: 'card',
      component: Card
    },
    {
      path: '/card-component',
      name: 'card-component',
      component: CardComponent
    }
  ]
})

export default router
