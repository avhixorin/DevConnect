import React from 'react'
import { Outlet } from 'react-router-dom'

const App:React.FC = () => {
  return (
    <div className="w-full h-full bg-red-400 overflow-y-auto">
      <Outlet />
    </div>
  )
}

export default App
