import React from 'react';

import './to-do-list-item.css';

function ToDoListItem(props){
    const{ isDone, isImportant, text,  onItemClick, id, onImportantClick, onDeleteItemClick} = props;
    let classN ='list-group-item ';
        classN += isDone ? ' done ':'';
        classN += isImportant ? ' important ' :'';
        return(
                
            <li className ={classN } >
                <button 
                    type="button" 
                    className = 'float-right btn btn-outline-danger p-1 ml-2'
                    onClick = {() => onDeleteItemClick(id)}>
                    <i className="far fa-trash"></i>
                </button> 
                <button 
                    type="button"  
                    className = 'float-right btn btn-outline-warning p-1'
                    onClick = {() => onImportantClick(id)}>
                    <i className="far fa-star"></i>
                </button>
                <span 
                    onClick={()=>onItemClick(id)}
                    className ="d-block"
                    >{text}</span>    
            </li>
            
           )
}

export default ToDoListItem