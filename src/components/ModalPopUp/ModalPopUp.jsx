const ModalPopUp = ({title,children,hide}) => {
  return (
    <>
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
  <div className="relative w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
    {/* Close button */}
    <button
       onClick={()=>hide(false)}
      className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
    >
      ✖
    </button>
    {/* Modal content */}
    <h2 className="mb-4 text-lg font-semibold text-gray-700">{title}</h2>
    <p className="text-gray-600">
      {children}
    </p>
    <div className="mt-6 text-right">
      
    </div>
  </div>
</div>
    </>
  )
}

export default ModalPopUp

