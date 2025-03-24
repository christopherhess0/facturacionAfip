import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import edificiosReducer from '../features/edificios/edificiosSlice';
import facturaReducer from '../features/facturas/facturaSlice';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['facturas', 'edificios']
};

const rootReducer = combineReducers({
    facturas: facturaReducer,
    edificios: edificiosReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
            },
        }),
});

export const persistor = persistStore(store);
