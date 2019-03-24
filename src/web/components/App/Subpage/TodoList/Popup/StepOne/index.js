import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core'

import StoreSelector from './StoreSelector'
import { DateFormatInput } from 'material-ui-next-pickers'
import { LooksOne } from '@material-ui/icons';

const styles = () => ({
    selector: {
        marginLeft: '10%',
        marginRight: '10%',
        marginTop: '20px',
        width: '80%',
    },
    filledButton: {
        background: '#FAFAFA',
        boxShadow: '0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20)',
        background: '#9BD6E4',
        fontSize: '14px',
        color: '#FFFFFF',
        letterSpacing: '1.25px',
        textAlign: 'center',
        lineHeight: '16px',
        padding: '40px',
        paddingTop: '10px',
        paddingBottom: '10px',
        marginRight: '30px',
        marginBottom: '20px'
    }
})

const content = (props) => {
    const { classes } = props
    return (
        <div>
            <StoreSelector className={classes.selector}/>
            <div className={classes.selector} style={{background: '#f5f5f5', marginBottom: '300px'}}>
                <DateFormatInput fullWidth label='預計配送' value={new Date()} InputProps={{style: {height: '40px'}}} />
            </div>
        </div>
    )
}

const actions = (props) => {
    const { classes, stepOnChange } = props
    return (
        <div>
            <Button onClick={(e) => {
                e.preventDefault()
                stepOnChange()
            }} className={ classes.filledButton }>
                下一步
            </Button>
        </div>
    )
}

const StepOne = {
    title: '選擇配送店家',
    icon: <LooksOne/>,
    content: withStyles(styles)(content),
    actions: withStyles(styles)(actions)
}

export default StepOne