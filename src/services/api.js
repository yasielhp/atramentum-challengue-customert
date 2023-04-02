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

export const getCustomers = async (pageNumber, pageSize, historic, sortBy) => {
  const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}customers?pageNumber=${pageNumber}&pageSize=${pageSize}&historic=${historic}&sortBy=${sortBy}`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${window.localStorage.getItem('jwt')}`
    }
  })
  const data = await response.json()
  return data
}

export const getCustomer = async (customerId) => {
  const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}customers/${customerId}`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${window.localStorage.getItem('jwt')}`
    }
  })
  const data = await response.json()
  return data
}

export const getBankAcounts = async (customerId, pageNumber, pageSize, historic, sortBy) => {
  const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}customers/${customerId}/bankAccounts?pageNumber=${pageNumber}&pageSize=${pageSize}&historic=${historic}&sortBy=${sortBy}`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${window.localStorage.getItem('jwt')}`
    }
  })
  const data = await response.json()
  return data
}

export const getBankAccountId = async (bankAccountId) => {
  const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}customers/bankAccounts/${bankAccountId}`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${window.localStorage.getItem('jwt')}`
    }
  })
  const data = await response.json()
  return data
}

export const updateBankAccountId = async (bankAccountId, bankAccount) => {
  const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}customers/bankAccounts/${bankAccountId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
      Authorization: `Bearer ${window.localStorage.getItem('jwt')}`
    },
    body: JSON.stringify(bankAccount)
  })
  const data = await response.json()
  return data
}
