import React from 'react'
import { List, ListItem, ListItemIcon, ListItemText, CssBaseline, Typography, } from '@material-ui/core'
import { StoreMallDirectory, SupervisorAccount, InsertInvitation, LocalDrink, LocalShipping, Home, Build } from '@material-ui/icons'
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import { PAGE } from '../../../../actions/type';
import { router } from '../../router';

const styles = theme => ({
    toolbar: theme.mixins.toolbar,
    img: {
        width: `auto`,
        height: `${imgHeight}px`,
        backgroundColor: "#40B9D8"
    }
})

const imgHeight = 120

class SideBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {items: router.map((route) => ({...route, isOpen: false}))}
        this.selectItem = this.selectItem.bind(this)
        this.onSelectItem = props.onClick
    }

    selectItem(item) {
        if (item.isOpen) {
            this.setState({ 
                ...this.state,
                items: this.state.items.map((route) => (
                    route === item ?
                        {...item, isOpen: false} :
                        route
            ))})
        } else if (item.children) {
            this.setState({
                ...this.state, 
                items: this.state.items.map((route) => (
                    route === item ?
                        {...item, isOpen: true} :
                        route
            ))})
        } else {
            this.onSelectItem(item.key)
        }
    }

    render() {
        const { classes, selectedPage } = this.props
        const { items } = this.state
        
        return (
            <div>
                <CssBaseline />
                <div className={classes.toolbar}>
                    <div className={classes.img}>
                        <img src={require('../../../../../../public/img/mini_logo.svg')} alt="logo"></img>
                    </div>
                    <List>
                        {
                            items.map((item) => (
                                <div>
                                    <ListItem button component={item.children ? 'div' : Link} to={item.path} onClick={() => this.selectItem(item)} selected={selectedPage === item.key} key={item.key}>
                                        <ListItemIcon>{
                                            item.icon
                                        }
                                        </ListItemIcon>
                                        <ListItemText disableTypography primary={<Typography type="body2" variant='subtitle2' style={{ color: '#262626' }}>{item.title}</Typography>} />
                                    </ListItem>
                                    {
                                        (item.children && item.isOpen ? item.children : []).map((child) => (
                                            <ListItem button component={Link} to={child.path} onClick={() => this.selectItem(child)} selected={selectedPage === child.key} key={child.key}>
                                                <ListItemText disableTypography primary={<Typography type="body2" variant='subtitle1' style={{ color: '#262626', paddingLeft: '6em', fontSize: '0.75rem' }}>{child.title}</Typography>}/>
                                            </ListItem>
                                        ))
                                    }
                                </div>
                            ))
                        }
                    </List>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(SideBar)
