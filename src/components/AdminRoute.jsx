import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const AdminRoute = ({ children }) => {
  const { isAuthenticated, authLoading } = useAuth()

  if (authLoading) {
    return (
      <section className="section-shell">
        <p className="text-muted">Checking secure session...</p>
      </section>
    )
  }

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />
  }

  return children
}

export default AdminRoute
