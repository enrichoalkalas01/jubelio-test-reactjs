import { useEffect, useState } from "react"

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

import ProductItems from "../../../components/products/product-items"

interface PropsItems {
    id: number,
    title: string,
    sku: string,
    price: number,
    image: string,
}

export default function ProductPage() {
    const [items, setItems] = useState<PropsItems[]>([])

    useEffect(() => {
        setItems([
            { id: 1, title: 'Back End Developer', sku: 'Engineering', price: 10000, image: "" },
            { id: 2, title: 'Front End Developer', sku: 'Engineering', price: 10000, image: "" },
            { id: 3, title: 'User Interface Designer', sku: 'Design', price: 10000, image: "" },
        ])
    }, [])

    return(
        <>
            <div className="bg-gray-100">
                <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-none">
                        <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                            <ul role="list" className="divide-y divide-gray-200">
                                {
                                    items?.map((item, i) => {
                                        return(
                                            <li key={i}>
                                                <a href={`/dashboard/products/${item?.id}`} className="block hover:bg-gray-50">
                                                    <ProductItems
                                                        title={item?.title}
                                                        sku={item?.sku}
                                                        price={item?.price}
                                                        image={item?.image}
                                                    />
                                                </a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        
                            <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
                                {/* Mobile Version */}
                                <div className="flex flex-1 justify-between sm:hidden">
                                    <a
                                        href="#"
                                        className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                                    >
                                        Previous
                                    </a>
                                    <a
                                        href="#"
                                        className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                                    >
                                        Next
                                    </a>
                                </div>
                                {/* Desktop Version */}
                                <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                                    <div>
                                        <p className="text-sm text-gray-700">
                                            Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
                                            <span className="font-medium">97</span> results
                                        </p>
                                    </div>
                                    <div>
                                        <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
                                            <a
                                                href="#"
                                                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                            >
                                                <span className="sr-only">Previous</span>
                                                <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />
                                            </a>
                                            <a
                                                href="#"
                                                aria-current="page"
                                                className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                            >
                                                1
                                            </a>
                                            <a
                                                href="#"
                                                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                            >
                                                2
                                            </a>
                                            <a
                                                href="#"
                                                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                            >
                                                <span className="sr-only">Next</span>
                                                <ChevronRightIcon aria-hidden="true" className="h-5 w-5" />
                                            </a>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}