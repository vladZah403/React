import React from 'react';

import './to-do-list.css';
import ToDoListItem from '../to-do-list-item';

function ToDoList(props){
    const{data, onItemClick, onImportantClick, onDeleteItemClick,  }= props;

    return (
        <ul className = "toDoList list-group list-group-flush ">
            { data.map(({  isDone, text, id, isImportant, isModal }) =>(
                <ToDoListItem
                    key={id}
                    isDone={isDone}
                    isImportant={isImportant}
                    text={text}
                    onItemClick = {onItemClick}
                    onImportantClick ={onImportantClick}
                    id = {id}
                    onDeleteItemClick ={onDeleteItemClick}
                />
            ))}
        </ul>
    );
}

export default ToDoList;