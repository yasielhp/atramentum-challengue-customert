import { useContext, useState } from 'react'
import { AuthContext } from '../../context/auth'
import { authenticate } from '../../services/api'
import { Spinner } from '../../components'

export function Login () {
  const { login } = useContext(AuthContext)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    user: '',
    password: ''
  })

  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const { token, user } = await authenticate(form.user, form.password)
      login(token, user)
      setError(null)
      setLoading(false)
    } catch (error) {
      setError('Login failed, please check your credentials.')
      setLoading(false)
    }
  }
  return (
    <section className='flex flex-col items-center justify-center min-h-screen py-12sm:px-6 lg:px-8'>
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
        <a href='#' className='flex items-center mb-6 text-2xl font-semibold'>
          <img className='w-8 h-8 mr-2' src='/logo.svg' alt='logo' />
          Atramentum
        </a>
        <div className='w-96 bg-white rounded-lg shadow md:mt-0 xl:p-0'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <form className='space-y-4 md:space-y-6' onSubmit={handleOnSubmit}>
              <div>
                <label htmlFor='user' className='block mb-2 text-sm font-medium text-gray-900'>Your user</label>
                <input disabled={loading} onChange={handleOnChange} type='text' name='user' id='user' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg disabled:text-gray-300 disabled:bg-slate-100 focus:ring-blue-600 focus:border-blue-600 block w-full  h-12 p-2.5' placeholder='16-wgudovunn' required />
              </div>
              <div>
                <label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-900'>Your password</label>
                <input disabled={loading} type='password' name='password' id='password' onChange={handleOnChange} className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg disabled:text-gray-300 disabled:bg-slate-100 focus:ring-blue-600 focus:border-blue-600 block w-full  h-12 p-2.5' placeholder='••••••••' required />
              </div>
              <div className='flex items-center justify-center'>
                {error && <small className='text-red-500 text-sm text-center'>{error}</small>}
              </div>
              <button disabled={loading} type='submit' className='w-full h-12 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 disabled:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>{loading ? <div className='w-full flex justify-center items-center'><Spinner /></div> : 'Sign in'}</button>
            </form>
          </div>
        </div>
        <small className='mt-6 text-xs text-gray-400'>Developer by @yasielhp</small>
      </div>
    </section>
  )
}
