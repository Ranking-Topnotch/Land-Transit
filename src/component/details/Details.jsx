import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
//import server from '../../server'
import './details.css'
import { getVans } from '../getVans'

export function loader({ params }){
  return getVans(params.id)
}


const Details = () => {

  const ride = useLoaderData()

  //console.log(ride)

  //const [ride, setRide] = React.useState(server)


  // this code help to go back to the filter one
  // const find = location.state?.search || ''
  // const search = location.state?.search || ""
    
  //   return (
  //       <div className="van-detail-container">
  //           <Link
  //               to={`..${search}`}

  // React.useEffect(() => {
  //   fetch(`/api/vans/${param.id}`)
  //     .then(res => res.json())
  //     .then(data => setRide(data.vans))
  // }, [param.id])
  
  return (
    <div>
      { ride? (<div className='details' key={ride.id}>
          <section className='sections'>
            <span>&#8592;</span>
            <Link to='/plane' href='/plane' >Back to all vans</Link>
          </section>
          <img src={ride.imageUrl} alt="rides" />
          <button className={`quality ${ride.type}`}>
            {ride.type}
          </button>
        <div className='prize'>
          <h3>{ride.name}</h3>
          <h3>{ride.price}/<span>day</span></h3>
          <p>{ride.description}</p>
        </div>
        <div className='rent'>Rent this van</div> 
      </div> ) : <h2>Loading...</h2> }
  </div>
  )
}

export default Details



// const param = useParams()
// const location = useLocation()

// const [ride, setRide] = React.useState(server)


 // React.useEffect(() => {
  //   fetch(`/api/vans/${param.id}`)
  //     .then(res => res.json())
  //     .then(data => setRide(data.vans))
  // }, [param.id])