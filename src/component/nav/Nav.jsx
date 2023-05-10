import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './nav.css'


const Nav = () => {
  return (
    <nav className="nav__nav">
        <h1 className='nav__title'><Link to='/'>#PLANELIFE</Link></h1>
        <span className='host'><NavLink className={({isActive}) => isActive ? 'nav__active' : ''} to='/host'>Host</NavLink></span>
        <span><NavLink className={({isActive}) => isActive ? 'nav__active' : ''} to='/about'>About</NavLink></span>
        <span className='van'><NavLink className={({isActive}) => isActive ? 'nav__active' : ''} to='/plane'>Planes</NavLink></span>
    </nav>
  )
}

export default Nav


//https://miragejs.com/tutorial/part-1/