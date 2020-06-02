import React from 'react';

import './app.css';

const todoStyle = {
    fontFamily: 'Arial',
    listStyleType: 'none',
    fontSize: '18pt'
}
function App(){
    const todos = [
        {
            text: 'listen a new audio book',
            isDone: false
        },
        {
            text: 'Repair a car',
            isDone: true
        },
        {
            text: 'Have a lanch',
            isDone: false
        },
        {
            text: 'look a new film',
            isDone: true
        }
    ]

    
    return(
        <div>
            <ul style ={ todoStyle }>
                <li className={ todos[0].isDone ? 'done' : null }>{ todos[0].text}</li>
                <li className={ todos[1].isDone ? 'done' : null }>{ todos[1].text}</li>
                <li className={ todos[2].isDone ? 'done' : null }>{ todos[2].text}</li>
                <li className={ todos[3].isDone ? 'done' : null }>{ todos[3].text}</li>
            </ul>
            <p>{todos.length}</p>
        </div>    
    );
        
}

export default App;