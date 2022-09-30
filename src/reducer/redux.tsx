import React from "react";
import {loginReducer} from "./login-reducer";
import {combineReducers, createStore} from "redux";



let rootReducers = combineReducers({
    usersPage: loginReducer,
});


type RootReducersType = typeof rootReducers
export type AppStateType = ReturnType<RootReducersType>;


let store = createStore(rootReducers)

// @ts-ignore
window.store = store

export default store