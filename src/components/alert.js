const ErrorClass = 'bg-red-100 text-red-800 '
const SuccessClass = 'bg-green-100 text-green-800 '

const Alert = ({ type, message }) => {
    return (
        <div
            className={`${
                type === 'error' ? ErrorClass : SuccessClass
            } px-4 py-4 rounded`}
            role="alert"
        >
            <strong className="font-bold text-base mr-4">
                {type === 'error' ? 'Error' : 'Success'}!
            </strong>
            <span className="block text-sm sm:inline max-sm:mt-1">
                {message}
            </span>
        </div>
    )
}

export default Alert
