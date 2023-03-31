import { Navigate, Routes, Route } from 'react-router-dom'
import { LoginPage } from '../pages/Login'
export default function Auth () {
  return (
    <Routes>
      <Route path='login' element={<LoginPage />} />
      <Route path='*' element={<Navigate to='auth/login' />} />
    </Routes>
  )
}
