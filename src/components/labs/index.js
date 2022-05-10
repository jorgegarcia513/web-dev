import React from 'react';

import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output";
import TodoItem from "./todo/todo-item";
import TodoList from "./todo/todo-list";

import {Link} from "react-router-dom";

const Labs = () => {
    return(
        <>
            <h1>Labs</h1>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
            <TodoList/>
        </>)
}

export default Labs;