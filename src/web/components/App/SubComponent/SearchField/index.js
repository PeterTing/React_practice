import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { InputBase } from '@material-ui/core'
import { SearchSharp } from '@material-ui/icons'

const styles = theme => ({
	search: {
		postion: 'relative',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: theme.palette.common.white,
		marginRight: theme.spacing.unit * 2,
		marginLeft: theme.spacing.unit * 5,
		width: `auto`,
		height: '51.19px',
	},
	searchIcon: {
		width: theme.spacing.unit * 5,
		justifyContent: 'flex-end'
	},
	inputRoot: {
		color: 'inherit',
		width: '428px'
	},
	inputInput: {
		paddingLeft: theme.spacing.unit,
		paddingTop: theme.spacing.unit,
		paddingRight: theme.spacing.unit,
		paddingBottom: theme.spacing.unit,
		transition: theme.transitions.create('width'),
		width: '100%',
		'&::placeholder': {
			fontSize: `15px`
		}
	},
})

const SearchField = (props) => {
	const { classes } = props

	return (
		<div className={classes.search}>
			<InputBase
				placeholder="在「店鋪」中搜尋"
				classes={{
					root: classes.inputRoot,
					input: classes.inputInput,
				}}
			/>
			<div className={classes.grow} />
			<div className={classes.searchIcon}>
				<SearchSharp style={{ color: "#919191", width: `60%`, height: `60%` }} />
			</div>
		</div>
	)
}

export default withStyles(styles)(SearchField)
