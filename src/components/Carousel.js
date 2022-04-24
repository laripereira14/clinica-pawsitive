import { useState } from "react";

import { ReactComponent as ChevronIcon } from 'assets/icons/chevron.svg';

import Testimonial from "./Testimonial";

const Carousel = () => {
    
    const [current, setCurrent] = useState(0);

    const testimonials = [
        { text: "Conheci a Pawsitive através da indicação de uma amiga. A equipe médica é muito amorosa e fazem de tudo para nossos bichinhos se sentirem em casa.", owner: ["Diana", "Mãe do Chico"], photo: "2.png" },
        { text: "Lorem", owner: ["Maria", "Mãe da Bela"], photo: "3.png" }
    ]

    return (
        <div className="flex flex-col">
            
            <Testimonial text={testimonials[current].text} owner={testimonials[current].owner} photo={testimonials[current].photo}/> 
          
        </div>
    )
    
};
export default Carousel;

//  <ChevronIcon className="rotate-90"/>