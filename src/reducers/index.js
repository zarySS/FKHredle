import { combineReducers } from 'redux';

// reducers:
import globalReducer from './global.reducer';

// rootReducer
export default combineReducers({
    global: globalReducer
});