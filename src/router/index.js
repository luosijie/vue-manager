import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Dashboard from '@/pages/Dashboard'
import BasicTable from '@/pages/BasicTable'
import EditableTable from '@/pages/EditableTable'
import Widget from '@/pages/Widget'
import Panels from '@/pages/Panels'
import ImageList from '@/pages/ImageList'
import Charts from '@/pages/Charts'
import Login from '@/pages/Login'
import LockScreen from '@/pages/LockScreen'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '/',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'widget',
          name: 'Widget',
          component: Widget
        },
        {
          path: 'panels',
          name: 'Panels',
          component: Panels
        },
        {
          path: 'imagelist',
          name: 'ImageList',
          component: ImageList
        },
        {
          path: 'basic-table',
          name: 'BasicTable',
          component: BasicTable
        },
        {
          path: 'editable-table',
          name: 'EditableTable',
          component: EditableTable
        },
        {
          path: 'charts',
          name: 'Charts',
          component: Charts
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      components: {
        blank: Login
      }
    },
    {
      path: '/lockscreen',
      name: 'Lockscreen',
      components: {
        blank: LockScreen
      }
    }
  ]
})

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'Dashboard',
//       component: Dashboard
//     },
//     {
//       path: '/basic-table',
//       name: 'BasicTable',
//       component: BasicTable
//     },
//     {
//       path: '/editable-table',
//       name: 'EditableTable',
//       component: EditableTable
//     },
//     {
//       path: '/widget',
//       name: 'Widget',
//       component: Widget
//     },
//     {
//       path: '/charts',
//       name: 'Charts',
//       component: Charts
//     }
//   ]
// })
