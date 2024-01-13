import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { setupListeners } from '@reduxjs/toolkit/query';
import { api } from '../api';
import { createWrapper } from 'next-redux-wrapper';
import { moviesApi } from '../endPoint/movies';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['data'],
};

const middleware = [
    moviesApi.middleware
]

const makeStore = () => {
    const reducers = combineReducers({
        [api.reducerPath]: api.reducer,
        [moviesApi.reducerPath]: moviesApi.reducer
    })

    const persistedReducer = persistReducer(persistConfig, reducers);

    const store = configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: false,
            }).concat(...middleware)
    })


    setupListeners(store.dispatch);

    return store;
}
const store = makeStore();
export const wrapper = createWrapper<AppStore>(makeStore);
export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
export const persistor = persistStore(store);
