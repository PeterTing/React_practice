import { TODO_TOGGLE, ADD_TOGGLE } from '../actions/types'
import { combineReducers } from 'redux'

const initState_itemState = {
    isOpen: false
}

export const todoListItemState = (state = initState_itemState, action) => {
    switch (action.type) {
        case TODO_TOGGLE:
            return {
                ...state,
                isOpen: action.isOpen
            }
        default:
            return state
    }
}

const initState_addTodo = {
    isOpen: false
}

export const addToggle = (state = initState_addTodo, action ) => {
    switch (action.type) {
        case ADD_TOGGLE:
            return {
                ...state,
                isOpen: action.isOpen
            }
        default: 
            return state
    }
}   

export default combineReducers({
    todoListItemState,
    addToggle
})