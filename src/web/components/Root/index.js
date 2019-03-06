import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from '../App'
import { createStyled } from '@material-ui/core/styles'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
    backgroundColor: '#40B9D8',
    typography: {
        // Use the system font.
        fontFamily:
            "Roboto, Noto Sans TC"
    }
})

const Root = ({ store }) => (
    <MuiThemeProvider theme={theme}>
        <Provider store={store}>
            <Router>
                <Route path="/" component={App} />
            </Router>
        </Provider>
    </MuiThemeProvider>
)

Root.prototype = {
    store: PropTypes.object.isRequired
}

export default Root