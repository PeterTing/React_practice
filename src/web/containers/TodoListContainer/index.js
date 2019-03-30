import { Today, Calendar } from '../../components/App/Subpage/TodoList'
import { connect } from 'react-redux'
import { TodoListAction } from '../../actions'

const mapStateToTodoListProps = (state) => ({
    boxes: state.todoList.boxes
})

const mapDispatchToTodoListProps = dispatch => ({
    fetchDeliveryLists: () => {
        dispatch(TodoListAction.fetchLists)
    }
})

const mapStateToTodayProps = (state) => ({
    ...mapStateToTodoListProps(state)
})

const mapDispatchToTodayProps = (dispatch) => ({
    ...mapDispatchToTodoListProps(dispatch)
})

export const TodayContainer = connect(mapStateToTodayProps, mapDispatchToTodayProps)(Today)

const mapStateToCalendarProps = (state) => ({
    ...mapStateToTodoListProps(state)
})

const mapDispatchToCalendarProps = (dispatch) => ({
    ...mapDispatchToTodoListProps(dispatch)
})

export const CalendarContainer = connect(mapStateToCalendarProps, mapDispatchToCalendarProps)(Calendar)