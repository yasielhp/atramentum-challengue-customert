import { useState, useRef, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { IconProfile, IconHome, IconCustomers, IconSliderbarRight, IconSliderbarLeft } from '../../components'
import { AuthContext } from '../../context/auth'
export function Layout ({ children }) {
  const { user, logout } = useContext(AuthContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const menuRef = useRef(null)
  const sidebarRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <>
      <header className='w-screen py-2 pl-2 pr-4 bg-white flex justify-between border-b'>
        <div className='flex justify-center items-center'>
          <div className='mr-3'>
            {
            isSidebarOpen
              ? <button className='flex w-auto justify-start items-center p-2 gap-x-2 text-gray-500 bg-white hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all' onClick={() => setIsSidebarOpen(!isSidebarOpen)}><IconSliderbarLeft /></button>
              : <button className='flex w-auto justify-start items-center p-2 gap-x-2 text-gray-500 bg-white hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all' onClick={() => setIsSidebarOpen(!isSidebarOpen)}><IconSliderbarRight /></button>
          }
          </div>
          <Link to='/' className='flex items-center text-xl font-semibold'>
            <img className='w-8 h-8 mr-2' src='/logo.svg' alt='logo' />
            Atramentum
          </Link>
        </div>
        <div className='flex justify-center items-center'>
          <button ref={menuRef} className='flex justify-center items-center' onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className='text-gray-900 w-10 inline-flex relative'>
              <IconProfile />
              <span className='flex absolute h-3 w-3 bottom-0 right-2 -mt-1 -mr-1'>
                <span className={`animate-ping absolute inline-flex h-full bg-red-300 w-full rounded-full ${user?.enabled ? 'bg-green-400' : 'bg-red-400'}  opacity-75`} />
                <span className={`relative inline-flex rounded-full h-3 w-3 ${user?.enabled ? 'bg-green-500' : 'bg-red-500'} `} />
              </span>
            </div>
          </button>
          {
            isMenuOpen && (
              <div className='absolute bottom-auto right-0 w-auto bg-white rounded-lg shadow'>
                <div className='p-3 border-b'>
                  <p className='text-sm text-left font-semibold'>{user.username}</p>
                </div>
                <button onClick={logout} className='px-4 py-2 text-sm text-left hover:bg-gray-200 mb-2 w-full'>Sign out</button>
              </div>
            )
          }
        </div>

      </header>
      <main className='flex'>
        <aside
          className='sticky h-screen flex flex-col justify-between bg-white border-r transition-all'
          ref={sidebarRef}
          onMouseEnter={() => setIsSidebarOpen(true)}
          onMouseLeave={() => setIsSidebarOpen(false)}
        >
          <nav className='w-full'>
            <ul className='px-2 pt-4'>
              <li><Link className='flex w-full justify-start items-center p-2 gap-x-2 text-gray-500 bg-white hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all' to='/'><IconHome />{isSidebarOpen && <span>Home</span>}</Link></li>
              <li><Link className='flex w-full justify-start items-center p-2 gap-x-2 text-gray-500 bg-white hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all' to='/customers'><IconCustomers />{isSidebarOpen && <span>Customers</span>}</Link></li>
            </ul>
          </nav>
        </aside>
        <section>{children}</section>
      </main>
    </>
  )
}
