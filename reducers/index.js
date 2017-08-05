import { combineReducers } from 'redux';

import LocalAuthReducer from './LocalAuthReducer';

export default combineReducers({
    auth: LocalAuthReducer
});