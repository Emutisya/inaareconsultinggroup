import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import AdminRoute from './components/AdminRoute'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import ProgramsPage from './pages/ProgramsPage'
import PublicationsPage from './pages/PublicationsPage'
import PublicationDetailPage from './pages/PublicationDetailPage'
import BookingPage from './pages/BookingPage'
import ContactPage from './pages/ContactPage'
import AdminLoginPage from './pages/AdminLoginPage'
import AdminDashboardPage from './pages/AdminDashboardPage'

const App = () => {
  return (
    <Routes>
      <Route path="/admin/login" element={<AdminLoginPage />} />
      <Route
        path="/admin/dashboard"
        element={
          <AdminRoute>
            <AdminDashboardPage />
          </AdminRoute>
        }
      />
      <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />

      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/publications" element={<PublicationsPage />} />
        <Route path="/publications/:id" element={<PublicationDetailPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App
