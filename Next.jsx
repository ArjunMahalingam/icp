import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Next = () => {
  return (
    <div >
        <Link to={`/`}><p className=" font-bold text-9xl">Repeat uh...</p></Link>
        <Outlet/>
    </div>
  )
}

export default Next