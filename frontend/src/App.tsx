import React from 'react'
import { Outlet } from 'react-router-dom'

const App:React.FC = () => {
  return (
    <div className="w-full h-full bg-[#06071D] overflow-y-auto ">
      <Outlet />
    </div>
  )
}

export default App
