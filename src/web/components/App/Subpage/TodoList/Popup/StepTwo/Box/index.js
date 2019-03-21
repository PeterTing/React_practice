import React from 'react'
import { withStyles, Paper, DialogTitle, Button, DialogContent, DialogActions } from '@material-ui/core';
import Item from './Item';

const styles = (theme) => ({
    body: {
        margin: '10px',
        width: 'calc(100%-20px)'
    },
    title: {
        padding: '0px'
    },
    content: {
        paddingBottom: '0'
    },
    list: {
        padding: '0'
    },
    button_container: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
    }
})

const Box = (props) => {
    const { classes } = props
    return (
        <Paper className={classes.body}>
            <DialogTitle className={classes.title}>
                <Button>X</Button>
            </DialogTitle>
            <DialogContent className={classes.content}>
                <ul className={classes.list}>
                    <Item></Item>
                    <Item></Item>
                </ul>
            </DialogContent>
            <DialogActions>
                <div className={classes.button_container}>
                    <Button>新增 ＋</Button>
                </div>
            </DialogActions>
        </Paper>
    )
}

export default withStyles(styles)(Box)