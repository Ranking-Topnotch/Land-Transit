import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const Error = () => {
  const error = useRouteError()
  console.log(error.message)
  return (
    <div>
        <h2>
            Sorry the page you are looking for is not found
        </h2>
        <h2>{error.message}</h2>
        <h2>{error.statusText}</h2>
        <Link to='..' href='..'><p>Return to home page</p></Link>
    </div>
  )
}

export default Error