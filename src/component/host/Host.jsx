import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './host.css'

const Host = () => {
  const styled = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
  }
  return (
    <div>
        <nav className='nav__host'>
            <ul>
                <NavLink style={({isActive})=> isActive ? styled : null} end to='/host'><li>Dashboard</li></NavLink>
                <NavLink style={({isActive})=> isActive ? styled : null} to='/host/incomes'><li>Incomes</li></NavLink>
                <NavLink style={({isActive})=> isActive ? styled : null} to='/host/planeComp'><li>Plane</li></NavLink>
                <NavLink style={({isActive})=> isActive ? styled : null} to='/host/reviews'><li>Reviews</li></NavLink>
            </ul>
        </nav>
        <Outlet />
    </div>
  )
}

export default Host