'use client'; // Error components must be Client components

import { useRouter } from 'next/navigation';


export default function Error({ error, reset, }) {
    const router = useRouter()

    return (

        <main className="flex h-screen items-center justify-center bg-gray-800">
            <div className="rounded bg-gray-900 p-8 shadow-lg">
                <div className="flex justify-center">
                    <svg xmlns="sad " viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-frown">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M16 16s-1.5-2-4-2-4 2-4 2"></path>
                        <line x1="9" y1="9" x2="9.01" y2="9"></line>
                        <line x1="15" y1="9" x2="15.01" y2="9"></line>
                    </svg>
                </div>

                <h2 className="mb-4 text-3xl font-bold text-white">Error</h2>
                <p className="mb-8 text-lg text-white">{error.message}</p>
                <div className="flex justify-between">
                    <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600" onClick={router.back}>Back</button>
                    <button className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-600" onClick={reset}>Try Again</button>
                </div>
            </div>
        </main>

    );
}