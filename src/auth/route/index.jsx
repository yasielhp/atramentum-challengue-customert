import { Navigate, Routes, Route } from 'react-router-dom'
import { Login } from '../page/Login'
export const Auth = () => {
  return (
    <Routes>
      <Route path='login' element={<Login />} />
      <Route path='*' element={<Navigate to='auth/login' />} />
    </Routes>
  )
}
