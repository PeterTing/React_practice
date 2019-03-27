import React from 'react'
import { Typography, Dialog, DialogTitle, DialogContent, DialogActions, Button, Paper, withStyles } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import StepOne from './StepOne'
import StepTwo from './StepTwo'

const styles = (theme) => ({
    dialog_title_paper: { 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center',
        background: '#FFFFFF',
        marginTop: '4px',
        paddingTop: '10px',
        paddingBottom: '10px',
        boxShadow: '0 1px 4px 0 rgba(0,0,0,0.50)',
        height: '80px'
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

class Popup extends React.Component {

    constructor(props) {
        super(props)

        this.goStepOne = this.goStepOne.bind(this)
        this.goStepTwo = this.goStepTwo.bind(this)
        this.clearState = this.clearState.bind(this)
        this.commit = this.commit.bind(this)

        this.state = {
            ...this.state,
            step: 1
        }
    } 

    goStepOne() {
        this.setState({
            ...this.state,
            step: 1
        })
    }

    goStepTwo() {
        this.setState({
            ...this.state,
            step: 2
        })
    }

    clearState() {
        
    }

    commit() {

    }

    render() {
        const { classes, open, onClose, boxes, dueDate, storeId } = this.props
        const { storeName, step } = this.state
        console.log(this.props)
        const dialog = step === 1 ? StepOne : StepTwo(storeName)

        const { title, icon } =  dialog

        return (
            <Dialog
                onExited={ () => {
                    this.clearState()
                    this.goStepOne()
                }}
                onClose={onClose}
                fullWidth={true}
                maxWidth={`sm`}
                open={open}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title" className={classes.dialog_title} >
                    <div className={classes.dialog_title_word}>選擇配送單</div>
                    <Button className={classes.dialog_close} onClick={(e) => {
                        e.preventDefault()
                        onClose()
                    }}><Close/></Button>
                </DialogTitle>
                <Paper className={classes.dialog_title_paper}>{
                    icon
                }
                    <Typography variant="h6" component="h3">{title}</Typography>
                </Paper>
                <DialogContent style={{padding: '0', marginTop: '4px'}}>
                    <dialog.content storeId={storeId} dueDate={dueDate} boxes={boxes} dateOnChange={this.props.selectDueDate} storeOnChange={this.props.selectDestination}/>
                </DialogContent>
                <DialogActions>
                    <dialog.actions stepOnChange={step === 1 ? this.goStepTwo : this.goStepOne} reset={this.clearState} submit={this.commit}/>
                </DialogActions>
            </Dialog>
        )
    }
}

export default withStyles(styles)(Popup)