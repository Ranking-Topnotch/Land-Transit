import { redirect } from "react-router-dom"

export async function requireAuth() {
    const isLoggedIn = localStorage.getItem('loggedin')
    
    if (!isLoggedIn) {
        throw redirect("/login?message=you must login first")
    }
    return null
}


//  USING REACT COMPONENT INSTEAD OF JS
// import React from "react"
// import { Outlet, Navigate } from "react-router-dom"

// export default function AuthRequired() {
//     const isLoggedIn = false
//     if (!isLoggedIn) {
//         return <Navigate to="/login" state={{message: "You must log in first"}} />
//     }
//     return <Outlet />
// }