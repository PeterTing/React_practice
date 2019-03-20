import React from 'react'
import { Typography, Dialog, DialogTitle, DialogContent, DialogActions, Button, Paper } from '@material-ui/core'
import { Close } from '@material-ui/icons'

const Popup = (props) => {
    const { dialogActions, dialogContent, title, icon } = props
    return (
        <Dialog
            fullWidth={true}
            maxWidth={`sm`}
            open={true}
            aria-labelledby="form-dialog-title"
        >
            <DialogTitle id="form-dialog-title" style={{
                display: 'flex', 
                flexDirection: 'row-reverse'
            }}>
                <Button><Close/></Button>
            </DialogTitle>
            <DialogContent style={{padding: '0'}}>
                <Paper style={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    alignItems: 'center',
                    background: '#FFFFFF',
                    marginTop: '4px',
                    paddingTop: '20px',
                    paddingBottom: '20px',
                    boxShadow: '0 1px 4px 0 rgba(0,0,0,0.50)'
                }}>{
                    icon
                }
                    <Typography variant="h6" component="h3">{title}</Typography>
                </Paper> {
                dialogContent
            }</DialogContent>
            <DialogActions>{
                dialogActions
            }</DialogActions>
        </Dialog>
    )
}

export default Popup