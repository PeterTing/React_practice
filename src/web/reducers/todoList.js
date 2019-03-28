import { TODOLIST } from "../actions/type";
import { v4 } from 'uuid'

const initialState = {
    dialog: emptyOrder(),
    boxes: []
}

function emptyOrder (id = v4(), storeId = 0, dueDate = null, boxes = []) {
    return { 
        id, storeId, dueDate, boxes 
    }
}

function emptyBox (id = v4(), containerTypes=[]) {
    return {
        id, containerTypes
    }
}

function emptyContainerSet (id = v4(), containerType='', amount=0) {
    return {
        id, containerType, amount
    }
}
    
const todoList = (state=initialState, action) => {
    switch (action.type) {
        case TODOLIST.ADD_NEW_BOX:
        case TODOLIST.ADD_NEW_CONTAINER_TYPE:
        case TODOLIST.REMOVE_BOX:
        case TODOLIST.SELECT_CONTAINER_AMOUNT:
        case TODOLIST.SELECT_CONTAINER_TYPE:
        case TODOLIST.SELECT_DESTINATION:
        case TODOLIST.SELECT_DUEDATE:
            return { ...state, dialog: dialog(state.dialog, action)}
        case TODOLIST.SET_BOXES:
            return { ...state, boxes: action.boxes}
        default: return state
    }
}

const dialog = (state, action) => {
    switch (action.type) {
        case TODOLIST.ADD_NEW_BOX:
            return { ...state, boxes: [...state.boxes, emptyBox(action.id)]}
        case TODOLIST.ADD_NEW_CONTAINER_TYPE:
            return { 
                ...state, 
                boxes: [
                    ...state.boxes.map(box=>
                    box.id === action.boxId ?
                        {
                            ...box, 
                            containerTypes: [...box.containerTypes, emptyContainerSet(action.id)]
                        } :
                        box
                )]
            }
        case TODOLIST.REMOVE_BOX:
            return { ...state, boxes: state.boxes.filter(box=>box.id !== action.boxId)}
        case TODOLIST.SELECT_CONTAINER_AMOUNT:
            return { 
                ...state,
                boxes: [
                    ...state.boxes.map(box=>
                    box.id === action.boxId ?
                        {
                            ...box, 
                            containerTypes: box.containerTypes.map(item=>({
                                ...item,
                                amount: item.id === action.containerTypeId ?
                                    Number(action.amount) :
                                    Number(item.amount)
                            }))
                            
                        } :
                        box
                )]
            }
        case TODOLIST.SELECT_CONTAINER_TYPE:
            return { 
                ...state,
                boxes: [
                    ...state.boxes.map(box=>
                    box.id === action.boxId ?
                        {
                            ...box, 
                            containerTypes: box.containerTypes.map(item=>({
                                ...item,
                                containerType: item.id === action.containerTypeId ?
                                    action.container :
                                    item.containerType
                            }))
                            
                        } :
                        box
                )]
            }
        case TODOLIST.SELECT_DESTINATION:
            return {
                ...state, storeId: action.storeId
            }
        case TODOLIST.SELECT_DUEDATE:
            return {
                ...state, dueDate: action.date
            }            
        default: return state
    }
}

export default todoList
export const todolistInitialState = initialState