import { CHANGE_PAGE } from './type.js'

export const PageAction = {
    changePage: (page) => (
        {
            type: CHANGE_PAGE,
            page
        }
    )
}

export const TodoListAction = {
}