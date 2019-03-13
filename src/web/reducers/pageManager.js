import { CHANGE_PAGE, PAGE } from '../actions/types'

const pages = Object.values(PAGE).map(page => page);

const initialState = {
    pages,
    currentPage: PAGE.TODOLIST
}

export default function PageManager(state = initialState, action) {
    switch (action.type) {
        case CHANGE_PAGE:
            return {
                ...state,
                currentPage: action.page
            }
        default:
            return state
    }
}