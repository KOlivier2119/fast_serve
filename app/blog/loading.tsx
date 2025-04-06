export default function Loading() {
    return (
      <div className="flex items-center justify-center h-screen bg-[#396C03] w-full">
        <svg
          className="animate-spin -ml-1 mr-3 h-10 w-10 text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" />
          <path
            className="opacity-75"
            d="M4 12a8 8 0 1 1 16 0 8 8 0 1 1-16 0"
          />
        </svg>
        <span className="text-white text-2xl font-bold">Loading...</span>
      </div>
    )
  }
  