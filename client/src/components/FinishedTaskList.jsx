import React, { useEffect, useState } from "react";
import alltasks from "../api/todos-tasks.js";
import "./TaskList.css";
import TaskList from "./TaskList.jsx";
import fetchAllTodos from "../api/fetch-todos";


const FinishedTaskList = () => {


    const [completedTodos , SetCompletedTodos] = useState([]);
    
    const btnStatus = {
        'addBack' : true,
        'done' : false,
        'remove' : true
    }

    useEffect(()=>{
    
 

        fetchAllTodos('getfinishedtodos', 'GET', {completed : false})
          .then((resp)=>{
            SetCompletedTodos(resp?.data);
          })
          .catch(err=>{
            console.log("Error occured in useEffect in alltasks page, due to : " , err);
          })
        
        
        }, []);

    return <TaskList alltasks={completedTodos} btnStatus={btnStatus}/>
};

export default FinishedTaskList;
