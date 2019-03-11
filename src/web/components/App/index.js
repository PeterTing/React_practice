import React from 'react'
import { Drawer, CssBaseline, Hidden } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import SideBarAction from '../../containers/SideBarAction'
import Header from './SubComponent/Header'
import Home from './Subpage/Home'
import Container from './Subpage/Container'
import Store from './Subpage/Store'
import TodoList from './Subpage/TodoList'
import User from './Subpage/User'
import Console from './Subpage/Console'
import Activity from './Subpage/Activity'

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

const HomePage = () => (
	<div>
		Home
	</div>
)

const About = () => (
	<div>
		About
	</div>
)

const App = (props) => {
	const { classes } = props;

	return (
		/* <Router> */
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
				{/* <TodoList />
				
				<Link to="/path">PageName</Link>
				.....
				.....
				
				*/}
			</nav>
			<div className={classes.info}>
				{/* render different page based on side bar 
				
				<Route
					path='path'
					exact={isCurrentSection}
					component={<Page></Page>}
				/>
				.....
				.....

				*/}
				<Home />
			</div>
		</div>
		/* </Router>
	)
}

export default withStyles(styles)(App)
