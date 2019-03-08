import { CHANGE_PAGE } from '../actions'

const initialState = "TODO_LIST"

function PageManager(state = initialState, action) {
    switch (action.type) {
        case CHANGE_PAGE:
            return action.page
        default:
            return state
    }
}

export default PageManager