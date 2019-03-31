import { Today, Calendar } from '../../components/App/Subpage/TodoList'
import { connect } from 'react-redux'
import { TodoListAction } from '../../actions'
import BoxStatus from '../../_constant/BoxStatus'

const mapStateToTodoListProps = (state) => ({
    lists: state.todoList.lists
})

const mapDispatchToTodoListProps = dispatch => ({
    fetchDeliveryLists: () => {
        dispatch(TodoListAction.fetchLists())
    }
})

const mapStateToTodayProps = (state) => {
    const storeDict = JSON.parse(localStorage.getItem('stores'))
    return ({
        ...mapStateToTodoListProps(state),
        lists: state.todoList.lists
            .map(list=>({
                ...list, 
                boxObjs: list.boxObjs
                    .map(box=>({
                        ...box, dueDate: new Date(box.dueDate), statusNumber: BoxStatus.convertToNumber(box.status)
                    })
                )}
            ))
            .map(list=>({
                ...list,
                boxObjs: list.boxObjs
                    .filter(box=> {
                        const boxDate = new Date(box.dueDate.toDateString())
                        const todayDate = new Date((new Date()).toDateString())
                        return box.status === BoxStatus.CREATED || box.status === BoxStatus.BOXING ? 
                            boxDate <= todayDate :
                            boxDate == todayDate
                    })
            }))
            .filter(list=>list.boxObjs.length>0)
            .map(list=>({
                ...list, storeName: storeDict.find(store=>store.id === list.storeID).name
            }))
    })
}

const mapDispatchToTodayProps = (dispatch) => ({
    ...mapDispatchToTodoListProps(dispatch)
})

export const TodayContainer = connect(mapStateToTodayProps, mapDispatchToTodayProps)(Today)

const mapStateToCalendarProps = (state) => {
    const storeDict = JSON.parse(localStorage.getItem('stores'))
    const createScheduleMap = lists => {
        const boxes = lists.flatMap(list=>list.boxObjs.map(box=>({...box, storeName: storeDict.find(store=>store.id === list.storeID).name})))
        let map = new Map()
        boxes.forEach(box=>{
            const key = new Date(new Date(box.dueDate).toDateString()).toDateString()
            if (key == new Date('').toDateString()) return
            let array = map.get(key)
            if (!array) array = []
            array.push(box)
            map.set(key, array)
        })
        let object = {}
        let result = {}
        map.forEach((value, key)=> {
            result = {}
            value.forEach((val)=>{
                let array = result[val.storeName]
                if (array) 
                    array = [...array, val]
                else 
                    array = [val]

                result[val.storeName] = array
            })
            object[key] = result
        })
        return Object.values(object).flatMap(obj=>Object.values(obj))
    }
    const scheduleMap = createScheduleMap(state.todoList.lists).sort((a,b)=>new Date(a[0].dueDate).getTime() - new Date(b[0].dueDate).getTime())

    return ({
        ...mapStateToTodoListProps(state),
        scheduleMap
    })
}

const mapDispatchToCalendarProps = (dispatch) => ({
    ...mapDispatchToTodoListProps(dispatch)
})

export const CalendarContainer = connect(mapStateToCalendarProps, mapDispatchToCalendarProps)(Calendar)