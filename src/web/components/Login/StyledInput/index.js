import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Input, FormControl, InputLabel } from '@material-ui/core';

const styles = theme => ({
    input: {
    },
    inputLabel: {
        fontSize: `1.3em`,
        color: `whitesmoke`,
        letterSpacing: `3px`,
        // margin: `5px 0 0 0`,
        fontWeight: `normal`
    },
    cssLabel: {
        '&$cssFocused': {
            color: `whiteSmoke`,
            fontSize: `1.3em`,
        },
        fontWeight: `lighter`
    },
    cssFocused: {}
})


const StyleInput = withStyles({
    root: {
        letterSpacing: `3px`,
        fontSize: `1.3em`,
        fontWeight: `lighter`,
        color: `whiteSmoke`,
    },
    underline: {
        '&:before': {
            borderBottomColor: `whiteSmoke`,
        },
        '&:after': {
            borderBottomColor: `whiteSmoke`,
        },
        '&:hover': {
            borderBottomColor: `whiteSmoke`,
        }
    },
    input: {
        letterSpacing: `3px`
    }
})(Input);

const StyledInput = ({ classes, type, required = false, pattern = "", autoComplete, children, value, onValueChange }) => {
    return (
        <FormControl margin="normal" required fullWidth>
            <InputLabel className={classes.inputLabel} htmlFor={type} required={required} classes={{
                root: classes.cssLabel,
                focused: classes.cssFocused,
            }}>{children}</InputLabel>
            <StyleInput className={classes.input} id={type} name={type} autoComplete={autoComplete} pattern={pattern} value={value} onChange={(e)=>onValueChange(e.target.value)}/>
        </FormControl>
    )
}

export default withStyles(styles)(StyledInput)