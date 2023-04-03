import { formatDate, formatIBAN } from '../utils'
import { Button } from './Button'

export const Table = ({ rows, columns, url, buttonText, iconText, onClick }) => {
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
                } else if (column.id === 'iban') {
                  return (
                    <td key={column.id} className='p-4 text-sm text-gray-900 whitespace-nowrap'>
                      <span className='font-medium flex gap-x-2'>
                        {formatIBAN(value)}
                      </span>
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
              <td className='p-4 text-sm text-gray-900 text-right flex justify-end items-center'>
                {
                  url
                    ? (
                      <Button
                        type='link'
                        label={buttonText}
                        iconRight={iconText}
                        to={`/${url}/${row.id}`}
                      />
                      )
                    : (
                      <Button
                        label={buttonText}
                        iconRight={iconText}
                        onClick={() => onClick(row.id)}
                      />
                      )
                }
              </td>
            </tr>
          )
        }
        )}
      </tbody>
    </table>
  )
}
