import React, { useContext } from 'react'
import { AppContext } from '../../Context/AppContext'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoutes ({children}) {
    const {user}=useContext(AppContext)
    if(!user)return <Navigate to="/Signin" replace/>
  return children
}
