import Card from "@/app/components/Card"

export default async function Products() {

  const res = await fetch(process.env.PRODUCTS_URL, { cache: 'no-store' })
  const products = await res.json()

  console.log(products)

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 m-2" >
        {products.map((product, ind) => <Card key={ind}
          title={product.title}
          desc={product.description}
          price={product.price}
          ratings={product.rating.rate}
          img={product.image}
          category={product.category}
          href={'/products/' + product.id}

        />)}
      </div>
    </>
  )
}
