import React,  {useState} from 'react';
import './AddTask.css';
import Button from './Button';

function AddTask({handleTaskAddition}:any) {



    const [inputData, setInputData] = useState('')

    
function handleInputChange(e:any){
    setInputData(e.target.value);
};

function  handleTaskClick(){
    handleTaskAddition(inputData);
    setInputData("");
}
    return (
        <div className="add-task-container">
            <input onChange={handleInputChange} value={inputData} className="add-task-input" type="text" />
          
          <div className="add-task-button-container">

          <Button onClick={handleTaskClick}>Adicionar</Button>
          </div>
           
        </div>
    );
}

export default AddTask;