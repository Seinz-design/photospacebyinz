import { Routes, Route, Navigate } from 'react-router'
import HomePage from './pages/HomePage'
import CameraPage from './pages/CameraPage'

const App = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/camera" element={<CameraPage />} />

    
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
)

export default App