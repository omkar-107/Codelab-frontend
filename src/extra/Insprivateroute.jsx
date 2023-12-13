import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Privateroute = ({children}) => {
  const { user } = useSelector((state) => state.profile)
  if (user !== null && user.accountType === 'instructor') {
    return children
  } else {
    return <Navigate to="/" />
  }
}

export default Privateroute;