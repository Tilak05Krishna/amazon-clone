
import {combineReducers} from 'redux';
import basketReducer from './basketReducer';
import userReducer from './userReducer';

const allReducer = combineReducers({
    basket: basketReducer,
    user: userReducer,
});

export default allReducer;

