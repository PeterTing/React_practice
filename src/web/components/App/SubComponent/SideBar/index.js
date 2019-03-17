import React from 'react'
import { List, ListItem, ListItemIcon, ListItemText, CssBaseline, Typography, } from '@material-ui/core'
import { StoreMallDirectory, SupervisorAccount, InsertInvitation, LocalDrink, LocalShipping, Home, Build } from '@material-ui/icons'
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import { PAGE } from '../../../../actions/type';

const styles = theme => ({
    toolbar: theme.mixins.toolbar,
    img: {
        width: `auto`,
        height: `${imgHeight}px`,
        backgroundColor: "#40B9D8"
    }
})
const pages = ['首頁', '店鋪', '活動', '使用者', '容器', '代辦清單', '中控台']
const pagesInEnglist = [PAGE.HOME, PAGE.STORE, PAGE.ACTIVITY, PAGE.USER, PAGE.CONTAINER, PAGE.TODOLIST, PAGE.CONSOLE]
const imgHeight = 120


const SideBar = (props) => {
    const { classes, onClick, selectedPage } = props

    return (
        <div>
            <CssBaseline />
            <div className={classes.toolbar}>
                <div className={classes.img}>
                    <img src={require('../../../../../../public/img/mini_logo.svg')} alt="logo"></img>
                </div>
                <List>
                    {
                        pages.map((page, index) => (
                            <ListItem button component={Link} to={`/${pagesInEnglist[index]}`} onClick={() => onClick(page)} selected={selectedPage === page} key={page}>
                                <ListItemIcon>{index % 6 === 0 ? <Home /> :
                                    index % 6 === 1 ? <StoreMallDirectory /> :
                                        index % 6 === 2 ? <InsertInvitation /> :
                                            index % 6 === 3 ? <SupervisorAccount /> :
                                                index % 6 === 4 ? <LocalDrink /> :
                                                    index % 6 === 5 ? <LocalShipping /> : <Build />
                                }
                                </ListItemIcon>
                                <ListItemText disableTypography primary={<Typography type="body2" style={{ color: '#262626' }}>{page}</Typography>} />
                            </ListItem>
                        ))
                    }
                </List>
            </div>
        </div>
    )
}

export default withStyles(styles)(SideBar)
