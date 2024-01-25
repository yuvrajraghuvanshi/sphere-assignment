import { useState } from 'react'
import './index.css'
import Sidebar, { SidebarItem } from './components/Sidebar'
import { CopyPlus, FolderSearch, KanbanIcon, LayoutDashboard, UserRound } from 'lucide-react'
import Navbar from './components/Navbar'
import Mainbar from './container/Mainbar'
function App() {

  
  return (
  <div className='App'>
<div className="flex">
  <div className="w-1/6 bg-gray-200">
   <Sidebar>
    <SidebarItem icon={<LayoutDashboard size={20} color='blue'/>} text="Home" alert/>
    <SidebarItem icon={<FolderSearch size={20} color='blue'/>} text="Job Invites" />
    <SidebarItem icon={<KanbanIcon size={20} color='blue'/>} text="Analytics" />
    <SidebarItem icon={<UserRound size={20} color='blue'/>} text="My Profile" />
    <SidebarItem icon={<CopyPlus size={20} color='blue'/>} text="Explore" />
   </Sidebar> 
  </div>

  <div className="flex-1">
    <Navbar/>
    <Mainbar/>
    
  </div>
</div>

  </div>
  )
}

export default App
