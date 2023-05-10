import React from 'react'
import { useOutletContext } from 'react-router-dom'

const Photo = () => {
  const {plane} = useOutletContext()
  
  return (
    <div>{plane.name}</div>
  )
}

export default Photo