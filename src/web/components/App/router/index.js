import Home from '../Subpage/Home'
import Container from '../Subpage/Container'
import Store from '../Subpage/Store'
import TodoList, {Today, Calendar} from '../Subpage/TodoList'
import User from '../Subpage/User'
import Console from '../Subpage/Console'
import Activity from '../Subpage/Activity'
import React from 'react'
import { StoreMallDirectory, SupervisorAccount, InsertInvitation, LocalDrink, LocalShipping, Home as HomeIcon, Build } from '@material-ui/icons'
import { PAGE } from '../../../actions/type';

const pagesInEnglist = [PAGE.HOME, PAGE.STORE, PAGE.ACTIVITY, PAGE.USER, PAGE.CONTAINER, PAGE.TODOLIST, PAGE.CONSOLE]


export const router = [
    {
        path: '/home',
        component: Home,
        icon: <HomeIcon />,
        title: '首頁',
        key: PAGE.HOME
    },
    {
        path: '/container',
        component: Container,
        icon: <StoreMallDirectory /> ,
        title: '容器',
        key: PAGE.CONTAINER
    },
    {
        path: '/store',
        component: Store,
        icon: <InsertInvitation />,
        title: '店鋪',
        key: PAGE.STORE
    },
    {
        path: '/todoList/today',
        component: Today,
        icon: <SupervisorAccount />,
        title: '代辦清單',
        key: PAGE.TODOLIST,
        children: [
            {
                path: '/todoList/today',
                component: Today,
                icon: <div/>,
                title: '今日工事',
                key: PAGE.TODOLIST_TODAY
            },
            {
                path: '/todoList/calendar',
                component: Calendar,
                icon: <div/>,
                title: '行事曆',
                key: PAGE.TODOLIST_CALENDAR
            }
        ]
    },
    {
        path: '/user',
        component: User,
        icon: <LocalDrink /> ,
        title: '使用者',
        key: PAGE.USER
    },
    {
        path: '/console',
        component: Console,
        icon: <LocalShipping />,
        title: '中控台',
        key: PAGE.CONSOLE
    },
    {
        path: '/activity',
        component: Activity,
        icon:  <Build />,
        title: '活動',
        key: PAGE.ACTIVITY
    },
]