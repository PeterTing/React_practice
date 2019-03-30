import { default as _Login} from './Login.js'
import { connect } from 'react-redux'
import { LoginAction } from '../../actions'

const mapStateToProps = (state) => ({
    ...state.login
})

const mapDispatchToProps = (dispatch) => ({
    login: (phone, password, history) => {
        dispatch(LoginAction.login(phone, password, history))
    },
    setPhone: (phone) => {
        dispatch(LoginAction.setPhone(phone))
    },
    setPassword: (password) => {
        dispatch(LoginAction.setPassword(password))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(_Login)