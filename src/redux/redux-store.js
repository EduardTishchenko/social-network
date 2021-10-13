import {combineReducers, createStore } from "redux";
import profileReduser from "./propfile-reducer";
import dialogsReduser from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer ";
import usersReducer from "./users-reducer copy";

let reducers = combineReducers ({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
    sidebar: sidebarReducer,
    usersPage: usersReducer
});


let store = createStore (reducers);


export default store;