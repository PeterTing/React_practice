import { CHANGE_PAGE, TODOLIST } from './type.js'
import { v4 } from 'uuid'
import API from '../api/index.js';

export const PageAction = {
    changePage: (page) => ({
        type: CHANGE_PAGE,
        page
    })
}

export const TodoListAction = {
    
}

export const PopupDialogAction = {
    selectDestination: (storeId) => ({
        type: TODOLIST.SELECT_DESTINATION,
        storeId
    }),
    selectDueDate: (date) => ({
        type: TODOLIST.SELECT_DUEDATE,
        date
    }),
    addNewBox: () => ({
        type: TODOLIST.ADD_NEW_BOX,
        id: v4()
    }),
    addNewContainerType: (boxId) => ({
        type: TODOLIST.ADD_NEW_CONTAINER_TYPE,
        id: v4(), 
        boxId
    }),
    removeBox: (boxId) => ({
        type: TODOLIST.REMOVE_BOX,
        boxId
    }),
    selectContainerType: (boxId, containerTypeId, container) => ({
        type: TODOLIST.SELECT_CONTAINER_TYPE,
        boxId, containerTypeId, container
    }),
    selectContainerAmount: (boxId, containerTypeId, amount) => ({
        type: TODOLIST.SELECT_CONTAINER_AMOUNT,
        boxId, containerTypeId, amount
    }),
    setLists: (lists) => ({
        type: TODOLIST.SET_BOXES,
        lists
    }),
    submitNewList: (phone, storeId, dueDate, boxes) => (dispatch) => {
        API.createDeliveryList(phone, storeId, dueDate, boxes)
            .then(console.log)
            .catch(console.err)
    }
}