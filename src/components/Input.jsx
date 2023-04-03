export const Input = ({ label, type, value, name, onChange, disabled, placeholder, required }) => {
  return (
    <div>
      <label htmlFor={name} className='block mb-2 text-sm font-medium text-gray-900'>{label}</label>
      <input disabled={disabled} onChange={onChange} type={type} name={name} value={value} id={name} className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg disabled:text-gray-300 disabled:bg-slate-100 focus:ring-blue-600 focus:border-blue-600 block w-full  h-12 p-2.5' placeholder={placeholder} required={required} />
    </div>
  )
}
