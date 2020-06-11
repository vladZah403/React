import React from 'react';

import './to-do-list-item.css';

function ToDoListItem(props){
    const{ isDone, isImportant, text } = props;
    let classN ='list-group-item ';
        classN += isDone ? 'done':'';
        classN += isImportant ? 'important' :'';

        return(
            <li className ={classN } >
                {text}
                <button type="button" className = 'float-right btn btn-outline-danger p-1 ml-2'>
                    <i className="far fa-trash"></i>
                </button>
                <button type="button"  className = 'float-right btn btn-outline-warning p-1'>
                    <i class="far fa-star"></i>
                </button>
                
            </li>)
};

export default ToDoListItem