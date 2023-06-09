import React, { Suspense } from 'react'
import { Link, useSearchParams, useLoaderData, Await, defer } from 'react-router-dom'
import server from '../../server'
//import Details from '../details/Details'
import './plane.css'
import { getVans } from '../getVans'



export function loader(){
  return defer({ rides: getVans() })
}


const Plane = () => {
  
  const [searchParams, setSearchParams] = useSearchParams()
  const specify = searchParams.get('type')

  const dataPromise = useLoaderData()

  
  
  
  return (
    <div className='plane'>
      <h2 className='plane__h1'> Explore our plane option</h2>
      <Suspense fallback={<h2> Loading Vans </h2>}>
          <Await resolve={dataPromise.rides}>
            {rides=>{
              const specifyData = specify 
              ? rides.filter(plane => plane.type === specify) : rides
            
              
            
              const plane = specifyData.map(ride => {
                return  <div key={ride.id} className='van'>
                  <Link to={`/rides/${ride.id}`} href={`/rides/${ride.id}`} state={{search: `?${searchParams.toString()}`}}>
                      <img className='vans__img' src={ride.imageUrl} alt="rides" /> 
                      <div className='prize'>
                        <h3>{ride.name}</h3>
                        <span><h3>{ride.price}</h3>/day</span>
                      </div>
                      <button className={`quality ${ride.type}`}>
                        {ride.type}
                      </button>
            
                  </Link> 
              </div> 
              })
              return (
                <>
                  <nav className='plane__nav'>
                    <ul className='plane__ul'>
                      <button onClick={() => setSearchParams({type: 'simple'})} className={specify === 'simple' ? 'simple' : '' }><li>Simple</li></button>
                      <button onClick={() => setSearchParams('type=luxury')} className={specify === 'luxury' ? 'luxury' : '' }><li>Luxury</li></button>
                      <button onClick={() => setSearchParams('type=rugged')} className={specify === 'rugged' ? 'rugged' : '' }><li>rugged</li></button>
                    </ul>
                  { specify ? 
                  <Link to='.' href='.'><span><a>Clear filter</a></span></Link>
                  : null }
                  </nav>
                  <section className='vanss'>
                    <div className='vans'>{plane}</div>
                  </section>
                </>
              )
              
            }}
          </Await>
      
      </Suspense>
      
    </div>
  )
}

export default Plane


// const data = useLoaderData()

// const [rides, setRides] = React.useState(data)
// const [loading, setLoading] = React.useState(false)
// const [error, setError] = React.useState(false)
// const [searchParams, setSearchParams] = useSearchParams()
// const specify = searchParams.get('type')

// fetching data manually coding the HAPPY PATH

  // fetch('/api/vans')
  //     .then(res => res.json())
  //     .then(data => setRides(data.vans))
  
  // React.useEffect(() =>{
  //   async function loadVans() {
  //     setLoading(true)
  //     try {
  //         const data = await getVans()
  //         setRides(data)
  //     } catch (err) {
  //         setError(err)
  //     } finally {
  //         setLoading(false)
  //     }
  // }

  // loadVans()    
  // }, [])


  // function handleClick(){
  //     setSearchParams('?type=jed')
  //   }
  //   <button onClick={handleClick}>Jedi</button>
  //       <button onClick={() => setSearchParams("type=sith")}>Sith</button>
  //       <button onClick={() => setSearchParams("")}>Clear</button>

  // you can also put a object in it.
  // <button onClick={() => setSearchParams({type: jedi})}


//   const [searchParams, setSearchParams] = useSearchParams()
//   const specify = searchParams.get('type')

//   const rides= useLoaderData()

  
  
//   const specifyData = specify ? rides.filter(plane => plane.type === specify) : rides

  

//   const plane = specifyData.map(ride => {
//     return  <div key={ride.id} className='van'>
//       <Link to={`/rides/${ride.id}`} state={{search: `?${searchParams.toString()}`}}>
//           <img className='vans__img' src={ride.imageUrl} alt="pic" /> 
//           <div className='prize'>
//             <h3>{ride.name}</h3>
//             <span><h3>{ride.price}</h3>/day</span>
//           </div>
//           <button className={`quality ${ride.type}`}>
//             {ride.type}
//           </button>

//       </Link> 
//    </div> 
//   })
  
//   return (
//     <div className='plane'>
//       <h2 className='plane__h1'> Explore our plane option</h2>
//       <nav className='plane__nav'>
//         <ul className='plane__ul'>
//           <button onClick={() => setSearchParams({type: 'simple'})} className={specify === 'simple' ? 'simple' : '' }><li>Simple</li></button>
//           <button onClick={() => setSearchParams('type=luxury')} className={specify === 'luxury' ? 'luxury' : '' }><li>Luxury</li></button>
//           <button onClick={() => setSearchParams('type=rugged')} className={specify === 'rugged' ? 'rugged' : '' }><li>rugged</li></button>

//            {/* <Link to='?type=simple'><li>Simple</li></Link>
//            <Link to='?type=luxury'><li>Luxury</li></Link>
//            <Link to='?type=rugged'><li>Ruged</li></Link> */}
//         </ul>
//         { specify ?
//         <Link to='.'><span><a>Clear filter</a></span></Link>
//         : null }
//       </nav>
//       <section className='vanss'>
//         <div className='vans'>{plane}</div>
//       </section>
//     </div>
//   )
// }