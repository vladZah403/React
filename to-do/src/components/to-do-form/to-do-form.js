import React from 'react';

import './to-do-form.css';

function ToDoForm(){
    return(
        <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="" aria-label="" />
        <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button" id="button-addon2">Add</button>
        </div>
        </div>
    );
}

export default ToDoForm