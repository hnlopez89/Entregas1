import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/top_tracks',
    name: 'TopTracks',
    component: () => import('../views/TopTracks.vue')
  },
  {
    path: '/top_artists',
    name: 'TopArtists',
    component: () => import('../views/TopArtists.vue')

  },
  {
    path: '*',
    name: 'Error',
    component: () => import('../views/Error.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
