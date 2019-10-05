// import React, {Component} from 'react';
import {combineReducers} from "redux";
import details from "./details";
import list from "./list";
import users from "./users";


let Reducers = combineReducers({
    list,
    details,
    users
});
export default Reducers;