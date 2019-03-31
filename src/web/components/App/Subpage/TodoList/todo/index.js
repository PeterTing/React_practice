import React from 'react'

import { withStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText, Collapse, Icon, Typography } from '@material-ui/core'
import BoxStatus from '../../../../../_constant/BoxStatus';

const styles = theme => ({
    store: {
        display: 'flex',
        flexDirection: 'row',
        width: "50%",
        height: "18px",
    },
    styledFont: {
        fontSize: '18px'
    },
    fontAvailable: {
        color: "#6B6B6B"
    },
    fontUnavailable: {
        color: '#E0E0E0'
    },
    icon: {
        color: 'white',
        width: '24px',
        height: '24px',
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center'
    },
    iconAvailable: {
        backgroundColor: '#8EE2F5',
    },
    iconUnavailable: {
        backgroundColor: '#E0E0E0',
    },
    number: {
        margin: '0 auto'
    }
})

const countBoxesWaitingForPacking = list => {
    return list.boxObjs.filter(box=>box.status === BoxStatus.CREATED).length
}

const countBoxesWaitingForDelivery = list => {
    return list.boxObjs.filter(box=>box.status === BoxStatus.BOXING).length
}

const countBoxesFinished = list => {
    return list.boxObjs.filter(box=>box.status === BoxStatus.SIGNED).length
}

const makeStatusSentence = list => {
    const packing = countBoxesWaitingForPacking(list)
    const delivery = countBoxesWaitingForDelivery(list)
    const finished = countBoxesFinished(list)

    if (finished > 0 && (packing + delivery) === 0)
        return '已完成'

    const zipped = [{number: packing, postfix: ' 件待裝箱'}, {number: delivery, postfix: ' 件待配送'}]
    
    const sentences = []
    for (let i = 0; i < zipped.length ; i++) {
        if (zipped[i].number == 0) continue
        sentences.push(zipped[i].number + zipped[i].postfix)
    }

    return sentences.join(' | ')
}

const Todo = (props) => {
    const { classes, list } = props

    const status = makeStatusSentence(list)
    const iconStatus = status !== '已完成' ? classes.iconAvailable : classes.iconUnavailable
    const fontStatus = status !== '已完成' ? classes.fontAvailable : classes.fontUnavailable
    
    const iconClasses =  [classes.icon, iconStatus].join(' ')
    const fontClasses = [classes.styledFont, fontStatus].join(' ')
    
    return (
        <List component="div" style={{ paddingTop: '10px' }}>
            <ListItem style={{ borderRadius: '6px', backgroundColor: "#FFFFFF", display: 'flex', justifyContent: 'start', height: '72px' }}>
                <div className={classes.store}>
                    <div className={iconClasses}><span className={classes.number}>{list.boxObjs.length}</span></div>
                    <ListItemText disableTypography primary={<Typography className={fontStatus}>{list.storeName}</Typography>} />
                </div>
                <ListItemText disableTypography primary={<Typography className={fontClasses}>{status}</Typography>} style={{ width: "50%", padding: "0" }} />
            </ListItem>
        </List>
    )
}

export default withStyles(styles)(Todo)