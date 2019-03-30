import { CHANGE_PAGE, TODOLIST, REDIRECT, LOGIN } from './type.js'
import { v4 } from 'uuid'

import API from '../api';

export const RedirectAction = {
    login: (history) => ({
        type: REDIRECT.LOGIN,
        history
    }),
    admin: (history) => ({
        type: REDIRECT.ADMIN,
        history
    })
}

export const LoginAction = {
    login: (phone, password, history) => dispatch => {
        API.login(phone, password)
            .then((response) => 
                response.roles.admin ?
                    response.roles.admin :
                    Promise.reject(new Error('unauthorized'))
            )
            .then(admin => {
                localStorage.setItem('auth', JSON.stringify({...admin, phone}))
                dispatch(RedirectAction.admin(history))
            })
            .then(API.fetchContainerList)
            .then(list => {
                const containers = JSON.stringify({
                    dict: list.containerDict,
                    type: list.containerType
                })
                localStorage.setItem('containers', containers)
            })
            .then(API.fetchStoreList)
            .then(list => 
                list['shop_data']
                    .filter(store=>store.contract.borrowable)
                    .map(store=>({id: store.id, name: store.name}))
            )
            .then(list => 
                localStorage.setItem('stores', JSON.stringify(list))
            )
            .catch((err) => {
                switch (err.message) {
                    case 'unauthorized':
                        alert('沒有權限登入後台')
                    default:
                        alert(err)
                }
            })
    },
    setPassword: (password) => ({
        type: LOGIN.SET_PASSWORD,
        password
    }),
    setPhone: (phone) => ({
        type: LOGIN.SET_PHONE,
        phone
    })
}

export const PageAction = {
    changePage: (page) => ({
        type: CHANGE_PAGE,
        page
    })
}

export const TodoListAction = {
    
}

export const PopupDialogAction = {
    selectDestination: (storeId) => ({
        type: TODOLIST.SELECT_DESTINATION,
        storeId
    }),
    selectDueDate: (date) => ({
        type: TODOLIST.SELECT_DUEDATE,
        date
    }),
    addNewBox: () => ({
        type: TODOLIST.ADD_NEW_BOX,
        id: v4()
    }),
    addNewContainerType: (boxId) => ({
        type: TODOLIST.ADD_NEW_CONTAINER_TYPE,
        id: v4(), 
        boxId
    }),
    removeBox: (boxId) => ({
        type: TODOLIST.REMOVE_BOX,
        boxId
    }),
    selectContainerType: (boxId, containerTypeId, container) => ({
        type: TODOLIST.SELECT_CONTAINER_TYPE,
        boxId, containerTypeId, container
    }),
    selectContainerAmount: (boxId, containerTypeId, amount) => ({
        type: TODOLIST.SELECT_CONTAINER_AMOUNT,
        boxId, containerTypeId, amount
    }),
    setLists: (lists) => ({
        type: TODOLIST.SET_BOXES,
        lists
    }),
    submitNewList: (phone, storeId, dueDate, boxes) => (dispatch) => {
        API.createDeliveryList(phone, storeId, dueDate, boxes)
            .then(console.log)
            .catch(console.err)
    }
}