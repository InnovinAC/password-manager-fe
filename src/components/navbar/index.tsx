import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <>

            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl   flex flex-wrap items-center justify-between mx-auto p-4">
                    <NavLink to={'/'} className="flex items-center">
                         <span
                            className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Password Manager.</span>
                    </NavLink>
                    <div className="flex md:block md:order-2">
                        <NavLink to={'/login'}><button type="button"
                                                          className="float-right text-white bg-blue-700  hover:bg-blue-800 ring-slate-900 ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login
                        </button>
                        </NavLink>

                        <NavLink to={'/register'}><button type="button"
                                                          className="float-right text-white bg-blue-700  hover:bg-blue-800 ring-slate-900 ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get
                            started
                        </button>
                        </NavLink>

                    </div>

                </div>
            </nav>

        </>
    )
}

export default Navbar;