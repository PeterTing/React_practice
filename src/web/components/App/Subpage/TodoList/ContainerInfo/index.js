import React from 'react'

import { withStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText, Collapse, Icon, Typography } from '@material-ui/core'

const styles = theme => ({
    amount: {
        display: 'flex',
        position: 'relative',
        width: '60%',
        flexDirection: "row",
        textAlign: 'end',
        padding: 0
    },
    styledFont: {
        fontSize: '18px',
        color: "#6B6B6B"
    }
})

const Todo = (props) => {
    const { classes, data, name } = props

    return (
        <List component="div" style={{ paddingTop: '10px' }}>
            <ListItem style={{ backgroundColor: "transparent", display: 'flex', justifyContent: 'start', height: "72px", borderBottom: '1px solid #E0E0E0' }}>
                <ListItemText disableTypography primary={<Typography className={classes.styledFont}>{name}</Typography>} style={{ width: "40%" }} />
                <div className={classes.amount}>
                    <ListItemText disableTypography primary={<Typography className={classes.styledFont}>{data.total}</Typography>} style={{ width: '33%', padding: 0 }} />
                    <ListItemText disableTypography primary={<Typography className={classes.styledFont}>{data.packed}</Typography>} style={{ width: '33%', padding: 0 }} />
                    <ListItemText disableTypography primary={<Typography className={classes.styledFont}>{Math.max(0, data.total-data.packed)}</Typography>} style={{ width: '33%', padding: 0 }} />
                </div>
            </ListItem>
        </List>
    )
}

export default withStyles(styles)(Todo)