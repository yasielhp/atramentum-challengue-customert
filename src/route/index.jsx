import { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthContext } from '../context/auth'
import { Spinner } from '../components'

import Dashboard from '../dashboard/route/'
import Auth from '../auth/route/'

export const AppRouter = () => {
  const { isLogin, loading } = useContext(AuthContext)
  return loading
    ? (
      <div className='w-screen h-screen flex justify-center items-center'>
        <Spinner />
      </div>
      )
    : (
      <Routes>
        {
            isLogin
              ? <Route path='/*' element={<Dashboard />} />
              : (
                <>
                  <Route path='auth/*' element={<Auth />} />
                  <Route path='*' element={<Navigate to='/auth/login' />} />
                </>
                )

          }
      </Routes>
      )
}
