import React from 'react'
import SegmentControl from './SegmentControl'
import Segment from './SegmentControl/Segment'
import TodoListCell from './TodoListCell'
import { withStyles } from '@material-ui/core/styles';


const TodoList = () => {
    const segments = ['全部配送單', '未完成配送單', '已完成配送單']
    const tableHeader = [segments[0], '預計配送日', '待裝箱', '待配送', '待簽收', '已簽收', '異常']
    return (
        <div>
            <SegmentControl>{
                segments.map((segment, i) => (
                    <Segment index={i} key={i}>{segment}</Segment>
                ))
            }</SegmentControl>
            <table>
                <thead>{
                    tableHeader.map((title, i) => (
                        <td key={i}>{title}</td>
                    ))
                }</thead>
                <tbody>{
                    <TodoListCell></TodoListCell>
                }</tbody>
            </table>
            <button>+</button>
        </div>
    )
}

export default TodoList