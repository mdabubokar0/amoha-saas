import React from 'react'
import { Sidebar } from '../Sidebar/Sidebar'
import { SmallBar } from '../Sidebar/SmallBar'

export const Error = () => {
  return (
    <div>
      <div className="px-[5%] flex justify-between bg">
        <Sidebar />
        <div className="text-center text-[80px]">
          Error 404! Page not found
        </div>
      </div>
      <SmallBar />
    </div>
  )
}
