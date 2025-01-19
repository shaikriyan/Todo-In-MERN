import React from 'react'
import FinishedTaskList from '../components/FinishedTaskList.jsx'

const Completedpage = () => {
  return (
    <>
      <h2 style={{textAlign : 'center', margin : '1rem'}}>Acomplished Tasks</h2>
      <FinishedTaskList />
    </>
  )
}

export default Completedpage