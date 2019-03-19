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

const items = ["今日工事", "待辦事項"]

const Todo = (props) => {
    const { classes } = props
    return (
        <List component="div" style={{ paddingTop: '10px' }}>
            <ListItem style={{ backgroundColor: "#F0F0F0", display: 'flex', justifyContent: 'start', height: "72px" }}>
                <ListItemText disableTypography primary={<Typography className={classes.styledFont}>12oz 玻璃杯</Typography>} style={{ width: "40%" }} />
                <div className={classes.amount}>
                    <ListItemText disableTypography primary={<Typography className={classes.styledFont}>33</Typography>} style={{ width: '33%', padding: 0 }} />
                    <ListItemText disableTypography primary={<Typography className={classes.styledFont}>33</Typography>} style={{ width: '33%', padding: 0 }} />
                    <ListItemText disableTypography primary={<Typography className={classes.styledFont}>33</Typography>} style={{ width: '33%', padding: 0 }} />
                </div>
            </ListItem>
        </List>
    )
}

export default withStyles(styles)(Todo)