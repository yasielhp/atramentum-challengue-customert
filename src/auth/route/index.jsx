import { Navigate, Routes, Route } from 'react-router-dom'
export const Auth = () => {
  return (
    <Routes>
      <Route path='login' element={<h1>Login</h1>} />
      <Route path='*' element={<Navigate to='auth/login' />} />
    </Routes>
  )
}
