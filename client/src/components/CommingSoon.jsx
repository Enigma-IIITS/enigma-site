import React from 'react'

const CommingSoon = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
                <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
                    Comming <span className="text-blue-500">Soon !</span>
                </h2>

                <p className="max-w-4xl mt-6 text-center text-gray-500 dark:text-gray-300">
                    This website is still in it's development phase, the feature you are requesting is not yet available. We request you to wait patiently
                </p>

                <div className="inline-flex w-full mt-6 sm:w-auto">
                    <a href="/" className="inline-flex items-center justify-center w-full px-6 py-2 text-white duration-300 bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                        Return to Home
                    </a>
                </div>
            </div>
        </section>
    )
}

export default CommingSoon
