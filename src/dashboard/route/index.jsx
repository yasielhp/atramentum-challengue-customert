import { Navigate, Route, Routes } from 'react-router-dom'
import { CustomersPage, CustomerPage } from '../pages'

export default function Dashboard () {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/customers' />} />
      <Route path='/customers' element={<CustomersPage />} />
      <Route path='/customers/:id' element={<CustomerPage />} />
      <Route
        path='*'
        element={<Navigate to='/' />}
      />
    </Routes>
  )
}
