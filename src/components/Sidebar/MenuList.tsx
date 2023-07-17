import React, { ReactNode } from 'react'

import {
  HiHome as HomeIcon,
  HiMagnifyingGlass as SearchIcon,
  HiMiniGlobeAsiaAustralia as ExploreIcon,
  HiMiniSquare3Stack3D as ReelsIcon,
  HiChatBubbleOvalLeftEllipsis as MessageIcon,
  HiOutlineHeart as NotificationsIcon,
  HiPencilSquare as CreatePostIcon,
  HiUserCircle as UserIcon,
} from 'react-icons/hi2'
import Menu from './Menu'

const Icons: any[] = [
  { Icon: <HomeIcon />, name: 'Home', path: '/' },
  { Icon: <SearchIcon />, name: 'Search', path: '/search' },
  { Icon: <ExploreIcon />, name: 'Explore', path: '/explore' },
  // { Icon: <ReelsIcon />, name: 'reels', path: '/reels' },
  { Icon: <MessageIcon />, name: 'messages', path: '/messages' },
  {
    Icon: <NotificationsIcon />,
    name: 'notifications',
    path: '/notifications',
  },
  { Icon: <CreatePostIcon />, name: 'create', path: '/create' },
  { Icon: <UserIcon />, name: 'profile', path: '/profile' },
]

const MenuList = () => {
  return (
    <div className='flex flex-col gap-3'>
      {Icons.map(
        (
          item: { Icon: ReactNode; name: 'string'; path: string },
          i: number
        ) => {
          return (
            <Menu path={item.path} icon={item.Icon} key={i} name={item.name} />
          )
        }
      )}
    </div>
  )
}

export default MenuList
