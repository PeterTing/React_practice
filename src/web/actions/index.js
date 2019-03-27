import { CHANGE_PAGE, TODOLIST } from './type.js'
import { v4 } from 'uuid'

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
    setBoxes: (boxes) => ({
        type: TODOLIST.SET_BOXES,
        boxes
    })
}