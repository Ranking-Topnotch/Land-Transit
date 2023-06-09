import React from "react"
import { Link, defer, Await, useLoaderData } from "react-router-dom"
import { getHostVans } from "../getVans"
//import { getVan } from "../getVans"
import { requireAuth } from "../auth"
import { BsStarFill } from "react-icons/bs"
import './dashboard.css'

export async function loader({ request }) {
    await requireAuth(request)
    return defer({ vans: getHostVans() })
    //return defer({ vans: getVan() })
}

const Dashboard = () => {
  const loaderData = useLoaderData()

  function renderVanElements(vans) {
      const hostVansEls = vans.map((van) => (
          <div className="host-van-single" key={van.id}>
              <img src={van.imageUrl} alt='vans' />
              <div className="host-van-info">
                  <h3>{van.name}</h3>
                  <p>${van.price}/day</p>
              </div>
              <Link to={`vans/${van.id}`} href={`vans/${van.id}`}>View</Link>
          </div>
      ))

      return (
          <div className="host-vans-list">
              <section>{hostVansEls}</section>
          </div>
      )
  }

  return (
      <>
          <section className="host-dashboard-earnings">
              <div className="info">
                  <h1>Welcome!</h1>
                  <p>Income last <span>30 days</span></p>
                  <h2>$2,260</h2>
              </div>
              <Link to="income" href='income'>Details</Link>
          </section>
          <section className="host-dashboard-reviews">
              <h2>Review score</h2>
              <BsStarFill className="star" />
              <p>
                  <span>5.0</span>/5
              </p>
              <Link to="reviews" href='reviews'>Details</Link>
          </section>
          <section className="host-dashboard-vans">
              <div className="top">
                  <h2>Your listed vans</h2>
                  <Link to="vans" href='vans'>View all</Link>
              </div>
             <div className="listVans">
             <React.Suspense fallback={<h3>Loading...</h3>}>
                  <Await resolve={loaderData.vans}>{renderVanElements}</Await>
              </React.Suspense>
              </div>
          </section>
      </>
  )
}

export default Dashboard