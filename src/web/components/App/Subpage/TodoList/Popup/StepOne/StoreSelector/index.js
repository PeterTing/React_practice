import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

const StoreSelector = (props) => {
    const { storeOnChange, storeId, storeList } = props 
    return (
        <div className={props.className} style={{background: '#f5f5f5'}}>
            <FormControl style={{width: '100%'}}>
                <InputLabel htmlFor="controlled-open-select">店鋪名稱</InputLabel>
                <Select
                    value={storeId}
                    onChange={ (e) =>
                        storeOnChange(e.target.value)
                    }
                    inputProps={{
                        name: 'store'
                    }}
                    style={{
                        height: '40px'
                    }}    
                >
                    {storeList.map(({id, name}, index) => <MenuItem key={index} value={id}>{name}</MenuItem>)}
                </Select>
            </FormControl>
        </div>
    )
}

export default StoreSelector