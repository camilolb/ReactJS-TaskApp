import React, { useState } from 'react';
import axios from 'axios';
import {TaskRow} from './components/task/TaskRow';
import {TaskBanner} from './components/task/TaskBanner';
import TaskForm from './components/task/TaskForm';

function App() {

 

  const [userName, setUserName] = useState('Cristian');
  const [listPersons, setListPeron] = useState([]);

  const [taskItems, setTaskItems] = useState(
    [
      { name: 'Trapear toda la casa xD', done: false },
      { name: 'Tomar pola y ver series', done: false },
      { name: 'No hacer nichi', done: true },
      { name: 'Mamar ron', done: false }
    ]
  );

  const toggleTaskChange  = task =>
    setTaskItems(taskItems.map(t => (t.name === task.name ? {...t, done: !t.done} : t)));
    

  const taskTableRow = () => {
    return taskItems.map(
      tasks => (
        <TaskRow task={tasks} key={tasks.name} toggleTask={toggleTaskChange} />
      )
    )
  }

  const addTask = (title, description) =>{
   
    const newTask = {
      name: title,
      description: description,
      id: 45
    }

    //setTaskItems([...taskItems, newTask]);
    setTaskItems(taskItems => ([...taskItems, newTask])) 

    console.log(newTask);
    
  }


  return (
    <div>
      <TaskBanner userName={userName} taskItems={taskItems} />
      <div className="container">
        <TaskForm addTask={addTask} />  
      </div>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Description</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody>
          {taskTableRow()}
        </tbody>
      </table>
    </div>
  );
}

export default App;
