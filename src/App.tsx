import React from 'react'
import Homepage from './pages/Homepage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Profile from './pages/Profile'
import MainLayout from './pages/MainLayout'
import Sidebar from './components/Sidebar/Sidebar'
import Search from './pages/Search'
import Explore from './pages/Explore'
import Messages from './pages/Messages'
import Notifications from './pages/Notifications'
import Create from './pages/Create'
import Reels from './pages/Reels'
import LoginPage from './pages/LoginPage'

const App = () => {
  return (
    <div className='max-w-5xl mx-auto'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Homepage />} />
            <Route path='/search' element={<Search />} />
            <Route path='/explore' element={<Explore />} />
            <Route path='/reels' element={<Reels />} />
            <Route path='/messages' element={<Messages />} />
            <Route path='/notifications' element={<Notifications />} />
            <Route path='/create' element={<Create />} />
            <Route path='/profile' element={<Profile />} />
          </Route>
          <Route path='login' element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
