import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

const styles = theme => ({
    formControl: {
        width: '100%'
    }
})

const storeList = ["hihi", "byebye"]

const StoreSelector = (props) => {
    const { classes } = props

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="controlled-open-select">店鋪名稱</InputLabel>
                <Select
                    inputProps={{
                        name: 'store'
                    }}    
                >
                    {storeList.map((store, index) => <MenuItem key={index} value={store}>{store}</MenuItem>)}
                </Select>
            </FormControl>
        </div>
    )
}

export default withStyles(styles)(StoreSelector)