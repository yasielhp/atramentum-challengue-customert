import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage, CustomersPage, CustomerPage, EditPage } from '../pages'

export default function Dashboard () {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/customers' element={<CustomersPage />} />
      <Route path='/customers/:id' element={<CustomerPage />} />
      <Route path='/customers/:id/edit' element={<EditPage />} />
      <Route
        path='*'
        element={<Navigate to='/' />}
      />
    </Routes>
  )
}
