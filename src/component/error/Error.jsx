import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
        <h2>
            Sorry the page you are looking for is not found
        </h2>
        <Link to='..'><p>Return to home page</p></Link>
    </div>
  )
}

export default Error