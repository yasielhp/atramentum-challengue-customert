import { useContext, useState } from 'react'
import { AuthContext } from '../../context/Auth'
import { authenticate } from '../../services/api'
import { Spinner, Input, Button } from '../../components'
import { Link } from 'react-router-dom'

export function LoginPage () {
  const { login } = useContext(AuthContext)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    user: '',
    password: ''
  })

  const handleOnChange = (e) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const { token, user } = await authenticate(form.user, form.password)
      login(token, user)
      setError(null)
    } catch (error) {
      setError('Login failed, please check your credentials.')
    }
    setLoading(false)
  }

  return (
    <section className='flex flex-col items-center justify-center min-h-screen py-12sm:px-6 lg:px-8'>
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
        <Link to='/' className='flex items-center mb-6 text-2xl font-semibold'>
          <img className='w-8 h-8 mr-2' src='/logo.svg' alt='logo' />
          Atramentum
        </Link>
        <div className='w-96 bg-white rounded-lg shadow md:mt-0 xl:p-0'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <form className='space-y-4 md:space-y-6' onSubmit={handleOnSubmit}>
              <Input
                label='Your user'
                name='user'
                type='text'
                placeholder='16-wgudovunn'
                onChange={handleOnChange}
                disabled={loading}
                required
              />
              <Input
                label='Your password'
                name='password' type='password'
                placeholder='••••••••'
                onChange={handleOnChange}
                disabled={loading}
                required
              />

              <div className='flex items-center justify-center'>
                {error && <small className='text-red-500 text-sm text-center'>{error}</small>}
              </div>
              <Button
                full
                type='submit'
                disabled={loading}
                label={loading ? <div className='w-full flex justify-center items-center'><Spinner /></div> : 'Sign in'}
              />
            </form>
          </div>
        </div>
        <small className='mt-6 text-xs text-gray-400'>Developer by @yasielhp</small>
      </div>
    </section>
  )
}
