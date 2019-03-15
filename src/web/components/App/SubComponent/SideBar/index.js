import React from 'react'
import { List, ListItem, ListItemIcon, ListItemText, CssBaseline, Typography, Collapse } from '@material-ui/core'
import { StoreMallDirectory, SupervisorAccount, InsertInvitation, LocalDrink, Assignment, Home, Build, StarBorder } from '@material-ui/icons'
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import { PAGE } from '../../../../actions/types';
import SubItem from './SubItem'

const styles = theme => ({
    root: {
        height: '100%',
        width: `${drawerWidth}px`
    },
    toolbar: {
        height: `100%`,
    },
    img: {
        width: `100%`,
        height: `${imgHeight}px`,
        backgroundColor: "#40B9D8"
    },
    item: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        height: 'auto',
        justifyContent: 'center',
        marginTop: '20px'
    },
    itemComponent: {
        display: "flex",
        alignItems: 'center',
        paddingLeft: '40px'
    },
    list: {
        height: `calc(100% - ${imgHeight}px)`,
    },
    icon: {
        width: "36px",
        height: "36px"
    }
})
const pages = ['首頁', '店鋪', '活動', '使用者', '容器', '代辦清單', '中控台']
const pagesInEnglish = [PAGE.HOME, PAGE.STORE, PAGE.ACTIVITY, PAGE.USER, PAGE.CONTAINER, PAGE.TODOLIST, PAGE.CONSOLE]

const imgHeight = 216
const drawerWidth = 440

const SideBar = (props) => {
    const { classes, onClick, isOpen } = props

    return (
        <div className={classes.root}>
            <CssBaseline />
            <div className={classes.toolbar}>
                <div className={classes.img}>
                    <img src={require('../../../../../../public/img/mini_logo.svg')} alt="logo" style={{
                        width: `100%`,
                        height: `${imgHeight}px`
                    }}></img>
                </div>
                <List component="div" className={classes.list}>
                    {
                        pages.map((page, index) => (
                            <ListItem button component={Link} to={`/${pagesInEnglish[index]}`} onClick={() => onClick(pagesInEnglish[index])(isOpen)} key={page} className={classes.item}>
                                <div className={classes.itemComponent}>
                                    <ListItemIcon >{index === 0 ? <Home className={classes.icon} /> :
                                        index === 1 ? <StoreMallDirectory className={classes.icon} /> :
                                            index === 2 ? <InsertInvitation className={classes.icon} /> :
                                                index === 3 ? <SupervisorAccount className={classes.icon} /> :
                                                    index === 4 ? <LocalDrink className={classes.icon} /> :
                                                        index === 5 ? <Assignment className={classes.icon} /> : <Build className={classes.icon} />
                                    }
                                    </ListItemIcon>
                                    <ListItemText disableTypography primary={<Typography style={{ fontSize: `20px`, color: "#262626" }}>{page}</Typography>} />
                                </div>

                                {index === 5 ?
                                    < SubItem isOpen={isOpen} /> : null
                                }
                            </ListItem>
                        ))
                    }
                </List>
            </div>
        </div>
    )
}

export default withStyles(styles)(SideBar)
