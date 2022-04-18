import Logo from 'assets/logo-full.svg';

import { MenuIcon } from '@heroicons/react/outline';
import { PhoneIcon } from '@heroicons/react/solid'

import NavigationLink from './NavigationLink';

const NavigationBar = () => {
    return (
        <header className="flex justify-between items-center w-full pt-6 pb-8 px-6 md:px-12 md:flex-wrap fixed top-0 bg-primary-pink text-white font-medium">
            <div className="md:hidden"><MenuIcon className="h-7 w-7"/></div>
                <img src={Logo} className="w-1/2 md:w-2/6 md:order-1 lg:w-1/5"/>
                <nav className="hidden md:block mt-4 md:flex-1 md:order-3 lg:order-2">
                    <ul className="flex space-x-10 justify-center text-white font-bold">
                        <NavigationLink path="/"> Ínicio </NavigationLink>
                        <NavigationLink path="/"> Sobre </NavigationLink>
                        <NavigationLink path="/"> Especialidades </NavigationLink>
                        <NavigationLink path="/"> Agendamento </NavigationLink>
                    </ul>
                </nav>
            <div className="md:order-2 lg:order-3"> 
                <PhoneIcon className="h-7 w-7 md:hidden"/> 
                <div className="hidden md:block text-center ml-10">
                    <p>(21) 33490-6743</p>
                    <p> Rua Professor Raphael, 52</p>
                    <p> Del Castilho - RJ </p>
                </div>
            </div>
        </header>
            
    );
}

export default NavigationBar;

/**
 * <div className="hidden md:block h-2/5 p-5 bg-primary-green">
                <ul className="flex space-x-10 justify-center text-primary-pink font-bold">
                    <li> 
                        <Link to={'/'}> Início </Link>
                    </li>
                    <li> 
                        <Link to={'/'}> Sobre a Pawsitive </Link>
                    </li>
                    <li> 
                        <Link to={'/'}> Especialidades </Link>
                    </li>
                    <li> 
                        <Link to={'/'}> Agendamento </Link>
                    </li>
                </ul>
            </div>
 */