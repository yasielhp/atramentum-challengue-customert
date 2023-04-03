import { Button } from './Button'

export const Modal = ({ children, title, onClose, onConfirm }) => {
  return (
    <div className='fixed z-40 inset-0 overflow-y-auto'>
      <div className='flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
        <div
          className='fixed inset-0 transition-opacity'
          aria-hidden='true'
          onClick={onClose}
        >
          <div className='absolute inset-0 bg-gray-500 opacity-75' />
        </div>
        <span
          className='hidden sm:inline-block sm:align-middle sm:h-screen'
          aria-hidden='true'
        >
          &#8203;
        </span>
        <div
          className='inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'
          role='dialog'
          aria-modal='true'
          aria-labelledby='modal-headline'
        >
          <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
            <div className='flex justify-between items-center gap-4 w-full'>
              <h4 className='font-semibold'>{title}</h4>
            </div>
            <form className='py-4'>
              {children}
            </form>
          </div>
          <div className='bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse gap-x-2'>
            <Button
              type='submit'
              onClick={onConfirm}
              label='Update'
            />
            <Button
              color='gray'
              type='button'
              onClick={onClose}
              label='Cancel'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
