import React from 'react'
import { withStyles, Paper, DialogTitle, Button, DialogContent, DialogActions } from '@material-ui/core';
import {Delete} from '@material-ui/icons'
import Item from './Item';

const styles = (theme) => ({
    body: {
        margin: '10px',
        width: 'calc(100%-20px)'
    },
    title: {
        padding: '0px',
        display: 'flex',
        flexDirection: 'row-reverse'
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
    const { classes, addNewContainerType, removeBox, box, containers, selectContainerType, selectContainerAmount } = props
    const {id, containerTypes } = box

    return (
        <Paper className={classes.body}>
            <DialogTitle className={classes.title}>
                <Button onClick={()=>removeBox(id)}><Delete/></Button>
            </DialogTitle>
            <DialogContent className={classes.content}>
                <ul className={classes.list}>{
                    containerTypes.map((item, index)=>
                        <Item 
                            boxId={id}
                            item={item} 
                            key={index} 
                            containers={containers} 
                            selectContainerAmount={selectContainerAmount} 
                            selectContainerType={selectContainerType}
                        />
                    )
                }</ul>
            </DialogContent>
            <DialogActions>
                <div className={classes.button_container}>
                    <Button onClick={()=>addNewContainerType(id)}>新增品項 ＋</Button>
                </div>
            </DialogActions>
        </Paper>
    )
}

export default withStyles(styles)(Box)