
import { Link } from 'react-router-dom';

const Resume = () => {
  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl shadow-lg p-4 sm:p-6 md:p-8 mx-2 sm:mx-4 my-8 sm:my-12 w-full max-w-2xl mx-auto">
      <Link to="/" className="flex items-center text-blue-600 hover:text-blue-800 font-semibold text-base sm:text-lg mb-6 self-start sm:self-center transition-colors">
        <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        <span>Back Home</span>
      </Link>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 sm:h-20 sm:w-20 text-blue-500 mb-6 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" />
      </svg>
      <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 text-center">Page Under Maintenance</h1>
      <p className="text-base sm:text-lg text-gray-600 mb-6 text-center max-w-xl">
        Sorry, the Resume page is currently under maintenance.<br />
        Please check back soon!
      </p>
      <span className="inline-block bg-yellow-200 text-yellow-800 px-4 py-2 rounded-full font-semibold animate-pulse text-sm sm:text-base">
        We'll be back shortly
      </span>
    </div>
    
  </>
)

}

export default Resume
