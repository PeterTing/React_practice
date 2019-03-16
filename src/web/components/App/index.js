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

const App = (props) => {
	const { classes } = props;

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
							<SideBarAction />
						</Drawer>
					</Hidden>
					{/* <TodoList /> */}
				</nav>
				<div className={classes.info}>
					<Switch>
						{router.map((route, index) => <Route key={index} exact path={route.path} component={route.component} />)}
					</Switch>
				</div>
			</div>
		</Router>
	)
}

export default withStyles(styles)(App)
