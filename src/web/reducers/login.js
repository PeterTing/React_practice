import { LOGIN } from "../actions/type"

const initialState = {
    phone: '',
    password: ''
}

const login = (state=initialState, action) => {
    switch (action.type) {
        case LOGIN.SET_PASSWORD:
            return { ...state, password: action.password}
        case LOGIN.SET_PHONE:
            return { ...state, phone: action.phone}
        default: 
            return state
    }
}

export default login