
export default function CardScelaton() {
    return (
        <>
            <div className="m-1 max-w-sm overflow-hidden rounded-lg bg-white shadow-lg animate-pulse">
                <div className="h-36 w-full bg-gray-200"></div>
                <div className="px-6 py-4">
                    <div className="mb-4 w-1/2 h-4 bg-gray-200"></div>
                    <div className="mb-2 w-full h-6 bg-gray-200"></div>
                    <div className="mb-4 w-full h-4 bg-gray-200"></div>
                    <div className="mb-2 w-1/4 h-4 bg-gray-200"></div>
                    <div className="mb-2 w-1/2 h-4 bg-gray-200"></div>
                    <div className="mb-4 w-full h-4 bg-gray-200"></div>
                    <div className="flex justify-between">
                        <div className="mb-4 flex items-center">
                            <span className="mr-2 font-semibold tracking-wide text-green-500">$0</span>
                            <span className="text-sm text-gray-600">| Free shipping</span>
                        </div>
                        <div className="mb-4 flex items-center">
                            <span className="flex text-yellow-400">
                                <svg className="mr-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10 2l-2.565 4.97-4.635 0.674 3.809 3.716-0.797 4.624L10 12.356V2z" />
                                </svg>
                                <span>0.0</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
