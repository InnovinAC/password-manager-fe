import {useRef} from "react";

const Authentication = (props: any) => {
    const otpRef = useRef();
    return (
        // <section className="h-screen">
        <>
            {/*<div className="container items-center px-6 py-24">*/}
            {/*<h1 className={'uppercase text-4xl underline  text-center'}>{props.type}</h1>*/}
            <div
                className="flex flex-col mt-32 items-center md:flex-row h-full flex-wrap space-y-4 space-x-1 justify-center">

                <div className="mb-12 md:mb-0 md:w-8/12 w-96 lg:w-6/12">
                    <img
                        src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                        className="w-full"
                        alt="Phone image"/>
                </div>

                <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
                    <form>

                        <div className="relative mb-6">
                            <input
                                type="text"
                                className="peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[2.15] transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                id="email"
                                placeholder="Email address"/>
                            <label
                                htmlFor="exampleFormControlInput3"
                                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                            >Email address
                            </label>
                        </div>


                        <div className="hidden relative mb-6">
                            <input
                                type="password"
                                className="peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                id="exampleFormControlInput33"
                                placeholder="otp"/>
                            <label
                                htmlFor="exampleFormControlInput33"
                                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                            >OTP
                            </label>
                        </div>


                        <button
                            type="submit"
                            className="inline-block w-full rounded bg-blue-500 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                            data-te-ripple-color="light">
                            Login
                        </button>




                    </form>
                </div>
            </div>
            {/*</div>*/}
        </>

    )
}

export default Authentication;