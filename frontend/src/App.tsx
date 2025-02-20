import React from 'react'
import { Outlet } from 'react-router-dom'

const App:React.FC = () => {
  return (
    <div className="w-full h-full bg-primary overflow-y-auto ">
      <Outlet />
    </div>
  )
}

export default App
