import { combineReducers } from 'redux';
import directoryReducer from './directory/directory.reducer';
import nutritionsReducer from './nutritions/nutritions.reducer';

const rootReducer = combineReducers({
    directory: directoryReducer,
    nutritions: nutritionsReducer
});

export default rootReducer;