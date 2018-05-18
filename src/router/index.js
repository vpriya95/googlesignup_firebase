import Vue from 'vue';
import Router from 'vue-router';
import Signup from '../docs/Signup.vue';
import Login from '../docs/Login.vue';
import Github from '../docs/Github.vue';
import Google from '../docs/Google.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/github',
      name: 'Github',
      component: Github
    },
    {
      path: '/google',
      name: 'Google',
      component: Google
    }
  ],
});
