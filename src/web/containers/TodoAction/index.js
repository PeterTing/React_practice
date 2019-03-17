import { connect } from 'react-redux'

import TodoList from '../../components/App/Subpage/TodoList'
import { addToggle } from '../../actions'

const mapStateToProps = state => {
    return {
        isOpen: state.todoList.addToggle.isOpen
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleOpen: () => {
            dispatch(addToggle(true))
        },
        handleClose: () => {
            dispatch(addToggle(false))
        }
    }
}

const ListItemAction = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default ListItemAction