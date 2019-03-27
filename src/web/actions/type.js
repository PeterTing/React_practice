export const CHANGE_PAGE = 'CHANGE_PAGE'

export const PAGE = Object.freeze({
    /* Main Page*/
    HOME: "home",
    TODOLIST: "todoList",
    STORE: "store",
    USER: "user",
    CONTAINER: "container",
    CONSOLE: "console",
    ACTIVITY: "activity",

    /* Children */
    TODOLIST_TODAY: 'todoListToday',
    TODOLIST_CALENDAR: 'todoListCalendar'
})

export const TODOLIST = Object.freeze({
    SELECT_DESTINATION: "SELECT_DESTINATION",
    SELECT_DUEDATE: "SELECT_DUEDATE",
    ADD_NEW_BOX: 'ADD_NEW_BOX',
    ADD_NEW_CONTAINER_TYPE: 'ADD_NEW_CONTAINER_TYPE',
    REMOVE_BOX: 'REMOVE_BOX',
    SELECT_CONTAINER_TYPE: "SELECT_CONTAINER_TYPE",
    SELECT_CONTAINER_AMOUNT: 'SELECT_CONTAINER_AMOUNT',
    SET_BOXES: 'SET_BOXES'
})