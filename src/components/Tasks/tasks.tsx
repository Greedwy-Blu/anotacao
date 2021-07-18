import React from 'react';
import  Task from './task';

function Tasks({tasks,  handleTaskClick}:any) {
    return (
        <div>
         {tasks.map((task:any) => (
         <Task task={task} handleTaskClick={handleTaskClick}/>
         ))}
        </div>
    );
}

export default Tasks;