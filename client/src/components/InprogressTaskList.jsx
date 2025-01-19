import React, { useEffect, useState } from "react";
import alltasks from "../api/todos-tasks.js";
import "./TaskList.css";
import TaskList from "./TaskList.jsx";
import fetchAllTodos from "../api/fetch-todos";

const InprogressTaskList = () => {

    const [inprogressTodos , SetInprogressTodos] = useState([]);

    const btnStatus = {
        'addBack' : false,
        'done' : true,
        'remove' : true
    }


    useEffect(()=>{
    
 

        fetchAllTodos('getinprogresstodos', 'GET', {completed : false})
          .then((resp)=>{
            SetInprogressTodos(resp?.data);
          })
          .catch(err=>{
            console.log("Error occured in useEffect in alltasks page, due to : " , err);
          })
        
        
        }, []);


    return <TaskList alltasks={inprogressTodos} btnStatus={btnStatus}/>
};

export default InprogressTaskList;
