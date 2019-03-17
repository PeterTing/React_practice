import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Typography, Grid, Fab, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button } from '@material-ui/core';
import Todo from './todo'
import ContainerInfo from './ContainerInfo'
import { Add } from '@material-ui/icons';
import AddButton from './AddButton';

const styles = theme => ({
    root: {
        width: `100%`,
        height: `100%`,
    },
    header: {
        height: `96px`,
        position: 'relative'
    },
    title: {
        paddingTop: `59px`,
        paddingLeft: `76px`,
        fontSize: `24px`,
        fontWeight: `bold`,
        letterSpacing: `2px`,
        lineHeight: `28px`,
        color: `#4A4A4A`
    },
    todos_title: {
        borderBottom: "1px solid #E0E0E0"
    },
    first_block: {
        borderBottom: "1px solid #E0E0E0",
        borderWidth: "thin",
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: 'start'
    },
    subTitle: {
        position: 'relative',
        height: '28px',
        width: "auto",
        paddingTop: `5px`,
        fontSize: `18px`,
        fontWeight: `500`,
        letterSpacing: `1px`,
        lineHeight: `18px`,
        color: `#ABABAB`,
        textAlign: 'start',
    },
    subTitle_right: {
        position: 'relative',
        display: 'inline-block',
        fontSize: `18px`,
        fontWeight: `500`,
        letterSpacing: `1px`,
        color: `#ABABAB`,
        textAlign: 'end',
    },
    right_block: {
        paddingTop: '1px',
        position: 'relative',
        height: '28px',
        width: "60%",
    },
    second_block: {
        height: '100%',
        width: '100%',
        position: 'relative',
    },
    add_button: {
        display: 'block',
        position: 'fixed',
        right: '41px',
        bottom: '24px'
    }
})

const subTitleRight = ["總量", "已裝箱", "待裝箱"]

const TodoList = (props) => {
    const { classes, isOpen, handleClose, handleOpen } = props

    return (
        <div className={classes.root}>
            <Grid container direction="row">
                <Grid item md={12} style={{ height: "96px" }}>
                    <Typography variant="h1" className={classes.title}>今日工事</Typography>
                </Grid >
                <Grid container item md={12} lg={6} style={{ height: `100%`, backgroundColor: "#F7F7F7" }}>
                    <Grid item xs={1}></Grid>
                    <Grid container direction="column" item xs={10} className={classes.first_block}>
                        <Typography className={classes.subTitle} style={{ paddingLeft: "10px", width: "50%" }}>配送單</Typography>
                        <Typography className={classes.subTitle}>狀態</Typography>
                    </Grid>
                    <Grid item xs={1}></Grid>
                    <div className={classes.second_block}>
                        <Grid container direction="row">
                            <Grid item xs={1}></Grid>
                            <Grid container direction="column" item xs={10}>
                                <Todo />
                            </Grid>
                        </Grid>
                        <Grid item xs={1}></Grid>
                    </div>
                </Grid>
                <Grid container item md={12} lg={6} style={{ height: `100%`, backgroundColor: "#F7F7F7" }}>
                    <Grid item xs={1}></Grid>
                    <Grid container direction="column" item xs={10} className={classes.first_block}>
                        <Typography className={classes.subTitle} style={{ paddingLeft: "10px", width: "40%" }}>配送單</Typography>
                        <div className={classes.right_block}>
                            {subTitleRight.map((title, index) => <Typography className={classes.subTitle_right} key={index} style={{ width: "33%" }} >{title}</Typography>)}
                        </div>
                    </Grid>
                    <Grid item xs={1}></Grid>
                    <div className={classes.second_block}>
                        <Grid container direction="row">
                            <Grid item xs={1}></Grid>
                            <Grid container direction="column" item xs={10}>
                                <ContainerInfo />
                            </Grid>
                            <Grid item xs={1}></Grid>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
            <div className={classes.add_button}>
                <AddButton isOpen={isOpen} handleClose={handleClose} handleOpen={handleOpen} />
            </div>
        </div >
    )
}

export default withStyles(styles)(TodoList)