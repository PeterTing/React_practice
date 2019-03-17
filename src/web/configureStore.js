import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'

import monitorReducersEnhancer from './enhancers/monitorReducer.js'
import loggerMiddleware from './middleware/logger'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore() {
    const middlewares = [loggerMiddleware, thunkMiddleware]
    const middlewareEnhancer = applyMiddleware(...middlewares)

    const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
    const composedEnhancers = process.env.NODE_ENV === 'development' ?
                                composeWithDevTools(...enhancers) : 
                                compose(...enhancers)

    const store = createStore(rootReducer, composedEnhancers)
    return store
}