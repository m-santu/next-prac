import Link from "next/link"

export default function page404() {

    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
            <svg width={200} xmlns="sad " viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-frown mb-4">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M16 16s-1.5-2-4-2-4 2-4 2"></path>
                <line x1="9" y1="9" x2="9.01" y2="9"></line>
                <line x1="15" y1="9" x2="15.01" y2="9"></line>
            </svg>
            <h1 className="text-4xl font-bold mb-2">Page Not Found</h1>
            <p className="mb-4">
                The page you're looking for doesn't exist or has been moved.
            </p>
            <Link href={"/"} >
                <button className="rounded bg-gray-800 hover:bg-gray-700 py-2 px-4">
                    Go Back To Home
                </button>
            </Link>
        </div>
    )
}
