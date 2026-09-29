/* eslint-disable react/prop-types */
const Alert = ({ message, type, onClose }) => {
  const isError = type === "error";
  return (
    <div className='absolute top-10 left-0 right-0 flex justify-center items-center z-10'>
      <div
        className={`p-2 ${
          isError ? "bg-red-800" : "bg-green-700"
        } items-center text-white leading-none lg:rounded-full flex lg:inline-flex`}
        role='alert'
      >
        <p
          className={`flex rounded-full ${
            isError ? "bg-red-500" : "bg-green-500"
          } uppercase px-2 py-1 text-xs font-semibold mr-3`}
        >
          {isError ? "Failed" : "Success"}
        </p>
        <p className='mr-2 text-left'>{message}</p>
        {onClose && (
          <button type='button' onClick={onClose} aria-label='Dismiss' className='ml-1 px-2'>
            ×
          </button>
        )}
      </div>
    </div>
  );
};

export default Alert;
