import React from 'react'
import Header from '../UI/Header'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
    return (
        <>
        <Header />
        <Outlet />
        </>
      )
}

export default MainLayout