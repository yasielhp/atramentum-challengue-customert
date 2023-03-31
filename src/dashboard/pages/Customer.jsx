import { useParams } from 'react-router-dom'
import { Layout } from '../layout'

export function CustomerPage () {
  const { id } = useParams()
  return (
    <Layout>
      <h1>Customer {id}</h1>
    </Layout>
  )
}
