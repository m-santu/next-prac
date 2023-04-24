export default async function Product({ params }) {

  const res = await fetch(process.env.PRODUCTS_URL + params.id)
  const product = await res.json()


  return (
    <>
      <main className="grid place-items-start bg-white text-black font-mono max-w-[50rem] mx-auto" >
        <div className="flex h-screen flex-col items-center justify-center">
          <div className=" mt-28">
            <div className="mt-5" >
              <h1 className="mb-4 mt-8 text-3xl font-bold text-center">{product.title}</h1>
              <p className="mr-2 text-right text-lg font-medium text-gray-700">${product.price}</p>
            </div>
            <div className="grid grid-cols-2" >
              <img src={product.image} alt="Product Image" className="mb-4 w-96" />
              <p className="mb-4 text-lg font-medium text-gray-700 line-clamp-6 ">{product.description}</p>
              <button className="rounded bg-yellow-500 px-4 py-2 font-bold text-white hover:bg-yellow-600">Add to Cart</button>
              <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">Buy Now</button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
