
export default function productLoading() {
    return (
        <>
            <main class="p-5 bg-white text-black font-mono max-w-[50rem] mx-auto">
                <div class="flex h-screen flex-col items-center justify-center">
                    <div class="mt-28">
                        <div class="mt-5">
                            <h1 class="mb-4 mt-8 text-xl font-bold text-center animate-pulse">Product Title</h1>
                            <p class="mr-2 text-right text-lg font-medium text-gray-700 animate-pulse">$00.00</p>
                        </div>
                        <div class="grid grid-cols-2 gap-4">
                            <div class="w-full h-96 bg-gray-200 animate-pulse"></div>
                            <div class="space-y-4 animate-pulse">
                                <div class="w-3/4 h-4 bg-gray-200"></div>
                                <div class="w-1/2 h-4 bg-gray-200"></div>
                                <div class="w-2/3 h-4 bg-gray-200"></div>
                                <div class="w-full h-4 bg-gray-200"></div>
                                <div class="w-2/3 h-4 bg-gray-200"></div>
                                <div class="w-1/2 h-4 bg-gray-200"></div>
                            </div>
                            <button class="w-full rounded bg-yellow-500 px-4 py-2 font-bold text-white hover:bg-yellow-600 animate-pulse">Add to Cart</button>
                            <button class="w-full rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 animate-pulse">Buy Now</button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
