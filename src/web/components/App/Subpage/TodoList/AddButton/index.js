import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Fab, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button, Paper, Typography } from '@material-ui/core'
import { Add, Looks5 } from '@material-ui/icons';

const AddButton = (props) => {
    const { onOpen } = props

    return (
        <div>
            <Fab color="#F5F5F5" aria-label="Add" onClick={(e) => {
                e.preventDefault()
                onOpen()
            }}>
                <Add />
            </Fab>
        </div>
    )
}

export default AddButton