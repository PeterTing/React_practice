import React from 'react'
import { List, ListItem, ListItemIcon, ListItemText, CssBaseline, Typography, Collapse } from '@material-ui/core'
import { StoreMallDirectory, SupervisorAccount, InsertInvitation, LocalDrink, Assignment, Home, Build, StarBorder } from '@material-ui/icons'
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import { PAGE } from '../../../../actions/types';
import SubItem from './SubItem'

const styles = theme => ({
    toolbar: {
        maxWidth: `240px`
    },
    img: {
        width: `240px`,
        height: `${imgHeight}px`,
        backgroundColor: "#40B9D8"
    },
    item: {
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    itemComponent: {
        display: "flex",
    }
})
const pages = ['首頁', '店鋪', '活動', '使用者', '容器', '代辦清單', '中控台']
const pagesInEnglish = [PAGE.HOME, PAGE.STORE, PAGE.ACTIVITY, PAGE.USER, PAGE.CONTAINER, PAGE.TODOLIST, PAGE.CONSOLE]
const imgHeight = 120


const SideBar = (props) => {
    const { classes, onClick, isOpen } = props

    return (
        <div>
            <CssBaseline />
            <div className={classes.toolbar}>
                <div className={classes.img}>
                    <img src={require('../../../../../../public/img/mini_logo.svg')} alt="logo"></img>
                </div>
                <List component="div">
                    {
                        pages.map((page, index) => (
                            <ListItem button component={Link} to={`/${pagesInEnglish[index]}`} onClick={() => onClick(pagesInEnglish[index])(isOpen)} key={page} className={classes.item}>
                                <div className={classes.itemComponent}>
                                    <ListItemIcon>{index === 0 ? <Home /> :
                                        index === 1 ? <StoreMallDirectory /> :
                                            index === 2 ? <InsertInvitation /> :
                                                index === 3 ? <SupervisorAccount /> :
                                                    index === 4 ? <LocalDrink /> :
                                                        index === 5 ? <Assignment /> : <Build />
                                    }
                                    </ListItemIcon>
                                    <ListItemText inset primary={page} />
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
