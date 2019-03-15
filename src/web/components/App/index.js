import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import { Drawer, CssBaseline, Hidden } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import SideBarAction from '../../containers/SideBarAction'
import Header from './SubComponent/Header'
import { router } from './router'

const styles = theme => ({
	root: {
		display: 'flex',
		height: `100%`,
		width: `100%`,
		minWidth: `548px`,
		backgroundColor: "#F7F7F7",
		padding: 0
	},
	right_block: {
		width: `calc(100% - ${drawerWidth}px)`,
		height: `100%`,
		[theme.breakpoints.up('sm')]: {
			width: `calc(100% - ${drawerWidth}px)`,
			transition: `0.2s`
		},
		[theme.breakpoints.down('sm')]: {
			width: `100%`,
			transition: `0.2s`
		},
	},
	header: {
		display: 'flex',
		flexDirection: 'row',
		height: `${appBarHeight}px`,
		width: `100%`
	},
	drawer: {
		height: `100%`,
		[theme.breakpoints.up('sm')]: {
			width: `${drawerWidth}px`,
			flexShrink: 0,
		},
		[theme.breakpoints.down('sm')]: {
			width: `0px`,
			transition: `0.2s`
		},
	},
	drawerPaper: {
		width: `${drawerWidth}px`
	},
	info: {
		position: 'relative',
		width: `100%`,
		height: `calc(100% - ${appBarHeight}px)`,
		top: `${appBarHeight}px`,
		paddingBottom: '50px'
	}
})


const drawerWidth = 440
const appBarHeight = 120

const App = (props) => {
	const { classes } = props;

	return (
		<Router>
			<div className={classes.root}>
				<CssBaseline />
				<nav className={classes.drawer}>
					<Hidden smDown implementation="css">
						<Drawer
							variant="permanent"
							open
						>
							<SideBarAction />
						</Drawer>
					</Hidden>
					{/* <TodoList /> */}
				</nav>
				<div className={classes.right_block}>
					<Header />
					<div className={classes.info}>
						<Switch>
							{router.map((route, index) => <Route key={index} exact path={route.path} component={route.component} />)}
						</Switch>
					</div>
				</div>
			</div>
		</Router>
	)
}

export default withStyles(styles)(App)
