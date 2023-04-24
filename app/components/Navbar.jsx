import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <nav class="bg-gray-800 p-4">
                <div class="max-w-7xl mx-auto flex justify-between items-center">
                    <div>
                        <Link href="/" class="flex items-center text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 3a7 7 0 017 7c0 1.57-.51 3.02-1.38 4.2l2.16 2.16a1 1 0 01-1.42 1.42l-2.16-2.16A7 7 0 1110 3zm7 7a5 5 0 10-10 0 5 5 0 0010 0z" clip-rule="evenodd" />
                            </svg>
                            <span class="font-bold text-xl">Logo</span>
                        </Link>
                    </div>
                    <div class="flex">
                        <Link href="/" class="ml-4 py-2 px-3 text-gray-300 hover:text-white hover:bg-gray-700 rounded">Home</Link>
                        <Link href="/about" class="ml-4 py-2 px-3 text-gray-300 hover:text-white hover:bg-gray-700 rounded">About</Link>
                        <Link href="/products" class="ml-4 py-2 px-3 text-gray-300 hover:text-white hover:bg-gray-700 rounded">Products</Link>
                    </div>
                </div>
            </nav>

        </>
    )
}
