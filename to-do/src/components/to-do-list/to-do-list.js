import React from 'react';

import './to-do-list.css';
import ToDoListItem from '../to-do-list-item';

function ToDoList(props){
    const{data}= props;

    return (
        <ul className = "toDoList list-group list-group-flush">
            { data.map(({  isDone, text, id, isImportant }) =>(
                <ToDoListItem
                    key={id}
                    isDone={isDone}
                    isImportant={isImportant}
                    text={text}
                />
            ))}
        </ul>
    );
}

export default ToDoList;