import React, { useContext } from 'react'
import { Route, Navigate } from 'react-router-dom'
import AuthContext from '../../components/context/authContext'

const PrivateRoute = ({ element, ...rest }) => {
  const { isAuthenticated, loading } = useContext(AuthContext)

  if (loading) {
    return <div>Loading...</div>
  }

  return isAuthenticated ? element : <Navigate to='/login' />
}

export default PrivateRoute
