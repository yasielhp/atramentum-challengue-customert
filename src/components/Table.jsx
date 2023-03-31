import { Link } from 'react-router-dom'
import { formatDate } from '../utils'
import { IconEdit } from './IconEdit'

export const Table = ({ rows, columns }) => {
  return (
    <table className='table-fixed min-w-full'>
      <thead className='bg-gray-100 border-y border-gray-200'>
        <tr>
          {columns.map((column) => (
            <th key={column.id} className='p-4 text-xs text-left text-gray-500 font-medium whitespace-nowrap'>
              {column.name}
            </th>
          ))}
          <th className='p-4 text-xs text-left text-gray-500 font-medium' />
        </tr>
      </thead>
      <tbody className='bg-white divide-y divide-gray-200'>
        {rows.map((row) => {
          return (
            <tr key={row.id} className='text-left hover:bg-gray-100'>
              {columns.map((column) => {
                const value = row[column.id]
                if (column.id === 'createdDate' || column.id === 'lastModifiedDate') {
                  return (
                    <td key={column.id} className='p-4 text-xs text-gray-400 whitespace-nowrap'>
                      {formatDate(value)}
                    </td>
                  )
                } else if (column.id === 'activated') {
                  return (
                    <td key={column.id} className='p-4 text-sm text-gray-900 whitespace-nowrap'>
                      <div className='flex items-center justify-start gap-x-3'>
                        <div className={`w-2 h-2 rounded-full ${value ? 'bg-green-400' : 'bg-red-400'}`} />{value ? 'Active' : 'Inactive'}
                      </div>
                    </td>
                  )
                } else {
                  return (
                    <td key={column.id} className='p-4 text-sm text-gray-900 whitespace-nowrap'>
                      {value}
                    </td>
                  )
                }
              })}
              <td className='p-4 text-sm text-gray-900'>
                <Link to={`/customers/${row.id}/edit`} className='inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 disabled:bg-blue-800 font-medium rounded-lg text-sm px-3 py-2 text-center'><IconEdit /><span className='ml-2 whitespace-nowrap'>Edit customer</span></Link>
              </td>
            </tr>
          )
        }
        )}
      </tbody>
    </table>
  )
}
