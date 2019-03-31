import { PopupDialogAction } from '../../actions'
import { connect } from 'react-redux'
import Popup from '../../components/App/Subpage/TodoList/Popup'

const mapStateToProps = (state) => {
    const { dialog } = state.todoList
    const storeList = JSON.parse(localStorage.getItem('stores'))
    const containers = JSON.parse(localStorage.getItem('containers')).type
    return ({
        ...dialog,
        storeList,
        containers
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
    },
    submitNewList: (storeId, dueDate, boxes) => {
        const phone = JSON.parse(localStorage.auth).phone
        return dispatch(PopupDialogAction.submitNewList(phone, storeId, dueDate, boxes))
    },
    clearDialog: () => {
        dispatch(PopupDialogAction.clearDialog())
    },
    loadPrevDialog: () => {
        dispatch(PopupDialogAction.loadPrevDialog())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Popup)