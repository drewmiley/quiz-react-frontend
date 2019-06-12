import anonReducer from '../../redux-anon-reducer';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import actionmap from './actionmap';
import initialState from './initialState';

const reducer = anonReducer(actionmap);

const persistConfig = { key: 'root', storage };
const persistedReducer = persistReducer(persistConfig, reducer);

export default () => {
    const store = createStore(persistedReducer, initialState, applyMiddleware(thunk));
    const persistor = persistStore(store);
    return { store, persistor };
}
