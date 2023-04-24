'use client'; // Error components must be Client components

import { useRouter } from 'next/navigation';


export default function Error({ error, reset, }) {
    const router = useRouter()

    return (
        <main className='grid place-items-center h-full' >
            <div>
                <h2>Something went wrong!</h2>
                <button onClick={router.back} className="bg-gray-400 rounded p-1" >Go Back</button>
                <button onClick={reset} className="bg-red-400 rounded p-1" >Try again</button>
            </div>
        </main>
    );
}