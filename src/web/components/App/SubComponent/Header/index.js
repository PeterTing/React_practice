import React from 'react'
import { AppBar, IconButton, Typography} from '@material-ui/core'
import SearchField from '../SearchField'
import { MoreVert, AccountCircle, } from '@material-ui/icons'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    appBar: {
		marginLeft: drawerWidth,
		flexDirection: `row`,
		alignItems: `center`,
		backgroundColor: '#919191',
		height: `${appBarHeight}px`,
		[theme.breakpoints.up('xs')]: {
			width: `calc(100% - ${drawerWidth}px)`,
			transition: `0.2s`
		},
		[theme.breakpoints.down('xs')]: {
			width: `100%`,
			transition: `0.2s`
		},
    },
    grow: {
		flexGrow: 1
    },
    userInfo: {
		color: 'whiteSmoke',
    },
    iconButton: {
		color: 'whiteSmoke'
	},
})

const drawerWidth = 240
const appBarHeight = 64

const Header = (props) => {
    const { classes } = props

    return (
        <AppBar position="fixed" className={classes.appBar}>
				<SearchField />
				<div className={classes.grow} />

				<IconButton
					color="inherit"
					aria-label="Open drawer"
					className={classes.userInfo}
				>
					<AccountCircle />
				</IconButton>

				<Typography variant="subtitle2" noWrap className={classes.userInfo}>
					0905-519-292
				</Typography>

				<IconButton
					aria-label="Open drawer"
					className={classes.iconButton}
				>
					<MoreVert />
				</IconButton>
			</AppBar>
    )
}

export default withStyles(styles)(Header)