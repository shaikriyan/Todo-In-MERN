import React from 'react'
import { useRouteError } from 'react-router-dom'

const Errorpage = () => {

    const routeError = useRouteError();

  return (
    <>
    <h2 style={{textAlign : 'center', margin : '1rem'}}>{`Reason :  ${routeError?.data}`}</h2>
    </>
  )
}

export default Errorpage