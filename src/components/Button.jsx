import { Link } from 'react-router-dom'

export const Button = ({ label, type, color, disabled, iconRight, iconLeft, onClick, to, full }) => {
  if (type === 'link') {
    return (
      <Link
        to={to}
        className={`${full ? 'w-full' : 'w-auto'} h-12 flex justify-center items-center gap-x-1 border ${color === 'gray' ? 'text-gray-500 border-gray-300 bg-white hover:bg-gray-50 focus:ring-gray-300' : 'text-white border-blue-600 bg-blue-600 hover:bg-blue-700 focus:ring-blue-300'}  disabled:bg-gray-300 disabled:border-transparent focus:ring-4 focus:outline-none  disabled:cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
      >
        {iconLeft && iconLeft}{label && label}{iconRight && iconRight}
      </Link>
    )
  } else {
    return (
      <button
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={`${full ? 'w-full' : 'w-auto'} h-12 flex justify-center items-center gap-x-1 border ${color === 'gray' ? 'text-gray-500 border-gray-300 bg-white hover:bg-gray-50 focus:ring-gray-300' : 'text-white border-blue-600 bg-blue-600 hover:bg-blue-700 focus:ring-blue-300'}  disabled:bg-gray-300 disabled:border-transparent focus:ring-4 focus:outline-none  disabled:cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
      >
        {iconLeft && iconLeft}{label && label}{iconRight && iconRight}
      </button>
    )
  }
}
