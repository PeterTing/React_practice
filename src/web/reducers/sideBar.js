import { CHANGE_PAGE, PAGE } from '../actions/type'

const initialState = {
    currentPage: PAGE.TODOLIST
}

const sideBar = (state=initialState, action) => {
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

export default sideBar
export const sideBarInitialState = initialState