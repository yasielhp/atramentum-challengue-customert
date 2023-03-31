import { Navigate, Route, Routes } from 'react-router-dom'

export const Dashboard = () => {
  return (
    <Routes>
      <Route path='/' element={<h1>Home</h1>} />

      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  )
}
