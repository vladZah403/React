import React, {Component} from 'react';
import ToDoList from '../to-do-list';
import Statistic from '../statistic';
import ToDoForm from '../to-do-form';
import './app.css';


export default class App extends Component{
    state = {
        maxId : 1,
        todos : []
    }

    db = null;
      
    constructor(props){
        super(props);
        this.dbFirstInit()
        this.dbRead();
    }

    stateInit(trans){
        trans.onsuccess = ev =>{
            const todos =ev.target.result;

            const maxId =todos.reduce((max, {id})=>{
                return max > id? max: id;
            }, 1);

            this.setState({ todos, maxId})
        }
    }

    dbRead(){
        this.dbOperation('read')
    }

    dbFirstInit(){
         const req = window.indexedDB.open('tasksBank', 1);
        req.onupgredeneeded = ev =>{
            const objStore = ev.terget.result.createObjectStore('tasks',{
                keyPath : "id"
            });

        }
    }

    dbAdd(item){
        this.dbOperation('create', item);
    }

    dbUpdate(item){
        this.dbOperation('update', item)
    }

    dbDelete(id){
        this.dbOperation('delete',id)
    }

    dbOperation(type, data){
        const req = window.indexedDB.open('tasksBank', 1);
        const accessType = type === 'read'? 'readonly': 'readwrite';

        req.onsuccess = () =>{
            const trans = req.result.transaction('tasks', accessType);
            const tasks = trans.objectStore('tasks');

            switch (type) {
                case "create":{
                    tasks.add(data);
                    break;
                }
                case "update":{
                    tasks.put(data);
                    break;
                }
                case "delete":{
                    tasks.delete(data);
                    break;
                }
                case "read":{
                    const transRead = tasks.getAll();
                    this.stateInit(transRead)
                    break;
                }
            }
        }
    }

    onItemClick= id =>{
        const todos2 = [...this.state.todos];
        todos2.forEach(el => {
            if(el.id === id){
                el.isDone = !el.isDone;
                
            }
                
            });
        this.setState({ todos : todos2 })
    }

    onImportantClick= id =>{
        const todos2 = [...this.state.todos];
        todos2.forEach(el => {
            if(el.id === id){
                el.isImportant = !el.isImportant
                ;
            }
        });
        this.setState({ todos : todos2 })
    }

    onAddItem = () =>{
        console.log('add item');
        const todos = [...this.state.todos];
        todos.unshift(this.genereteItem());
        this.setState({todos})
    }

    genereteItem(text = 'defult'){
        const id = this.state.maxId + 1;
        this.setState({maxId : id});
        return{
            id,
            text,
            isDone: false,
            isImportant: false
        }
    }

    onDeleteItemClick = id =>{
        const todos =[...this.state.todos].filter(el => el.id !== id);
        this.setState({todos})
    }
    
   

    render(){
    const allTasks = this.state.todos.length;
    let doneTasks = this.state.todos.reduce((counter,{isDone}) => counter+=isDone? 1: 0, 0)
        
    return(
        <div className ="app">
            <Statistic 
            all ={allTasks} 
            done ={doneTasks} />
            <ToDoForm
            onAddItem ={this.onAddItem}
            />
            
            <ToDoList 
                data ={this.state.todos}
                onItemClick = {this.onItemClick}
                onImportantClick ={ this.onImportantClick }
                onDeleteItemClick ={this.onDeleteItemClick}
                
                />
        </div>    
    );
        
    }
}
