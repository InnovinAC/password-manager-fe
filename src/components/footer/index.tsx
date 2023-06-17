const Footer = () => {
    return (
    <div className={'flex justify-center items-center'}>
        <footer className="bg-slate-300 fixed bottom-0 text-center rounded-lg shadow m-4 dark:bg-gray-800">
            <div className="w-full space-x-3 mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400"><a href="/"
                                                                                          className="hover:underline">Password Manager.</a>
    </span>
                <p className={'text-sm'}>Designed & Developed By <a className={'text-red-900'} href={'https://linkedin.com/in/innovinanuonye'}>Innovin Anuonye</a></p>
            </div>
        </footer>
    </div>

    )
}

export default Footer;