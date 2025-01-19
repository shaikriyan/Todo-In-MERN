import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../UI/Header'
import AddTask from '../components/AddTask'

const Homepage = () => {
  return (
    <>
    <AddTask />
    </>
  )
}

export default Homepage