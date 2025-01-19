import React, { useEffect, useState } from 'react'
import TaskList from '../components/TaskList'
// import alltasks from "../api/todos-tasks.js";
import fetchAllTodos from '../api/fetch-todos.js';


const Alltaskspage = () => {

  const btnStatus = {
    'addBack' : true,
    'done' : true,
    'remove' : true
}

  const [alltasks , SetAllTasks] = useState([]);

  useEffect(()=>{
    
 

  fetchAllTodos('getalltodos', 'GET', {})
    .then((resp)=>{
      SetAllTasks(resp?.data);
    })
    .catch(err=>{
      console.log("Error occured in useEffect in alltasks page, due to : " , err);
    })
  
  
  }, []);


  return (
    <>
    <h2 style={{textAlign : 'center', margin : '1rem'}}>Tasks List</h2>
    <TaskList alltasks={alltasks} btnStatus={btnStatus}/>
  </>
  )
}

export default Alltaskspage