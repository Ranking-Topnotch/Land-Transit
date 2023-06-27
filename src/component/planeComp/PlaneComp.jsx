import React, { Suspense } from 'react'
import './planeComp.css'
import { Link, useLoaderData, defer, Await } from 'react-router-dom'
import { getHostVans } from '../getVans'
//import { getVan } from '../getVans'
export function loader(){
   return defer({plane: getHostVans()})
    //return defer({plane: getVan()})
}


const PlaneComp = () => {
    const planePromise = useLoaderData()
    console.log(planePromise)
  

  return (
    <div className='planeComp__con'>
        <h1>Your listed planes</h1>
        <Suspense fallback={<h2>Loading ride ...</h2>}>
            <Await resolve={planePromise.plane}>
                {plane => {
                    const data = plane.map(planes => {
                        return (
                          
                                <section key={planes.id} >
                                   <Link to={`/host/planeComp/vans/${planes.id}`}>
                                        <div className='planeComp__content'>
                                            <img  src={planes.imageUrl} alt='planes' />
                                            <div>
                                                <h3>{planes.name}</h3>
                                                <p>{planes.price}/day</p>
                                            </div>
                                        </div>
                                    </Link>
                                </section>
                        )
                    })
                    return (
                        <div className='planeComp__contents'>
                            {data}
                        </div>
                    )
                }}
            </Await>
        </Suspense>
        
    </div>
  )
}

export default PlaneComp

// const [plane, setPlane] = React.useState([])
// React.useEffect(() => {
//     fetch('/api/host/vans') 
//     .then(res => res.json())
//     .then(data => setPlane(data.vans))
// }, [])


