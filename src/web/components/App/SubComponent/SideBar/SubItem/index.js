import React from 'react'

import { withStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText, Collapse } from '@material-ui/core'

const styles = theme => ({
    nested: {
        paddingLeft: theme.spacing.unit * 4,
        flexDirection: 'column'
    },
})

const items = ["今日工事", "待辦事項"]

const SubItem = (props) => {
    const { classes, isOpen } = props
    return (
        <Collapse in={isOpen} timeout="auto" unmountOnExit className={classes.collapse}>
            <List component="div" disablePadding>
                {
                    items.map((item, index) =>
                        <ListItem button className={classes.nested} key={index} onClick={(e) => { e.stopPropagation() }}>
                            <ListItemText inset primary={item} />
                        </ListItem>)
                }
            </List>
        </Collapse>
    )
}

export default withStyles(styles)(SubItem)

