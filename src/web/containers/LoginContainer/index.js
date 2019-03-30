import { connect } from 'react-redux'
import Login from '../../components/Login'
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

export default connect(mapStateToProps, mapDispatchToProps)(Login)