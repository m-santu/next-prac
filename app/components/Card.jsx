import Link from 'next/link'


export default function Card({ title, desc, price, ratings, img, href, category }) {

    return (
        <>
            <div className=" m-1 max-w-sm overflow-hidden rounded-lg bg-white shadow-lg">
                <Link href={href} >
                    <img className=" h-36 w-full object-cover object-center" src={img} alt="Product Image" />
                </Link>

                <div className="px-6 py-4 body">
                    <p className=' text-blue-400 ' >{category}</p>
                    <h2 className="mb-2 text-2xl font-bold truncate">{title}</h2>
                    <p className="mb-4 text-sm text-gray-600 line-clamp-3 ">{desc}</p>

                    <div className="flex justify-between">
                        <div className="mb-4 flex items-center">
                            <span className="mr-2 font-semibold tracking-wide text-green-500">${price}</span>
                            <span className="text-sm text-gray-600">| Free shipping</span>
                        </div>
                        <div className="mb-4 flex items-center">
                            <span className="flex text-yellow-400">
                                <svg className="mr-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10 2l-2.565 4.97-4.635 0.674 3.809 3.716-0.797 4.624L10 12.356V2z" />
                                </svg>
                                <span>{ratings}</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
