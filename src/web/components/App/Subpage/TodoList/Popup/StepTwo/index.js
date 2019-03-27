import React from 'react'
import { LooksTwo } from '@material-ui/icons';
import { Grid, Button, withStyles } from '@material-ui/core';
import Box from './Box';
import OverviewItem from './OverviewItem';

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
        paddingBottom: '10px',
        color: '#9BD6E4'
    },
    container: {
        height: '100%'
    },
    box_list: {
        padding: '0',
        overflowY: 'scroll'
    }
})

const content = (props) => {
    const { classes, boxes } = props
    return (
        <Grid container direction='row' alignItems='flex-start' className={classes.container}>
            <Grid md={6} lg={6} xs={12} sm={12} style={{
            height: 'calc(100%-80px)'
        }}>
                <ul className={classes.box_list} style={{borderRight: '1px solid #d4d4d4', height: '100%'}}>{
                    boxes.map(box=>
                        <Box/>
                    )
                }</ul>
            </Grid>
            <Grid md={6} lg={6} xs={12} sm={12} >
                <ul className={classes.box_list} style={{padding: '20px', margin: '0'}}>
                    <OverviewItem/>
                </ul>
            </Grid>
        </Grid>
    )
}

const actions = (props) => {
    const { classes, stepOnChange, reset, submit } = props

    return (
        <div>
            <Button className={classes.outlinedButton} onClick={ (e) => {
                e.preventDefault()
                stepOnChange()
            }}>上一步</Button>
            <Button className={classes.outlinedButton} onClick={ (e) => {
                e.preventDefault()
            }}>使用上次配送單</Button>
            <Button className={classes.outlinedButton} onClick={ (e) => {
                e.preventDefault()
                reset()
            }}>清除</Button>
            <Button className={classes.filledButton} onClick={ (e) => {
                e.preventDefault()
                submit()
            }}>送出</Button>
        </div>
    )
}

const StepTwo = (storeName) => ({
    title: storeName,
    icon: <LooksTwo/>,
    content: withStyles(styles)(content), 
    actions: withStyles(styles)(actions)
})

export default StepTwo