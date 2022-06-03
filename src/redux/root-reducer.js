import { combineReducers } from 'redux';
import directoryReducer from './directory/directory.reducer';
import nutritionsReducer from './nutritions/nutritions.reducer';
import userReducer from './user/user.reducer';
import summationReducer from './summation/summation.reducer';

const rootReducer = combineReducers({
    user: userReducer,
    directory: directoryReducer,
    nutritions: nutritionsReducer,
    summation: summationReducer
});

export default rootReducer;