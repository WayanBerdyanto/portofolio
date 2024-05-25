import { useState, useContext, useEffect } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import MaterialUISwitch from "../Buttons/Switch";
import { ColorModeContext } from '../Theme/Theme';

function Header() {
    const [toggleNavbar, setToggleNavbar] = useState(false);
    const { toggleColorMode } = useContext(ColorModeContext);
    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 0) {
                setNavbarFixed(true);
            } else {
                setNavbarFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [navbarFixed, setNavbarFixed] = useState(false);
    return (
        <>
            <header className={`py-4 px-12 bg-transparent top-0 left-0 z-10 border-b-[1px] border-primary border-opacity-50 ${navbarFixed ? 'navbar-fixed' : ''}`}>
                <nav className="flex flex-wrap items-center justify-between">
                    <div className="text-lg font-bold uppercase">
                        <span className="block text-primary dark:text-primary">Wayan</span>
                        <span className="block text-dark dark:text-light">Berdyanto</span>
                    </div>

                    <div className="text-dark hidden md:inline-block font-semibold text-xl">
                        <MaterialUISwitch onChange={toggleColorMode} className="mr-14" />
                        <a className="mt-10 mr-14 duration-500 dark:text-light hover:text-primary dark:hover:text-primary" href="#home">Home</a>
                        <a className="mr-14 duration-500 dark:text-light hover:text-primary dark:hover:text-primary" href="#about">About</a>
                        <a className="mr-14 duration-500 dark:text-light hover:text-primary dark:hover:text-primary" href="#gallery">Gallery</a>
                        <a className="duration-500 dark:text-light hover:text-primary dark:hover:text-primary" href="#contact">Contact</a>
                    </div>
                </nav>
            </header>

            <div
                className="fixed top-5 right-5 cursor-pointer z-9999 md:hidden"
                onClick={() => setToggleNavbar(toggleNavbar ? false : true)}>
                {toggleNavbar ? <CloseIcon className="text-light duration-500 hover:text-secondary" /> : <MenuIcon className="duration-500 hover:text-primary " />}
            </div>

            {/* Start Responsive Mobile */}
            <div className={`fixed top-0 right-0 h-full bg-primary w-1/2 p-5 rounded-l-lg transition-transform transform md:hidden text-xl ps-8 z-999 ${toggleNavbar ? '-translate-x-0' : 'translate-x-full'}`}>
                <MaterialUISwitch onChange={toggleColorMode} />
                <a className="text-light mt-8 mb-7 block duration-500 hover:text-secondary" href="#home">Home</a>
                <a className="text-light mb-7 block duration-500 hover:text-secondary" href="#about">About</a>
                <a className="text-light mb-7 block duration-500 hover:text-secondary" href="#gallery">Gallery</a>
                <a className="text-light mb-7 block duration-500 hover:text-secondary" href="#contact">Contact</a>
            </div>
            {/* End Responsive Mobile */}
        </>
    );
}

export default Header;