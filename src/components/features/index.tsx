const Features = () => {
    return (
        <section className="mb-32 text-center">
            <h2 className="mb-20 text-3xl font-bold">Why it's super cool?</h2>

            <div className="grid lg:grid-cols-3 sm:grid-cols-2 sm:gap-x-6 mx-6 lg:gap-x-12">
                <div className="mb-12 lg:mb-0">
                    <div
                        className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                        <div className="flex justify-center">
                            <div className="-mt-8 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-md">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                </svg>


                            </div>
                        </div>
                        <div className="p-6">
                            <h5 className="mb-4 text-lg font-semibold">Encrypted & Secure Passwords</h5>
                            <p>
                                Your passwords will be uniquely encrypted and stored in the cloud.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mb-12 lg:mb-0">
                    <div
                        className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                        <div className="flex justify-center">
                            <div className="-mt-8 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-md">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                                    <rect x="3" y="8" width="18" height="8" rx="3" />
                                    <line x1="8" y1="3" x2="16" y2="3" />
                                    <line x1="8" y1="21" x2="16" y2="21" />
                                    <line x1="12" y1="3" x2="12" y2="8" />
                                    <line x1="12" y1="16" x2="12" y2="21" />
                                </svg>

                            </div>
                        </div>
                        <div className="p-6">
                            <h5 className="mb-4 text-lg font-semibold">OTP Logins</h5>
                            <p>
                                No need to login with a password on this platform. Use only an OTP or a 2FA mechanism.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="">
                    <div
                        className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                        <div className="flex justify-center">
                            <div className="-mt-8 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-md">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                                    <circle cx="12" cy="12" r="10" />
                                    <line x1="12" y1="8" x2="12" y2="16" />
                                    <line x1="8" y1="12" x2="16" y2="12" />
                                </svg>

                            </div>
                        </div>
                        <div className="p-6">
                            <h5 className="mb-4 text-lg font-semibold">Categorize Passwords</h5>
                            <p>
                                Place your passwords into categories based on whatever you desire.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features;