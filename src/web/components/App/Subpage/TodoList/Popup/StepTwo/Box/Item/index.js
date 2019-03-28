import React from 'react'
import { FormControl, InputLabel, TextField, Select, MenuItem, withStyles } from '@material-ui/core';

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
    const { boxId, classes, containers, item, selectContainerType, selectContainerAmount } = props
    const { id, containerType, amount } = item
    return (
        <div className={ classes.container }>
            <FormControl className={ classes.item }>
                <InputLabel htmlFor="controlled-open-select" style={{
                    paddingTop: '8px',
                    marginBottom: '8px'
                }}>品項名稱</InputLabel>
                <Select
                    onChange={e=>selectContainerType(boxId, id, e.target.value)}
                    value={containerType}
                    style={{
                        height: '100%',
                        margin: '8px 0 7px 0',
                    }}    
                >
                    {containers.map(({name}, index) => <MenuItem key={index} value={name}>{name}</MenuItem>)}
                </Select>
            </FormControl>
            <div className={classes.spacing}/>
            <FormControl className={ classes.item }>
                <TextField
                    onChange={e=>selectContainerAmount(boxId, id, e.target.value)}
                    value={Number(amount)}
                    type='number'
                    inputProps={{
                        style:{
                            height: '100%'
                        }
                    }}
                    style={{
                        margin: '8px 0 7px 0',
                        height: '100%'
                    }}  
                    label='品項數量'
                    id="standard-bare"
                    defaultValue="Bare"
                    margin='dense'
                />
            </FormControl>
        </div>
    )
}

export default withStyles(styles)(Item)