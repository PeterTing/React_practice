import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Fab, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button, Paper, Typography } from '@material-ui/core';

import { Add, Looks5 } from '@material-ui/icons';
import StoreSelector from './StoreSelector';

const styles = theme => ({
    root: {
    },
    title: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
})

const AddButton = (props) => {
    const { classes, handleOpen, handleClose, isOpen } = props

    return (
        <div className={classes.root}>
            <Fab color="#F5F5F5" aria-label="Add" onClick={(e) => {
                e.preventDefault()
                handleOpen()
            }}>
                <Add />
            </Fab>
            <Dialog
                fullWidth={true}
                maxWidth={`xs`}
                open={isOpen}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
                className={classes.dialog}
            >
                <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                <DialogContent>
                    <Paper elevation={1} className={classes.title}>
                        <Looks5 />
                        <Typography variant="h6" component="h3">選擇配送店家</Typography>
                    </Paper>
                    <StoreSelector />
                </DialogContent>
                <DialogActions>
                    <Button onClick={(e) => {
                        e.preventDefault()
                        handleClose()
                    }} color="primary">
                        Cancel
                </Button>
                    <Button onClick={(e) => {
                        e.preventDefault()
                        handleClose()
                    }} color="primary">
                        Subscribe
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default withStyles(styles)(AddButton)