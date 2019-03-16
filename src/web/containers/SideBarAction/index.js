import { connect } from 'react-redux'

import SideBar from '../../components/App/SubComponent/SideBar'
import { changePage } from '../../actions'

const mapStateToProps = state => {
    return {
        selectedPage: state.currentPage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onClick: page => {
            dispatch(changePage(page))
        }
    }
}

const ListItemAction = connect(mapStateToProps, mapDispatchToProps)(SideBar)

export default ListItemAction