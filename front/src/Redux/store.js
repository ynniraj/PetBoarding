import { createStore, combineReducers, applyMiddleware } from 'redux';
import { getDataReducer } from '../Redux/DataApi/reducer';
import { LogInReducer, adminReducer, userImageReducer } from '../Redux/Login/reducer';
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";



const middleware = [thunk];

const rootReducer = combineReducers({
    getDataReducer,
    LogInReducer,
    adminReducer,
    userImageReducer
})

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);