import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Game from './views/Game.vue'
import Learn from './views/Learn.vue'
//Learning Views
import LearnHome from './views/InfoCards/LearnHome.vue'
import People from './views/InfoCards/People.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }, 
    {
      path: '/game',
      name: 'game',
      component: Game
    },
    {
      path: '/learn',
      component: Learn,
      children: [
        {
          path: '/',
          name: 'learn-homepage',
          component: LearnHome
        },
        {
          path: '/learn/people',
          name: 'people',
          component: People 
        },
        // {
        //   path: '/learn/planets',
        //   name: 'planets',
        //   component: Planets 
        // },
        // {
        //   path: '/learn/films',
        //   name: 'films',
        //   component: Films
        // },
        // {   
        //   path: 'view-client',
        //   name: 'viewClient',
        //   component: Species
        // },
        // {
        //   path: 'messages',
        //   name: 'messages',
        //   component: Vehicles
        // },
        // {
        //   path: 'user-settings',
        //   name: 'settings',
        //   component: Starships
        // },
      ],
    }
  ]
})
