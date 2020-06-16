import React, { Component } from 'react';

import './to-do-form.css';

export default class ToDoForm extends Component{

    state = {
        input : ''
    }

    onAddTask = () =>{
        this.props.onAddItem(this.state.input);
        this.setState({
            input : ''
        })
        
    }
    
    onInputChange = (ev) =>{
       this.setState({
            input : ev.target.value
       });
    }

    render(){

        return(
            <div className="input-group mb-3">
                
            <input 
                type="text" 
                className="form-control " 
                placeholder="" 
                aria-label="" 
                onChange = { this.onInputChange }
                value = {this.state.input}
                />
            <div className="input-group-append">
                <button 
                    className="btn btn-outline-secondary" 
                    type="button" 
                    onClick= { this.onAddTask }>
                    Add
                </button>

            </div>
            </div>
        );
    }
}

