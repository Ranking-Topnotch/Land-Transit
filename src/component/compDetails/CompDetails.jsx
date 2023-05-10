import React from 'react'
import { Outlet, useParams, NavLink } from 'react-router-dom'
import server from '../../server'
import './compDetails.css'

const CompDetails = () => {
    const param = useParams()
    const [plane, setPlane] = React.useState(server)
    
    React.useEffect(() => {
        fetch(`/api/vans/${param.id}`) //'/api/host/vans'
      .then(res => res.json())
      .then(data => setPlane(data.vans))
    }, [param.id])
  return (
   <div>
      <div>
        <div className='details__con'>
          <img src={plane.imageUrl} alt='pics' />
          <div>
            <p>{plane.type}</p>
            <h2>{plane.name}</h2>
            <h4>{plane.price}/day</h4>
          </div>
        </div>

        <ul className='details__nav'>
          <NavLink end className={({isActive}) => isActive ? 'nav__details' : null} to='.'><li>Details</li> </NavLink>
          <NavLink className={({isActive}) => isActive ? 'nav__details' : ''} to='planeComp/vans/:id/pricing'> <li>Pricing</li></NavLink>
          <NavLink className={({isActive}) => isActive ? 'nav__details' : ''} to='planeComp/vans/:id/photo'><li>Photos</li></NavLink>
        </ul>
      </div>

      <Outlet context={{plane}} />
   </div>
  )
}

export default CompDetails