import React, { ReactNode } from 'react'
import Text from '../Text/Text'
import { Link, useLocation } from 'react-router-dom'
interface MenuProps {
  icon: ReactNode
  name: string
  path: string
}

const Menu = ({ icon, name, path }: MenuProps) => {
  const { pathname } = useLocation()

  return (
    <Link to={path} className={pathname === path ? 'bg-slate-500/10' : ''}>
      <div className='flex items-center gap-8'>
        <div className='[&>*]:h-6 [&>*]:w-6 text-white p-3'>{icon}</div>
        <Text size='tiny' className='capitalize'>
          {name}
        </Text>
      </div>
    </Link>
  )
}

export default Menu
