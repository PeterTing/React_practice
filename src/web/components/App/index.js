import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import { Drawer, CssBaseline, Hidden } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import SideBarContainer from '../../containers/SideBarContainer'
import Header from './SubComponent/Header'
import { router } from './router'

import API from '../../api'

const styles = theme => ({
	root: {
		display: 'flex',
		height: `100%`,
		width: `100%`,
		minWidth: `548px`,
		backgroundColor: "#F7F7F7",
		padding: 0
	},
	drawer: {
		[theme.breakpoints.up('sm')]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	info: {
		width: `calc(100% - ${drawerWidth}px)`,
		height: `calc(100% - ${appBarHeight}px)`,
		marginTop: `${appBarHeight}px`,
	}
})


const drawerWidth = 240
const appBarHeight = 64

API.login('0933356403', '')
	.then((response) => 
		response.roles.admin ?
			response.roles.admin :
			Promise.reject(new Error('unauthorized'))
	)
	.then(admin => {
		localStorage.auth = JSON.stringify(admin)
	})
	.then(API.getContainerList)
	.then(list => {
		const containers = JSON.stringify({
			dict: list.containerDict,
			type: list.containerType
		})
		localStorage.containers = containers
	})
	.then(API.getStoreList)
	.then(list => 
		list['shop_data']
			.filter(store=>store.contract.borrowable)
			.map(store=>({id: store.id, name: store.name}))
	)
	.then(list => {
		localStorage.stores = JSON.stringify(list)
	})
	.catch((err) => {
		switch (err.message) {
			case 'unauthorized':
				alert('沒有權限登入後台')
			default:
				alert(err)
		}
	})

const App = (props) => {
	const { classes } = props
	
	return (
		<Router>
			<div className={classes.root}>
				<CssBaseline />
				<Header />
				<nav className={classes.drawer}>
					<Hidden xsDown implementation="css">
						<Drawer
							variant="permanent"
							open
						>
							<SideBarContainer />
						</Drawer>
					</Hidden>
					{/* <TodoList /> */}
				</nav>
				<div className={classes.info}>
					<Switch>
						{router.map((route, index) => (
							[route, ...(route.children ? route.children : [])].map((item, i) => (
								<Route key={index+0.1*i} exact path={item.path} component={item.component} />
							))
						))}
					</Switch>
				</div>
			</div>
		</Router>
	)
}

export default withStyles(styles)(App)
