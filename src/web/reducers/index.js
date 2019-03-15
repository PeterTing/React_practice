import { combineReducers } from 'redux'
import pageManager from './pageManager.js'
import todoList from './TodoList.js'

const reducers = combineReducers({
    pageManager,
    todoList
})

export default reducers
