import React from 'react'
import { withStyles } from '@material-ui/core'
import BoxStatus from '../../../../../_constant/BoxStatus'

const styles = theme => ({
    row: {
        height: '82px',
        padding: '5px',
        margin: '5px',
        color: '#6B6B6B'
    },
    cell: {
        borderBottom: '5px solid #F7F7F7',
        borderTop: '5px solid #F7F7F7'
    },
    normalRow: {
        backgroundColor: 'white'
    },
    oddsRow: {
        backgroundColor: '#FFEDF0'
    },
    icon: {
        color: 'white',
        width: '24px',
        height: '24px',
        borderRadius: '12px',
        display: 'inline-flex',
        alignItems: 'center',
        margin: 'auto 10px'
    },
    iconAvailable: {
        backgroundColor: '#8EE2F5',
    },
    iconUnavailable: {
        backgroundColor: '#DB7982',
    },
    number: {
        margin: '0 auto'
    }
})

const TodoListCell = ({data, classes}) => {
    const storeName = data[0].storeName
    const dueDate = new Date(data[0].dueDate).toDateString()
    const created = data.filter(box=>box.status === BoxStatus.CREATED).length
    const boxing = data.filter(box=>box.status === BoxStatus.BOXING).length
    const delivery = data.filter(box=>box.status === BoxStatus.DELIVERY).length
    const signed = data.filter(box=>box.status === BoxStatus.SIGNED).length
    const odds = data.filter(box=>box.comment !== "").length

    const rowClasses = [classes.row, odds > 0 ? classes.oddsRow : classes.normalRow].join(' ')
    const iconClasses = [classes.icon, odds > 0 ? classes.iconUnavailable : classes.iconAvailable].join(' ')
    return (
        <tr className={rowClasses}>
            <td style={{
                borderTopLeftRadius: '15px',
                borderBottomLeftRadius: '15px'
            }} className={classes.cell}><div className={iconClasses}><span className={classes.number}>{data.length}</span></div>{storeName}</td>
            <td className={classes.cell}>{dueDate}</td>
            <td className={classes.cell}>{created}</td>
            <td className={classes.cell}>{boxing}</td>
            <td className={classes.cell}>{delivery}</td>
            <td className={classes.cell}>{signed}</td>
            <td style={{
                borderTopRightRadius: '15px',
                borderBottomRightRadius: '15px'
            }} className={classes.cell} style={{
                color: `${odds > 0 ? '#B31B32' : '#6B6B6B'}`,
                fontWeight: `${odds > 0 ? '800' : '400'}`
            }}>{odds}</td>
        </tr>
    )
}

export default withStyles(styles)(TodoListCell)