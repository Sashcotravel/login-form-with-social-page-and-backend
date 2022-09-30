import React from "react";
import {userType} from "../components/navbar/Navbar";

let initialState = {
    user: null as userType | null
}

type InferActionsType<T> = T extends { [key: string]: (...arg: any[]) => infer U } ? U : never
type InitialState = typeof initialState
type ActionsType = InferActionsType<typeof actions>


export const loginReducer = (state = initialState, action: ActionsType): InitialState => {
    switch (action.type){
        case "ADD_USER":
            return {...state, user: action.user}
        default: return state
    }
}

export const actions = {
    addUser: (user: userType) => ({type: 'ADD_USER', user} as const)
}