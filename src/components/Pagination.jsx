import { IconChevronLeft, IconChevronRight, Button } from './'

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
        <div className='flex gap-x-2 mr-2'>
          <Button
            disabled={page === 0}
            onClick={handlePrevious}
            iconLeft={<IconChevronLeft />}
          />
          <Button
            disabled={page === totalPages - 1}
            onClick={handleNext}
            iconRight={<IconChevronRight />}
          />
        </div>
        <p className='text-sm'>Showing <strong>{page + 1} - {totalPages}</strong>  of <strong>{totalItems}</strong></p>
      </div>
      <div className='flex gap-x-3 justify-between'>
        <Button
          disabled={page === 0}
          onClick={handlePrevious}
          iconLeft={<IconChevronLeft />}
          label='Previous'
        />
        <Button
          disabled={page === totalPages - 1}
          onClick={handleNext}
          iconRight={<IconChevronRight />}
          label='Next'
        />
      </div>
    </div>
  )
}
