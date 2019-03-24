import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

const storeList = ["hihi", "byebye"]

const StoreSelector = (props) => {
    return (
        <div className={props.className} style={{background: '#f5f5f5'}}>
            <FormControl style={{width: '100%'}}>
                <InputLabel htmlFor="controlled-open-select">店鋪名稱</InputLabel>
                <Select
                    inputProps={{
                        name: 'store'
                    }}
                    style={{
                        height: '40px'
                    }}    
                >
                    {storeList.map((store, index) => <MenuItem key={index} value={store}>{store}</MenuItem>)}
                </Select>
            </FormControl>
        </div>
    )
}

export default StoreSelector