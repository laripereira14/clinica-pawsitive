import { ReactComponent as PhoneIcon } from 'assets/icons/phone.svg';
import { ReactComponent as WhatsappIcon } from 'assets/icons/whatsapp.svg';
import { ReactComponent as MailIcon } from 'assets/icons/mail.svg';
import { ReactComponent as LocationMarkerIcon } from 'assets/icons/location-marker.svg';
import { ReactComponent as InstagramIcon } from 'assets/icons/instagram.svg';
import { ReactComponent as TikTokIcon } from 'assets/icons/tiktok.svg';
import { ReactComponent as FacebookIcon } from 'assets/icons/facebook.svg';

import img from 'assets/images/2.png';


const Footer = () => {
    return (
        <footer className="pt-12 pb-8 px-10 bg-primary-pink text-white md:flex-row md:items-center lg:pt-20 lg:px-20 lg:pb-12 lg:items-start">
            <div className="flex flex-col md:flex-row md:flex-wrap">
                <div className="space-y-3 md:order-1 lg:mr-auto">
                    <span className="font-semibold text-2xl"> Contato </span>
                    <span className="flex items-start"><LocationMarkerIcon className="h-7 w-7 mr-1 fill-white"/> Rua Professor Raphael, 52 - Del Castilho - RJ </span>
                    <span className="flex items-center"><MailIcon className="h-7 w-7 mr-2 fill-white"/> contato@pawsitive.com</span>
                    <span className="flex items-center"><PhoneIcon className="h-7 w-7 mr-2 fill-white"/> (21) 3490-6743</span>
                    <span className="flex items-center"><PhoneIcon className="h-7 w-7 mr-2 fill-white"/> (21) 3495-2621</span>
                    <span className="flex items-center"><WhatsappIcon className="h-7 w-7 mr-2 fill-white"/> (21) 99271-2449</span>
                </div>
                
                <div className="my-8 md:-mt-5 md:mb-8 md:order-3 md:w-max lg:mx-auto lg:mt-0">
                    <span className="font-semibold text-2xl"> Pawsitive na rede sociAU </span>
                    <div className="flex flex-col space-y-5 justify-center mt-5 cursor-pointer md:justify-start md:flex-row md:space-y-0 md:space-x-5 lg:justify-center lg:flex-col lg:space-x-0 lg:space-y-5">
                        <span className="flex items-center"><InstagramIcon className="h-7 w-7 fill-white mr-2"/> @clinica.pawsitive </span>
                        <span className="flex items-center"><FacebookIcon className="h-7 w-7 fill-white mr-2"/> Clínica Pawsitive</span>
                        <span className="flex items-center"><TikTokIcon className="h-7 w-7 fill-white mr-2"/> @clinica.pawsitive</span>
                    </div>
                </div>  
                <img src={img} className="hidden md:order-2 md:inline-block md:w-5/12 md:flex-1 lg:w-3/12 lg:flex-none lg:order-3 lg:ml-auto"/>
            </div>
            <p className="text-center md:order-4"> Copyright © 2022. Todos os direitos reservados. </p>
        </footer>
    )
}

export default Footer;
