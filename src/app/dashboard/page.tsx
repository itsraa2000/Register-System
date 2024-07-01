'use client'

export default function Dashboard() {
    return (
        <>
            <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 py-20">
                <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
                    <button type="button" className="text-white hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900">All categories</button>
                    <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white ">Shoes</button>
                    <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white ">Bags</button>
                    <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white ">Electronics</button>
                    <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white ">Gaming</button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}