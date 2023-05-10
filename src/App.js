import React from 'react'
import { Home, About, Plane, Details, Error, Layout, Dashboard, Incomes, Reviews, Host, PlaneComp, CompDetails, DetailsList, Photo, Pricing } from './component/Index'
import { BrowserRouter, Routes, Route } from "react-router-dom"

//import Reviews from './component/reviews/Reviews'

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
              <Route path='/' element={<Home />}/>
              <Route path='about' element={<About />} />
              <Route path='plane' element={<Plane />} />
              <Route path='rides/:id' element={<Details />} />
              <Route path='host' element={<Host />} >
                <Route index element={<Dashboard />} />
                <Route path='incomes' element={<Incomes />} />
                <Route path='planeComp' element={<PlaneComp />} />
                <Route path='planeComp/vans/:id' element={<CompDetails />} >
                  <Route index element={<DetailsList />} />
                  <Route path='planeComp/vans/:id/pricing' element={<Pricing />} />
                  <Route path='planeComp/vans/:id/photo' element={<Photo />} />
                </Route>  
                <Route path='reviews' element={<Reviews />} />
              </Route>
              <Route path='*' element={ <Error />} />
              
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
//
export default App