import { CHANGE_PAGE, TODOLIST } from './type.js'

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

export const TodoListActions = {
    selectFilterSegment: (index) => (
        {
            type: TODOLIST.SELECT_FILTER_SEGMENT,
            selectedIndex: index
        }
    ),
    changeViewMode: (mode) => (
        {
            type: TODOLIST.CHANGE_VIEW_MODE,
            mode
        }
    )
}