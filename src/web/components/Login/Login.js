import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Typography, FormControlLabel, Button, Checkbox, } from '@material-ui/core';
import StyledInput from './StyledInput'

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
        padding: `5px`
    },
    cssLabel: {
        color: `whiteSmoke`,
        fontWeight: "normal",
        fontSize: `1em`,
        letterSpacing: `3px`
    }
})

const Login = (props) => {
    const { classes, login, setPhone, setPassword } = props
    const { phone, password, history } = props
    
    return (
        <div className={classes.root}>
            <img className={classes.img} src={require('../../../../public/img/logo.png')} alt="logo"></img>
            <div className={classes.header}>
                <Typography className={classes.title}>管　理　系　統</Typography>
            </div>
            <div className={classes.form}>
                <form className={classes.container} noValidate>
                    <StyledInput type="tel" autoComplete="tel" required={true} value={phone} onValueChange={setPhone}>請輸入手機號碼</StyledInput>
                    <StyledInput type="password" autoComplete="current-password" value={password} onValueChange={setPassword}>請輸入密碼</StyledInput>

                    <FormControlLabel
                        control={<Checkbox value="Remember me" color="primary" style={{
                            color: "whiteSmoke"
                        }} />}
                        label="記住我"
                        classes={{
                            label: classes.cssLabel
                        }}
                    />
                    <Button
                        onClick={()=>login(phone, password, history)}
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        style={{
                            marginTop: '10px'
                        }}
                        classes={{
                            label: classes.cssLabel
                        }}
                    >
                        登入
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default withStyles(styles)(Login)