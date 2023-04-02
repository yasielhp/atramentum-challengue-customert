import { AuthProvider } from './context/Auth'
import { AppRouter } from './route'

export default function App () {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  )
}
