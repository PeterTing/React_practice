import React from 'react'
import { FormControl, InputLabel, Select, MenuItem, withStyles } from '@material-ui/core';

const styles = (theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: '20px'
    },
    item: {
        flex: 'flex-grow',
        width: '100%',
        background: '#f5f5f5'
    },
    spacing: {
        width: '20px'
    }
})

const Item = (props) => {
    const { classes } = props
    return (
        <div className={ classes.container }>
            <FormControl className={ classes.item }>
                <InputLabel htmlFor="controlled-open-select">店鋪名稱</InputLabel>
                <Select
                    inputProps={{
                        name: 'store'
                    }}
                    style={{
                        height: '40px'
                    }}    
                >
                    {['12','2'].map((store, index) => <MenuItem key={index} value={store}>{store}</MenuItem>)}
                </Select>
            </FormControl>
            <div className={classes.spacing}/>
            <FormControl className={ classes.item }>
                <InputLabel htmlFor="controlled-open-select">店鋪名稱</InputLabel>
                <Select
                    inputProps={{
                        name: 'store'
                    }}
                    style={{
                        height: '40px'
                    }}    
                >
                    {['12','2'].map((store, index) => <MenuItem key={index} value={store}>{store}</MenuItem>)}
                </Select>
            </FormControl>
        </div>
    )
}

export default withStyles(styles)(Item)