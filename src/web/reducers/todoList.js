import { TODOLIST } from '../actions/type'

const initialState = {
    mode: 'VIEW',
    selectedIndex: 0
}

const todoList = (state=initialState, action) => {
    switch (action.type) {
        case TODOLIST.CHANGE_VIEW_MODE:
            return  { ...state, mode: action.mode}
        case TODOLIST.SELECT_FILTER_SEGMENT: 
            return { ...state, selectedIndex: action.selectedIndex}
        default: return state
    }
}

export default todoList
export const todolistInitialState = initialState