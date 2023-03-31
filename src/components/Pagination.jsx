import { IconChevronLeft, IconChevronRight } from './'

export const Pagination = ({ page, pageSize, totalItems, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / pageSize)

  const handlePrevious = () => {
    if (page > 0) {
      onPageChange(page - 1)
    }
  }

  const handleNext = () => {
    if (page < totalPages - 1) {
      onPageChange(page + 1)
    }
  }

  return (
    <div className='md:flex sticky min-w-full bottom-0 p-4 bg-white items-center justify-between border-t'>
      <div className='flex justify-start items-center mb-3'>
        <div className='flex'>
          <button className='inline-flex items-center text-gray-300 hover:text-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-400 disabled:text-gray-300 disabled:cursor-not-allowed font-medium rounded-lg text-sm px-3 py-2 text-center' onClick={handlePrevious} disabled={page === 0}>
            <IconChevronLeft />
          </button>
          <button className='inline-flex items-center text-gray-300 hover:text-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-400 disabled:text-gray-300 disabled:cursor-not-allowed font-medium rounded-lg text-sm px-3 py-2 text-center' onClick={handleNext} disabled={page === totalPages - 1}>
            <IconChevronRight />
          </button>
        </div>
        <p className='text-sm'>Showing <strong>{page + 1} - {totalPages}</strong>  of <strong>{totalItems}</strong></p>
      </div>
      <div className='flex gap-x-3 justify-between'>
        <button className='inline-flex w-full justify-center items-center text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 disabled:bg-gray-300 disabled:cursor-not-allowed font-medium rounded-lg text-sm px-3 py-2 text-center' onClick={handlePrevious} disabled={page === 0}>
          <IconChevronLeft /><span className='ml-2'>Previous</span>
        </button>
        <button className='inline-flex w-full justify-center items-center text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 disabled:bg-gray-300 disabled:cursor-not-allowed font-medium rounded-lg text-sm px-3 py-2 text-center' onClick={handleNext} disabled={page === totalPages - 1}>
          <span>Next</span> <IconChevronRight />
        </button>
      </div>
    </div>
  )
}
