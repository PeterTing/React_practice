import React from 'react'

import { withStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText, Collapse, Icon, Typography } from '@material-ui/core'

const styles = theme => ({
    store: {
        display: 'flex',
        flexDirection: 'row',
        width: "50%",
        height: "18px",
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
            <ListItem style={{ backgroundColor: "#FFFFFF", display: 'flex', justifyContent: 'start', height: '72px' }}>
                <div className={classes.store}>
                    <Icon style={{ alignSelf: 'center', fontSize: `25px` }}>looks_3</Icon>
                    <ListItemText disableTypography primary={<Typography className={classes.styledFont}>布萊恩紅茶</Typography>} />
                </div>

                <ListItemText disableTypography primary={<Typography className={classes.styledFont}>3 件待裝箱</Typography>} style={{ width: "50%", padding: "0" }} />
            </ListItem>
        </List>
    )
}

export default withStyles(styles)(Todo)