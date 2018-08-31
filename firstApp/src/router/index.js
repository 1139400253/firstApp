import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Menu from '@/components/Menu'
import Admin from '@/components/Admin'
import About from '@/components/about/About'
import Login from '@/components/Login'
import Register from '@/components/Register'

// 二级路由
import Contact from '@/components/about/Contact'
import Delivery from '@/components/about/Delivery'
import History from '@/components/about/History'
import OrderingGuide from '@/components/about/OrderingGuide'

// 三级路由
import Phone from '@/components/about/contact/Phone'
import PersonName from '@/components/about/contact/PersonName'

Vue.use(Router)


const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        default: Home,
        'Delivery': Delivery,
        'History': History,
        'OrderingGuide': OrderingGuide
      }
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/about',
      name: 'About',
      redirect: '/history',
      component: About,
      children: [
        {
          path: '/about/contact',
          name: 'Contact',
          redirect: '/personName',
          component: Contact,
          children: [
            {
              path: '/phone',
              name: 'Phone',
              component: Phone,
            },
            {
              path: '/personName',
              name: 'PersonName',
              component: PersonName,
            }
          ]
        },
        {
          path: '/history',
          name: 'History',
          component: History
        },
        {
          path: '/delivery',
          name: 'Delivery',
          component: Delivery
        },
        {
          path: '/orderingGuide',
          name: 'OrderingGuide',
          component: OrderingGuide
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '*',
      redirect: '/'
    } // 匹配不上就定向首页
  ],
  mode: 'history',
  scrollBehavior(to, from, savedPostion) { // 滚动行为
    // return { x: 0, y: 100 }
    // return { selector: '.btn' // 选择器 }
    if(savedPostion){
      return savedPostion
    } else {
      return {
        x: 0, y:0
      }
    }// 记住原来的位置
  }
});


//全局守卫
// router.beforeEach((to, from, next) => {
//   // 判断store.gettes.isLogin == false
//   if(to.path == '/login' || to.path == '/register'){
//     next();
//   } else {
//     alert('还没有登录，请先登录');
//     next( '/login' );
//   }
// });
export default router
