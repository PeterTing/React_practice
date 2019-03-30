import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from '../App'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import LoginContainer from '../../containers/LoginContainer';

const theme = createMuiTheme({
    backgroundColor: '#40B9D8',
    typography: {
        // Use the system font.
        fontFamily:
            "Roboto, Noto Sans TC"
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
    const isLoggedIn = localStorage.auth === undefined
    return(
    <MuiThemeProvider theme={theme}>
        <Provider store={store} >
            <Router forceRefresh>
                <Switch>
                    <Route path="/Login" component={LoginContainer} />
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