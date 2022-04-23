import { createStore, combineReducers } from 'redux';
import { getDataReducer } from '../Redux/DataApi/reducer';
import { LogInReducer, adminReducer,userImageReducer } from '../Redux/Login/reducer';

const rootReducer = combineReducers({
    getDataReducer,
    LogInReducer,
    adminReducer,
    userImageReducer
})

export const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())