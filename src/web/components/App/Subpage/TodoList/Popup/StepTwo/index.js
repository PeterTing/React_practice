import React from 'react'
import { LooksTwo } from '@material-ui/icons';
import { Grid, Button, withStyles } from '@material-ui/core';

const styles = () => ({
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
    },
    outlinedButton: {
        background: 'rgba(98,2,238,0.00)',
        border: '1px solid rgba(0,0,0,0.12)',
        fontSize: '14px',
        letterSpacing: '1.25px',
        textAlign: 'center',
        lineHeight: '16px',
        padding: '40px',
        paddingTop: '10px',
        paddingBottom: '10px'
    }
})

const content = (props) => {
    return (
        <Grid container direction='row'>
            <Grid md={12} lg={6} >
                <ul>
                    <li>123</li>
                </ul>
            </Grid>
            <Grid md={12} lg={6} >
                <ul>
                    <li>123</li>
                </ul>
            </Grid>
        </Grid>
    )
}

const actions = (props) => {
    const { classes } = props

    return (
        <div>
            <Button className={classes.outlinedButton}>上一步</Button>
            <Button className={classes.outlinedButton}>使用上次配送單</Button>
            <Button className={classes.outlinedButton}>清除</Button>
            <Button className={classes.filledButton}>送出</Button>
        </div>
    )
}

const StepTwo = (storeName) => ({
    title: storeName,
    icon: <LooksTwo />,
    content, 
    actions: withStyles(styles)(actions)
})

export default StepTwo