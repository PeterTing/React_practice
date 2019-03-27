import { PopupDialogAction } from '../../actions'
import { connect } from 'react-redux'
import Popup from '../../components/App/Subpage/TodoList/Popup'

const mapStateToProps = (state) => {
    const { dialog } = state.todoList
    console.log({...dialog})
    return ({
    ...dialog
})}

const mapDispatchToProps = (dispatch) => ({
    selectDueDate: (dueDate) => {
        dispatch(PopupDialogAction.selectDueDate(dueDate))
    },
    selectDestination: (storeId) => {
        dispatch(PopupDialogAction.selectDestination(storeId))
    },
    addNewBox: () => {
        dispatch(PopupDialogAction.addNewBox())
    },
    addNewContainerType: (boxId) => {
        dispatch(PopupDialogAction.addNewContainerType(boxId))
    },
    removeBox: (boxId) => {
        dispatch(PopupDialogAction.removeBox(boxId))
    },
    selectContainerType: (boxId, containerTypeId, container) => {
        dispatch(PopupDialogAction.selectContainerType(boxId, containerTypeId, container))
    },
    selectContainerAmount: (boxId, containerTypeId, amount) => {
        dispatch(PopupDialogAction.selectContainerAmount(boxId, containerTypeId, amount))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Popup)