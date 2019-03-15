import { CHANGE_PAGE, TODO_TOGGLE, ADD_TOGGLE } from './types.js'

function makeActionCreator(type, ...argNames) {
    return function (...args) {
        const action = { type }
        argNames.forEach((arg, index) => {
            action[argNames[index]] = args[index]
        })
        return action
    }
}



export const changePage = makeActionCreator(CHANGE_PAGE, 'page')
export const todoToggle = makeActionCreator(TODO_TOGGLE, 'isOpen')
export const addToggle = makeActionCreator(ADD_TOGGLE, 'isOpen')