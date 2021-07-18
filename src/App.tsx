import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import "./components/style.css";
import AddTask from './components/Tasks/AddTask';
import  Tasks from './components/Tasks/tasks';

function App() {
 const [tasks,setTasks] = useState(
   [
     {
    id: "1",
    title: 'Estudar programação',
    completed: false,
 },
 {
  id: "2",
  title: 'Ler livros',
  completed: true,
 }
]
);

function  handleTaskClick(taskId:any){
  const newTasks = tasks.map(task =>{
if(task.id === taskId) return {...task, completed: !task.completed}
return task;
  });

  setTasks(newTasks);
};



function handleTaskAddition(taskTitle:any){
const newTasks = [
  ...tasks, {
  title: taskTitle,
  id: uuidv4(),
  completed: true,

},

];
setTasks(newTasks);
};


  return (
  
  <div>

  <div className="container"> 
   
  <AddTask  handleTaskAddition={handleTaskAddition} />
  <Tasks tasks={tasks} handleTaskClick={handleTaskClick}/>

  </div>
 

  </div>
  );
}

export default App;
