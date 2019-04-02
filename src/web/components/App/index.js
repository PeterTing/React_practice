import { default as _App } from './App.js'
import { connect } from 'react-redux'
import { RedirectAction } from '../../actions/index.js';
import API from '../../api'
const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
	redirectToLogin: (history) => {
		dispatch(RedirectAction.login(history))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(_App)