import React from 'react'
import { Outlet } from 'react-router-dom'

const App:React.FC = () => {
  return (
    <div className="w-full h-screen bg-red-400">
      <Outlet />
    </div>
  )
}

export default App
