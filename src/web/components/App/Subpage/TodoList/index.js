import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';

const styles = theme => ({
    root: {
        width: `100%`
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
    containers_title: {

    },
    subTitle: {
        display: 'inline-block',
        width: "40%",
        paddingTop: `50px`,
        paddingLeft: `10px`,
        fontSize: `18px`,
        fontWeight: `500`,
        letterSpacing: `1px`,
        lineHeight: `24px`,
        color: `#ABABAB`
    },
    subTitle_right: {
        display: 'inline-block',
        width: "16%",
        paddingTop: `50px`,
        paddingLeft: `10px`,
        fontSize: `18px`,
        fontWeight: `500`,
        letterSpacing: `1px`,
        lineHeight: `24px`,
        color: `#ABABAB`
    }
})

const TodoList = (props) => {
    const { classes } = props

    return (
        <div className={classes.root}>
            <Grid container direction="row" spacing={5}>
                <Grid item xs={12}>
                    <Typography variant="h1" className={classes.title}>今日工事</Typography>
                </Grid >
                <Grid container item xs={6}>
                    <Grid item xs={2}></Grid>
                    <Grid direction="column" item xs={8} style={{ borderBottom: "1px solid #E0E0E0", borderWidth: "thin" }}>
                        <Typography className={classes.subTitle}>配送單</Typography>
                        <Typography className={classes.subTitle}>狀態</Typography>
                    </Grid>
                    <Grid item xs={2}></Grid>
                    {/* <Typography variant="h1" className={classes.todos_title}>今日工事</Typography> */}
                </Grid>
                <Grid item xs={6}>
                    <Grid item xs={2}></Grid>
                    <Grid direction="column" item xs={8} style={{ borderBottom: "1px solid #E0E0E0", borderWidth: "thin" }}>
                        <Typography className={classes.subTitle}>配送單</Typography>
                        <Typography className={classes.subTitle_right}>總量</Typography>
                        <Typography className={classes.subTitle_right}>已裝箱</Typography>
                        <Typography className={classes.subTitle_right}>待裝箱</Typography>
                    </Grid>
                    <Grid item xs={2}></Grid>
                </Grid>
            </Grid>

        </div>
    )
}

export default withStyles(styles)(TodoList)