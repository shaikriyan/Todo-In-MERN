import React, { useEffect, useState } from "react";
import "./TaskList.css";
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { IoAddSharp } from "react-icons/io5";
import fetchAllTodos from "../api/fetch-todos";
import { useNavigate } from "react-router-dom";

const TaskList = ({ alltasks, btnStatus }) => {
  console.log("alltasks : ", alltasks);
  const [tasks, SetTasks] = useState(alltasks);
  const { addBack, done, remove } = btnStatus;
  

  const navigate =  useNavigate();


  const removeTask = async (id)=>{

    fetchAllTodos('removetodo', 'DELETE', {id})
      .then((resp)=>{

        if(resp.success){
          console.log("todo removed successfully");

          // update the tasksList locally.
          SetTasks(tasks.filter(t=> t._id!==id));


          
        }
        else{
          console.log(`todo didn't get removed...`);
        }

      })
      .catch(err=>
        console.log(`Error occured while removing the todo : ` , err)
      )


  }


  const updateTaskList = async (id, status) => {

    fetchAllTodos('updatetodo', 'PUT', {id , completed : status})
      .then((resp)=>{

        if(resp.success){
          console.log("todo updated successfully");

          // update the tasksList locally.
          SetTasks(tasks.map(t=>{
            return (t._id===id) ? {...t, completed : status } : t; 
          }));


          
        }
        else{
          console.log(`todo didn't get udpated...`);
        }

      })
      .catch(err=>
        console.log(`Error occured while udpating the completion status : ` , err)
      )

  };



  useEffect(()=>{
    SetTasks(alltasks)
  }, [alltasks]);

  return (
    <>
      <div className="container">
        {tasks.map((task, ind) => {
          return (
            <div key={ind}>
              <div className="todo-item ">
                <p className={`${task.completed ? "strike" : ""}`}>
                  {task.title}
                </p>
                <div>
                  {addBack && (
                    <button
                      type="submit"
                      className={`btn btn-primary task-btn`}
                      onClick={() => {
                        updateTaskList(task._id, false);
                      }}
                    >
                      <IoAddSharp />
                    </button>
                  )}
                  {done && (
                    <button
                      className="btn btn-success task-btn"
                      onClick={() => {
                        updateTaskList(task._id, true);
                      }}
                    >
                      <FaCheck />
                    </button>
                  )}
                  {remove && (
                    <button className="btn btn-danger task-btn" onClick={()=>{removeTask(task._id)}}>
                      <RxCross2 />
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TaskList;
