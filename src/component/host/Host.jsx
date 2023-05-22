import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
//import { Auth } from '../Auth'
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




// PROTECTED ROUTE

// import React from "react"
// import ReactDOM from "react-dom/client"
// import {
//   RouterProvider,
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route
// } from "react-router-dom"

// import Layout from "./Layout"
// import AuthRequired from "./AuthRequired"

// const router = createBrowserRouter(createRoutesFromElements(
//   <Route path="/" element={<Layout />}>
//     <Route index element={<h1>Home page</h1>} />
    
//     <Route element={<AuthRequired />}>
//       <Route path="protected" element={<h1>Super secret info here</h1>} />
//     </Route>
    
//   </Route>
// ))

// function App() {
//   return (
//     <RouterProvider router={router} />
//   )
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<App />)