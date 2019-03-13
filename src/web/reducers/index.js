import { combineReducers } from 'redux'
import pageManager from './pageManager.js'
import todoListItemState from './TodoListItemStateManager.js'

const reducers = combineReducers({
    pageManager,
    todoListItemState
})

export default reducers
