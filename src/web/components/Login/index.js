import React from 'react'
import PropTypes from 'prop-types'
// import './style.scss'
import { withStyles } from '@material-ui/core/styles';
import { Typography, TextField, FormControl, InputLabel, Input, FormControlLabel, Button, Checkbox, Paper } from '@material-ui/core';

const styles = theme => ({
    root: {
        backgroundColor: theme.backgroundColor,
        width: `70vw`,
        height: `100%`,
        maxWidth: `400px`,
        margin: `0 auto`,
    },
    header: {
        padding: `0`,
        borderBottom: `5px solid #FFCD14`
    },
    title: {
        width: `100%`,
        padding: `0`,
        margin: `1vh 0 2.5vh 0`,
        color: `whitesmoke`,
        fontWeight: `normal`,
        fontSize: `2em`,
        textAlign: `center`,
        lineHeight: `1`
    },
    img: {
        width: `80%`,
        margin: `0 10%`
    },
    container: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `20px`
    },
    input: {
        width: `calc(100% - 40px)`,
        height: `3vh`,
        padding: `20px`,
        fontSize: `1.3em`,
        borderWidth: `0 0 1px 0`,

        borderRadius: `0`,
        color: `whitesmoke`,
        letterSpacing: `3px`,
        '&::placeholder': `rgb(235, 235, 235)`
    }
})

const StyledInput = withStyles({
    root: {
        backgroundColor: `rgba(0, 0, 0, 0)`,
        underLineColor: `rgba(0, 0, 0, 0)`,
        borderRadius: 0,
        borderWidth: `0 0 1px 0`,
        letterSpacing: `3px`,
        color: 'whitesmoke',
        height: `3vh`,
        padding: '20px'
    }
})(Input);

// const inputProps = {
//     width: `calc(100% - 40px)`,
//     height: `3vh`,
//     verticalAlign: `-webkit-baseline-middle`,
//     padding: `20px`,
//     fontSize: `1.3em`,
//     borderWidth: `0 0 1px 0`,
//     borderColor: `whitesmoke`,
//     backgroundColor: `rgba(0, 0, 0, 0)`,
//     borderRadius: `0`,
//     color: `whitesmoke`,
//     letterSpacing: `3px`,
//     '&::placeholder': `rgb(235, 235, 235)`
// }

const Login = (props) => {
    const { classes } = props

    return (
        <div className={classes.root}>
            <img className={classes.img} src={require('../../../../public/img/logo.png')} alt="logo"></img>
            <div className={classes.header}>
                <Typography className={classes.title}>管　理　系　統</Typography>
            </div>
            <div className={classes.form}>
                <form className={classes.container} noValidate>
                    {/* <div>
                    <input type="tel" id="user" name="user" placeholder="請輸入手機號碼" pattern="^09[0-9]{8}" required></input>
                </div>
                <div>
                    <input type="password" id="pass" name="pass" placeholder="請輸入密碼"></input>
                </div>
                <div>
                    <input type="submit" id="submit" value="登入"></input>
                </div> */}
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="email" hidden>tel</InputLabel>
                        <StyledInput className={classes.input} id="email" name="email" autoComplete="tel" placeholder="請輸入手機號碼" required />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="password" hidden>Password</InputLabel>
                        <StyledInput className={classes.input} name="password" type="password" id="password" autoComplete="current-password" placeholder="請輸入密碼" />
                    </FormControl>
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign in
                    </Button>
                </form>
            </div>

        </div>
    )
}

export default withStyles(styles)(Login)