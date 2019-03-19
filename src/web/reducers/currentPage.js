import { CHANGE_PAGE, PAGE } from '../actions/type'

const initialState = {
    currentPage: PAGE.TODOLIST
}

const currentPage = (state=initialState, action) => {
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

export default currentPage
export const currentPageInitialState = initialState