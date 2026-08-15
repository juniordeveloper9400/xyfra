import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import WorksPage from './pages/WorksPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import './App.css'
/* Imported last so its breakpoints win over equal-specificity base rules */
import './styles/mobile.css'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="case-studies" element={<WorksPage />} />
        {/* Old URL kept alive so existing links don't 404 */}
        <Route path="works" element={<Navigate to="/case-studies" replace />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        {/* Unknown URLs fall back to the home page */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
