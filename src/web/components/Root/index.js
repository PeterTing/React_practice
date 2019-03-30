import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import App from '../App'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Login from '../Login'

const theme = createMuiTheme({
    backgroundColor: '#40B9D8',
    typography: {
        fontFamily: "Roboto, Noto Sans TC"
    },
    palette: {
        primary: {
            light: '#b4ffff',
            main: '#80deea',
            dark: '#4bacb8'
        }
    }
})

const Root = ({ store }) => {
    return(
    <MuiThemeProvider theme={theme}>
        <Provider store={store} >
            <Router>
                <Switch>
                    <Redirect exact from='/' to='/login'/>
                    <Route path="/login" component={Login} />
                    <Route path="/admin/" component={App} />
                </Switch>
            </Router>
        </Provider>
    </MuiThemeProvider>
)}

Root.propTypes = {
    store: PropTypes.object.isRequired
}

export default Root