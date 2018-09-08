import Vue from 'vue'
import Router from 'vue-router'
import Profile from '@/components/views/Profile'
import Resume from '@/components/views/Resume'
import Skill from '@/components/views/Skill'
import Interests from '@/components/views/Interests'
import Contact from '@/components/views/Contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Profile
    },
    {
      path: '/profile',
      redirect: '/'
    },
    {
      path: '/resume',
      component: Resume
    },
    {
      path: '/skill',
      component: Skill
    },
    {
      path: '/interests',
      component: Interests
    },
    {
      path: '/contact',
      component: Contact
    }
  ]
})
