import { combineReducers } from 'redux';
import directoryReducer from './directory/directory.reducer';
import nutritionsReducer from './nutritions/nutritions.reducer';
import userReducer from './user/user.reducer';

const rootReducer = combineReducers({
    user: userReducer,
    directory: directoryReducer,
    nutritions: nutritionsReducer
});

export default rootReducer;