import { createStore, combineReducers } from 'redux';
import { getDataReducer } from '../Redux/DataApi/reducer';
import { LogInReducer } from '../Redux/Login/reducer';

const rootReducer = combineReducers({
    getDataReducer,
    LogInReducer
})

export const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())