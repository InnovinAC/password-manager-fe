import {Link} from "react-router-dom";

const Footer = () => {
    return (
    <div className={'flex w-full justify-center items-center'}>
        <footer className="bg-slate-300 p-2 text-center rounded-lg shadow m-4 dark:bg-gray-800">
            <div className="w-full space-x-3 mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400"><Link to={'/'}
                                                                                          className="hover:underline">Password Manager.</Link>
    </span>
                <p className={'text-sm'}>Designed & Developed By <a className={'text-red-900'} href={'https://linkedin.com/in/innovinanuonye'}>Innovin Anuonye</a></p>
            </div>
        </footer>
    </div>

    )
}

export default Footer;