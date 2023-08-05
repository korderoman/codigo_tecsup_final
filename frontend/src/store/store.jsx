import {configureStore} from "@reduxjs/toolkit";
import authReducers from './features/auth/auth.slice.jsx';
const store = configureStore({
    reducer:{
        auth:authReducers
    }
});

export  default store;
