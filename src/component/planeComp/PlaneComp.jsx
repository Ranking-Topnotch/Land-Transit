import React from 'react'
import './planeComp.css'
import { Link, useLoaderData } from 'react-router-dom'
import { getHostVans } from '../getVans'

export function loader(){
    return getHostVans()
}


const PlaneComp = () => {
    const plane = useLoaderData()
  
    const data = plane.map(planes => {
        return (
          
                <section key={planes.id} >
                   <Link to={`/host/planeComp/vans/${planes.id}`}>
                        <div className='planeComp__content'>
                            <img  src={planes.imageUrl} alt='pics' />
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
    <div className='planeComp__con'>
        <h1>Your listed planes</h1>
        <div className='planeComp__contents'>
            {data}
        </div>
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


