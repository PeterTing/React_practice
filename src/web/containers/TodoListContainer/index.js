import { Today, Calendar } from '../../components/App/Subpage/TodoList'
import { connect } from 'react-redux'

const mapStateToTodayProps = (state) => ({
    
})

const mapDispatchToTodayProps = (dispatch) => ({

})

export const TodayContainer = connect(mapStateToTodayProps, mapDispatchToTodayProps)(Today)

const mapStateToCalendarProps = (state) => ({

})

const mapDispatchToCalendarProps = (dispatch) => ({

})

export const CalendarContainer = connect(mapStateToCalendarProps, mapDispatchToCalendarProps)(Calendar)