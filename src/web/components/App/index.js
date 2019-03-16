import React from 'react'
import { CssBaseline } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import Header from './SubComponent/Header'
import StyledDrawer from './SubComponent/StyledDrawer'

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
		<div className={classes.root}>
			<CssBaseline />
			<Header />
			<StyledDrawer />>
			<div className={classes.info}>
				jhi55
			</div>
		</div>
	)
}

export default withStyles(styles)(App)
