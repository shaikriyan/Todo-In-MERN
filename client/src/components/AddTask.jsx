import React from 'react'
import './AddTask.css';
import { IoAddSharp } from "react-icons/io5";
import fetchAllTodos from '../api/fetch-todos';
import { useNavigate } from 'react-router-dom';

const AddTask = () => {

  const navigate =  useNavigate();
  

  const addUserHandler = async (e)=>{

    console.log("title  : ", e.target[0].value);  
    
    fetchAllTodos('addtodo', 'POST', {'userId' : 1, "title" : e.target[0].value, "completed" : false})
      .then((resp)=>{
        console.log("resp", resp);
          if(resp.success){
            console.log('User saved to DB');
            navigate('/all');
          }
          else{
            console.log("User didn't get saved to DB");
            navigate('/missingtitle')
          }
      })
      .catch(err=>console.log("Error occured, while adding a product to the DB , due to : ", err));


    e.preventDefault();



  }


  return (
    <>
    <div className="container">
        <h2 style={{textAlign : 'center', margin : '1rem'}}>Track your tasks effectively, <br />Stay a head by planing out your day.</h2>
        <form onSubmit={addUserHandler}>
        <div className="row">
            <div className="col task" style={{display : 'flex', margin : '1rem'}}>
            <input type="text" className="form-control task-text" placeholder="Enter your todo task" name='title'/>
            <button type='submit' className='btn btn-primary task-btn'><IoAddSharp /></button>
            </div>
        </div>
        </form>
    </div>
    </>
  )
}

export default AddTask