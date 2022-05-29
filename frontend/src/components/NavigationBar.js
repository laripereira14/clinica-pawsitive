import { useState } from 'react';

import Logo from 'assets/logo-full.svg';

import { ReactComponent as PhoneIcon } from 'assets/icons/phone.svg';
import { ReactComponent as MenuIcon } from 'assets/icons/menu.svg';

import NavigationLink from './NavigationLink';

const NavigationBar = () => {
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

    return (
        <header className="flex flex-wrap justify-between items-center w-full pt-6 pb-8 px-6 md:px-12 md:flex-wrap z-10 fixed top-0 bg-primary-pink text-white font-medium">
            <div className="md:hidden"><MenuIcon className="h-7 w-7 fill-white" onClick={() => setIsHamburgerOpen(prev => !prev)}/></div>
                <img src={Logo} className="w-7/12 md:w-2/6 md:order-1 lg:w-1/5"/>
                <div className="md:order-2 lg:order-3"> 
                <a href="tel:+55213490-6743"><PhoneIcon className="h-7 w-7 fill-white md:hidden"/></a>
                    <div className="hidden md:block text-center ml-10">
                        <p>(21) 3490-6743</p>
                        <p> Rua Professor Raphael, 52</p>
                        <p> Del Castilho - RJ </p>
                    </div>
                </div>
                <nav className={`${isHamburgerOpen ? 'mt-4 opacity-100' : '-mt-96 opacity-0'} w-full justify-center transition-all md:block md:opacity-100 md:mt-0 md:flex-1 md:pt-3 md:order-3 lg:order-2 lg:pt-0`}>
                    <ul className="flex flex-col items-center pt-5 space-y-3 md:space-y-0 md:justify-center md:space-x-10 text-white font-bold md:flex-row" onClick={() => setIsHamburgerOpen(false)}>
                        <NavigationLink path="/"> Ínicio </NavigationLink>
                        <NavigationLink path="/#about"> Sobre </NavigationLink>
                        <NavigationLink path="/#specialities"> Especialidades </NavigationLink>
                        <NavigationLink path="/#booking"> Agendamento </NavigationLink>
                        <NavigationLink path="login"> Minha Pawsitive </NavigationLink>
                    </ul>
                </nav>
            
        </header>
            
    );
}

export default NavigationBar;
