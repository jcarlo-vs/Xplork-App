import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
const MainLayout = () => {
  return (
    <div className='flex h-[100dvh]'>
      <Sidebar />
      <div className='flex-1 ml-52'>
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout
