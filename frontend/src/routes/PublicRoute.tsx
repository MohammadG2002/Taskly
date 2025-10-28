import React, { type FC, type ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

interface PublicRouteProps {
  children: ReactNode
  isAuthenticated: boolean
}

const PublicRoute:FC<PublicRouteProps> = ({ children, isAuthenticated }) => {
  return isAuthenticated ? <Navigate to="/kanban" replace /> : <>{children}</>
}

export default PublicRoute
