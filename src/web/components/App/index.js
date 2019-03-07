import React from 'react'
import { Drawer, Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import {StoreMallDirectory} from '@material-ui/icons'
import TodoList from './TodoList'

const styles = theme => ({

})

const pages = ['首頁', '店鋪', '使用者', '容器', '配送', '中控台']
const drawerWidth = 240;

const App = (props) => {
	const { classes } = props;

	const drawer = (
		<div>
			<div className={classes.sideBar}>
				<Divider />
				<List>
					{
						['首頁', '店鋪', '使用者', '容器', '配送', '中控台'].map((page, index) => (
							<ListItem button key={page}>
								<ListItemIcon>{index % 6 === 1 ? <StoreMallDirectory /> : null}</ListItemIcon>
								<ListItemText primary={page} />
							</ListItem>
						))
					}
				</List>
			</div>
		</div>
	)

	return (
		<div style={{ height: `100%` }}>
			<TodoList />
		</div>
	)
}

export default withStyles(styles)(App)
