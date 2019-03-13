import { TODO_TOGGLE } from '../actions/types'

const initialState = {
    isOpen: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case TODO_TOGGLE:
            return {
                ...state,
                isOpen: action.isOpen
            }
        default:
            return state
    }
}