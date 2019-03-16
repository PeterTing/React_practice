import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Drawer, Hidden } from '@material-ui/core'
import SideBar from '../SideBar'

const styles = theme => ({
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
})

const drawerWidth = 240

const StyledDrawer = (props) => {
    const { classes } = props

    return (
        <nav className={classes.drawer}>
            <Hidden xsDown implementation="css">
                <Drawer
                    variant="permanent"
                    open
                >
                    <SideBar />
                </Drawer>
            </Hidden>
        </nav>
    )
}

export default withStyles(styles)(StyledDrawer)

