import { CHANGE_PAGE, TODOLIST } from './type.js'

export const PageAction = {
    changePage: (page) => (
        {
            type: CHANGE_PAGE,
            page
        }
    )
}

export const TodoListAction = {
    changeViewMode: (mode) => (
        {
            type: TODOLIST.CHANGE_VIEW_MODE,
            mode
        }
    )
}