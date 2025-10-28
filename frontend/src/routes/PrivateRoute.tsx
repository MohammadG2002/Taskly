import React, { type FC, type ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

interface PrivateRouteProps {
  children: ReactNode
  isAuthenticated: boolean
}

const PrivateRoute: FC<PrivateRouteProps> = ({ children, isAuthenticated }) => {
  return isAuthenticated ? <>{children}</> : <Navigate to="/auth/sign-in" replace />
}

export default PrivateRoute
