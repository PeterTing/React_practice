import { connect } from 'react-redux'

import SideBar from '../../components/App/SubComponent/SideBar'
import { PageAction } from '../../actions'
import { router } from '../../components/App/router'

const mapStateToProps = state => (
    {
        selectedPage: state.currentPage,
        items: router
    }
)

const mapDispatchToProps = dispatch => {
    return {
        onClick: page => {
            dispatch(PageAction.changePage(page))
        }
    }
}

const SideBarContainer = connect(mapStateToProps, mapDispatchToProps)(SideBar)

export default SideBarContainer