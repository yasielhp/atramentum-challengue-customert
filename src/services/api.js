// Authenticate the user and save the token and user in local storage
export const authenticate = async (username, password) => {
  const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/authenticate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      accept: 'application/json'
    },
    body: `username=${username}&password=${password}`
  })

  const data = await response.json()
  const token = data.token
  const user = data.user
  window.localStorage.setItem('jwt', token)
  window.localStorage.setItem('user', JSON.stringify(user))
  return { token, user }
}
