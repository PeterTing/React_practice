import React from 'react'
import { Typography, Dialog, DialogTitle, DialogContent, DialogActions, Button, Paper, withStyles } from '@material-ui/core'
import { Close } from '@material-ui/icons'

const styles = (theme) => ({
    dialog: {

    },
    dialog_title: {
        display: '',
        alignItems: 'center'
    },
    dialog_title_word: {
        display: 'inline-flex',
        padding: '6px 8px',
        lineHeight: '1.667rem',
        flex: '0 0 50%'
    },
    dialog_close: {
        right: '0',
        flex: '0 0 50%'
    }
})

const Popup = (props) => {
    const { classes, dialogActions, dialogContent, title, icon } = props
    return (
        <Dialog
            className={classes.dialog}
            fullWidth={true}
            maxWidth={`sm`}
            open={true}
            aria-labelledby="form-dialog-title"
            
        >
            <DialogTitle id="form-dialog-title" className={classes.dialog_title} >
                <div className={classes.dialog_title_word}>選擇配送單</div>
                <Button className={classes.dialog_close}><Close/></Button>
            </DialogTitle>
                <Paper style={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    alignItems: 'center',
                    background: '#FFFFFF',
                    marginTop: '4px',
                    paddingTop: '10px',
                    paddingBottom: '10px',
                    boxShadow: '0 1px 4px 0 rgba(0,0,0,0.50)',
                    height: '80px'
                }}>{
                    icon
                }
                    <Typography variant="h6" component="h3">{title}</Typography>
                </Paper>
            <DialogContent style={{padding: '0', marginTop: '4px'}}>{
                dialogContent
            }</DialogContent>
            <DialogActions>{
                dialogActions
            }</DialogActions>
        </Dialog>
    )
}

export default withStyles(styles)(Popup)