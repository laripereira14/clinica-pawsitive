import Logo from 'assets/logo-full.svg';

import { MenuIcon,  } from '@heroicons/react/outline';
import { PhoneIcon } from '@heroicons/react/solid'

import NavigationLink from './NavigationLink';

const NavigationBar = () => {
    return (
        <header className="flex justify-between items-center w-full pt-6 pb-8 px-6 md:justify-evenly fixed top-0 bg-primary-pink text-white font-medium">
            <div className="md:hidden"><MenuIcon className="h-7 w-7"/></div>
                <img src={Logo} className="w-1/2 md:w-2/12"/>
                <nav className="hidden md:block mt-4">
                    <ul className="flex space-x-10 justify-center text-white font-bold">
                        <NavigationLink path="/"> Ínicio </NavigationLink>
                        <NavigationLink path="/"> Sobre </NavigationLink>
                        <NavigationLink path="/"> Especialidades </NavigationLink>
                        <NavigationLink path="/"> Agendamento </NavigationLink>
                    </ul>
                </nav>
            <div> 
                <PhoneIcon class="h-7 w-7 md:hidden"/> 
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