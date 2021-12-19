
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk'
import { authReducer } from '../reducers/authReducer';
import { loadReducer } from '../reducers/loadReducer';

const composeEnhancers = (
        typeof window !== 'undefined' 
        && 
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
        || compose;

const reducers = combineReducers({
        auth: authReducer,
        load: loadReducer,
})


export const store = createStore(
        reducers,
        composeEnhancers(
                applyMiddleware(thunk)
        )
        )