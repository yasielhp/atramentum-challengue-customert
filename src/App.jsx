import { AuthProvider } from './context/auth'
import { AppRouter } from './route'

export default function App () {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  )
}
