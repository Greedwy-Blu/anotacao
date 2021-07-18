import React from 'react';
import './task.css';

function task({task,  handleTaskClick}:any) {
    return (

  <div className="task-container" style={task.completed ? {borderLeft: "6px solid  chartreuse"} : {} }>
           <div className="task-title" onClick={() =>handleTaskClick(task.id)}>
              
            {task.title}
               </div>
        </div>
    );
}

export default task;