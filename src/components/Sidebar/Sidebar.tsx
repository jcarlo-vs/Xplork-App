import React from 'react'
import Logo from './Logo'
import Menu from './MenuList'
import MenuList from './MenuList'

const Sidebar = () => {
  return (
    <div className='border-r border-gray-600/50 flex flex-col gap-20 fixed w-52 h-full'>
      <Logo />
      <MenuList />
    </div>
  )
}

export default Sidebar
