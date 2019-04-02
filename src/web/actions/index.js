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
    login: (phone, password, history) => dispatch => (
        API.login(phone, password)
            .then(r=>{
                console.log(r)
                return r
            })
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
            .catch(API.defaultErrorHandler)
    ),
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
    setLists: (lists) => ({
        type: TODOLIST.SET_LISTS,
        lists,
        isLoading: false
    }),
    fetchLists: () => dispatch => (
        API.fetchDeliveryList()
            .then(lists => 
                dispatch(TodoListAction.setLists(lists))    
            )
            .catch(API.defaultErrorHandler)
    )
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
    removeBox: (...boxIds) => ({
        type: TODOLIST.REMOVE_BOX,
        boxIds
    }),
    selectContainerType: (boxId, containerTypeId, container) => ({
        type: TODOLIST.SELECT_CONTAINER_TYPE,
        boxId, containerTypeId, container
    }),
    selectContainerAmount: (boxId, containerTypeId, amount) => ({
        type: TODOLIST.SELECT_CONTAINER_AMOUNT,
        boxId, containerTypeId, amount
    }),
    submitNewList: (phone, storeId, dueDate, boxes) => (dispatch) => (
        API.createDeliveryList(phone, storeId, dueDate, boxes)
            .then(console.log)
            .then(()=>{
                dispatch(PopupDialogAction.saveDialog())
                dispatch(PopupDialogAction.clearDialog())
            })
            .catch(console.err)
    ),
    clearDialog: () => ({
        type: TODOLIST.CLEAR_DIALOG
    }),
    saveDialog: () => ({
        type: TODOLIST.SAVE_DIALOG
    }),
    loadPrevDialog: () => ({
        type: TODOLIST.LOAD_PREV_DIALOG
    })
}