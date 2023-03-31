import { useEffect, useState } from 'react'

import { Layout } from '../layout'
import { Pagination, Spinner, Table } from '../../components/'

import { getCustomers } from '../../services/api'
import { customerColumns } from '../../utils/data'

export function CustomersPage () {
  const [customers, setCustomers] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(0)
  const [pageSize] = useState(5)

  console.log(customers)

  useEffect(() => {
    setLoading(true)
    getCustomers(page, pageSize, false, 'id')
      .then((data) => {
        setCustomers(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setLoading(false)
      })
  }, [page, pageSize])

  return (
    <Layout>
      <section className='p-4'>
        <h2 className='text-xl font-semibold'>All customers</h2>
      </section>
      <section className='w-full'>
        {loading
          ? (
            <div className='w-full h-full flex justify-center items-center'>
              <Spinner />
            </div>
            )
          : (
            <>
              <Table rows={customers.content} columns={customerColumns} />
              <Pagination
                page={page}
                pageSize={pageSize}
                totalItems={customers.totalElements}
                onPageChange={setPage}
              />
            </>
            )}
      </section>
    </Layout>
  )
}
