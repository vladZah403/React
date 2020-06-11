import React from 'react';
import ToDoList from '../to-do-list';
import Statistic from '../statistic';
import ToDoForm from '../to-do-form';
import './app.css';


function App(){
    const todos = [
        {
            text: 'listen a new audio book',
            isDone: false,
            id: 1,
            isImportant: false
        },
        {
            text: 'Repair a car',
            isDone: true,
            id: 2,
            isImportant: false
        },
        {
            text: 'Have a lanch',
            isDone: false,
            id: 3,
            isImportant: true
        },
        {
            text: 'look a new film',
            isDone: true,
            id: 4,
            isImportant: false
        }
    ]

    const allTasks = todos.length;
    let doneTasks = todos.reduce((counter,{isDone}) => counter+=isDone? 1: 0, 0)
        
    
    return(
        <div className ="app">
            <Statistic 
            all ={allTasks} 
            done ={doneTasks} />
            <ToDoForm/>
            <ToDoList 
                data ={todos}
                />
        </div>    
    );
        
    }

export default App;