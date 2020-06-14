import React from 'react';

import './to-do-form.css';

function ToDoForm(props){
    const {onAddItem} = props;
    return(
        
        <div className="input-group mb-3">
            
        <input type="text" className="form-control " placeholder="" aria-label="" />
        <div className="input-group-append">
            <button 
                className="btn btn-outline-secondary" 
                type="button" 
                onClick= {onAddItem}>
                Add
            </button>

        </div>
        </div>
    );
}

export default ToDoForm