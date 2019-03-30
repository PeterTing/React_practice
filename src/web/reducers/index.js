import currentPage from './currentPage.js'
import todoList from './todoList.js'
import login from './login.js'
import { combineReducers } from 'redux';
import { REDIRECT } from '../actions/type.js';

const rootReducer = (state, action) => {
    switch (action.type) {
        case REDIRECT.LOGIN:
            action.history.push('/login')
            return state
        case REDIRECT.ADMIN:
            action.history.push('/admin')
            return state
        default: 
            return combineReducers({currentPage, todoList, login})(state, action)
    }
}

export default rootReducer

