import React from 'react';

import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output";
import TodoList from "./todo/todo-list";
import ReduxExamples from "./redux-examples";


const Labs = () => {
    return(
        <>
            <h1>Labs</h1>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
            <TodoList/>
            <ReduxExamples/>
        </>)
}

export default Labs;