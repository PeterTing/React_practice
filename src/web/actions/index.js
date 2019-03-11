import { CHANGE_PAGE } from './types.js'

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