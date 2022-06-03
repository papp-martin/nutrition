import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import directoryReducer from './directory/directory.reducer';
import nutritionsReducer from './nutritions/nutritions.reducer';
import userReducer from './user/user.reducer';
import summationReducer from './summation/summation.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['summation']
}

const rootReducer = combineReducers({
    user: userReducer,
    directory: directoryReducer,
    nutritions: nutritionsReducer,
    summation: summationReducer
});

export default persistReducer(persistConfig, rootReducer);