import { connect } from 'react-redux'

import SideBar from '../../components/App/SubComponent/SideBar'
import { PageAction } from '../../actions'

const mapStateToProps = state => (
    {
        selectedPage: state.currentPage
    }
)

const mapDispatchToProps = dispatch => {
    return {
        onClick: page => {
            dispatch(PageAction.changePage(page))
        }
    }
}

const ListItemAction = connect(mapStateToProps, mapDispatchToProps)(SideBar)

export default ListItemAction