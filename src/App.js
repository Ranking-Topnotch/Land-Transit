import React from 'react'
import { Home, About, Login, loginAction, loginLoader, Plane, planeLoader, Details, detailsLoader, Error, Layout, Dashboard, Incomes, Reviews, Host, PlaneComp, planeCompLoader, CompDetails, compDetailsLoader, DetailsList, Photo, Pricing } from './component/Index'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { requireAuth } from './component/auth'

const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout />}>    
              <Route path='/' element={<Home />}/>
              <Route 
                path='login' 
                element={<Login />}
                loader={loginLoader}
                action={loginAction} />
              <Route path='about' element={<About />} />
              <Route path='plane' 
                  element={<Plane />} 
                  loader={planeLoader} 
                  errorElement={<Error />} />
              <Route path='rides/:id' 
                  element={<Details />} 
                  loader={detailsLoader}/>
              <Route path='host' element={<Host />}  >
                <Route index element={<Dashboard />} loader={async () => await requireAuth()}/>
                <Route path='incomes' element={<Incomes />} />
                <Route path='planeComp' 
                    element={<PlaneComp />} 
                    loader={planeCompLoader} />
                <Route path='planeComp/vans/:id' 
                    element={<CompDetails />}  
                    loader={compDetailsLoader}>
                  <Route index element={<DetailsList />} />
                  <Route path='planeComp/vans/:id/pricing' element={<Pricing />} />
                  <Route path='planeComp/vans/:id/photo' element={<Photo />} />
                </Route>  
                <Route path='reviews' element={<Reviews />} />
              </Route>
              <Route path='*' element={ <Error />} />        
  </Route>
))

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App






// {/* <BrowserRouter>
// <Routes>
//     <Route element={<Layout />}>
//       <Route path='/' element={<Home />}/>
//       <Route path='about' element={<About />} />
//       <Route path='plane' element={<Plane />} />
//       <Route path='rides/:id' element={<Details />} />
//       <Route path='host' element={<Host />} >
//         <Route index element={<Dashboard />} />
//         <Route path='incomes' element={<Incomes />} />
//         <Route path='planeComp' element={<PlaneComp />} />
//         <Route path='planeComp/vans/:id' element={<CompDetails />} >
//           <Route index element={<DetailsList />} />
//           <Route path='planeComp/vans/:id/pricing' element={<Pricing />} />
//           <Route path='planeComp/vans/:id/photo' element={<Photo />} />
//         </Route>  
//         <Route path='reviews' element={<Reviews />} />
//       </Route>
//       <Route path='*' element={ <Error />} />
      
//     </Route>
// </Routes>
// </BrowserRouter> */}