import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography, Grid } from '@material-ui/core'
import Todo from './todo'
import ContainerInfo from './ContainerInfo'
import AddButton from './AddButton'
import TodoListCell from './TodoListCell'
import Popup from './Popup'

const styles = theme => ({
    root: { 
        width: `100%`,
        height: `100%`,
        paddingLeft: '5%',
        paddingRight: '5%'
    },
    header: {
        height: `96px`,
        position: 'relative'
    },
    title: {
        paddingTop: `59px`,
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
const tableHeader = ['配送單', '預計配送日', '待裝箱', '待配送', '待簽收', '已簽收', '異常']

class _TodoList extends React.Component {
    constructor(props) {
        super(props)
        this.openPopup = this.openPopup.bind(this)
        this.state = {
            isPopupViewOpened: false
        }
    }

    openPopup() {
        this.setState({
            ...this.state, isPopupViewOpened: true
        })
    }

    closePopup() {
        this.setState({
            ...this.state, isPopupViewOpened: false
        })
    }

    render() {
        const { classes } = this.props

        return (
            <div className={classes.root}>
                {
                    this.props.children
                }
                <div className={classes.add_button}>
                    <AddButton onOpen={()=>this.openPopup()} />
                </div>
                <Popup
                    onClose={()=>this.closePopup()}
                    open={this.state.isPopupViewOpened}
                />
            </div >
        )
    }
}

const TodoList = withStyles(styles)(_TodoList)

const TodaySection = (props) => {
    const { classes } = props
    return (
        <Grid container direction="row" style={{height: 'calc(50% - 32px'}}>
                <Grid item md={12} style={{ height: "96px" }}>
                    <Typography variant="h1" className={classes.title}>今日工事</Typography>
                </Grid >
                <Grid container item md={12} lg={6} style={{ height: `100%`, backgroundColor: "#F7F7F7", padding: '10px' }}>
                    <Grid container direction="column" item xs={12} className={classes.first_block}>
                        <Typography className={classes.subTitle} style={{ paddingLeft: "10px", width: "50%" }}>配送單</Typography>
                        <Typography className={classes.subTitle}>狀態</Typography>
                    </Grid>
                    <div className={classes.second_block}>
                        <Grid container direction="row">
                            <Grid container direction="column" item xs={12}>
                                <Todo />
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
                <Grid container item md={12} lg={6} style={{ height: `100%`, backgroundColor: "#F7F7F7", padding: '10px' }}>
                    <Grid container direction="column" item xs={12} className={classes.first_block}>
                        <Typography className={classes.subTitle} style={{ paddingLeft: "10px", width: "40%" }}>配送單</Typography>
                        <div className={classes.right_block}>
                            {subTitleRight.map((title, index) => <Typography className={classes.subTitle_right} key={index} style={{ width: "33%" }} >{title}</Typography>)}
                        </div>
                    </Grid>
                    <div className={classes.second_block}>
                        <Grid container direction="row">
                            <Grid container direction="column" item xs={12}>
                                <ContainerInfo />
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
    )
}

const CalendarSection = (props) => {
    const { classes } = props
    return (
        <Grid container direction="row" style={{height: 'calc(50% - 32px'}}>
            <Grid item md={12} style={{ height: "96px" }}>
                <Typography variant="h1" className={classes.title}>配送單</Typography>
            </Grid >
            <Grid item md={12} style={{ height: "calc(100% - 96px)" }}>
                <table style={{width: `100%`}}>
                    <thead>{
                        tableHeader.map((title, i) => (
                            <td key={i}>{title}</td>
                        ))
                    }</thead>
                    <tbody>{
                        <TodoListCell></TodoListCell>
                    }</tbody>
                </table>
            </Grid>
        </Grid>
    )
}

const _Today = withStyles(styles)(TodaySection)
const _Calendar = withStyles(styles)(CalendarSection)

export const Today = () => (
    <TodoList>
        <_Today/>
    </TodoList>
)
export const Calendar = () => (
    <TodoList>
        <_Calendar/>
    </TodoList>
)
