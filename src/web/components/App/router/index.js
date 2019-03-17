import Home from '../Subpage/Home'
import Container from '../Subpage/Container'
import Store from '../Subpage/Store'
import TodoList from '../../../containers/TodoAction'
import User from '../Subpage/User'
import Console from '../Subpage/Console'
import Activity from '../Subpage/Activity'

export const router = [
    {
        path: '/home',
        component: Home
    },
    {
        path: '/container',
        component: Container
    },
    {
        path: '/store',
        component: Store
    },
    {
        path: '/todoList',
        component: TodoList
    },
    {
        path: '/user',
        component: User
    },
    {
        path: '/console',
        component: Console
    },
    {
        path: '/activity',
        component: Activity
    },
]