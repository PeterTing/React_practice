import { connect } from 'react-redux'

import SideBar from '../../components/App/SubComponent/SideBar'
import { changePage, todoToggle } from '../../actions'

const mapStateToProps = state => {
    return {
        isOpen: state.todoListItemState.isOpen
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: page => isOpen => {
            dispatch(changePage(page))
            if (page === 'todoList')
                dispatch(todoToggle(!isOpen))
        }
    }
}

const ListItemAction = connect(mapStateToProps, mapDispatchToProps)(SideBar)

export default ListItemAction