import { configureStore } from '@reduxjs/toolkit'
import products_reducer from '../product/productSlice'
import auth_reducer from '../Auth/authSlice'
import { persistReducer, persistStore } from 'redux-persist'
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}
//const persistedReducer = persistReducer(persistConfig, auth_reducer)

export const store = configureStore({
  reducer: { products: persistReducer(persistConfig,products_reducer), auth: persistReducer(persistConfig,auth_reducer) },
  middleware: [thunk],
})

export const persistor = persistStore(store)