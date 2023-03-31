import { useParams } from 'react-router-dom'
import { Layout } from '../layout'

export function EditPage () {
  const { id } = useParams()
  return (
    <Layout>
      <h1>Edit {id}</h1>
    </Layout>
  )
}
