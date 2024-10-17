import React from "react"

export default function ContactUs() {
    return (
        <>
            <div className="flex h-full flex-1 flex-col justify-center px-6 py-4 lg:px-8  bg-green-50 ">
                <div className="w-full text-center">
                    <h2 className="mt-10 text-center text-3xl font-bold leading-4 tracking-tight text-blue-900 mb-6">
                        Contact us
                    </h2>
                    <p className="text-wrap text-center">The quickest way to get in touch with us is by using the contact information below.</p>
                </div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-7xl lg:w-full">
                    <form action="#" method="POST" className="space-y-6">
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Username
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="username"
                                    name="text"
                                    type="text"
                                    required
                                    autoComplete="current-password"
                                    className="block w-full bg-transparent rounded-md border-1 py-1.6 lg:p-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    className="block w-full bg-transparent rounded-md border-1  py-1.6 lg:p-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Write your message
                                </label>
                            </div>
                            <div className="mt-2">
                                <textarea
                                    required
                                    className="block w-full bg-transparent rounded-md border-1  py-1.6 lg:p-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="flex w-fit m-auto justify-center border-2 border-black px-8 rounded-3xl py-2 text-lg sm:text-sm  leading-6 text-black font-bold shadow-sm hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                SEND MESSAGE
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
