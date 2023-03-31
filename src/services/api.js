export const authenticate = async (username, password) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/authenticate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        accept: 'application/json'
      },
      body: `username=${username}&password=${password}`
    })

    if (!response.ok) {
      throw new Error('Error al autenticar al usuario')
    }

    const data = await response.json()
    const token = data.token
    const user = data.user
    window.localStorage.setItem('jwt', token)
    window.localStorage.setItem('user', JSON.stringify(user))
    return { token, user }
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}
