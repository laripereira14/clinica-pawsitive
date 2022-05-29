import { useState } from "react";

import Testimonial from "./Testimonial";

const Carousel = () => {
    
    const [current, setCurrent] = useState(1);

    const testimonials = [
        { id: 1, text: "Conheci a Pawsitive através da indicação de uma amiga. A equipe médica é muito amorosa e fazem de tudo para nossos bichinhos se sentirem em casa.", owner: ["Diana Santos", "Mãe do Chico"], photo: "testimonial-1.png" },
        { id: 2, text: "Levo a Belle na Pawsitive desde que a adotei. Seja para tomar vacina ou até mesmo quando ela precisou fazer uma cirurgia, sei que não há lugar melhor que essa clínica maravilhosa! Eu e minha bebê amamos a Pawsitive!", owner: ["Maria Prado", "Mãe da Belle"], photo: "testimonial-2.png" },
        { id: 3, text: "Enzo vai na Pawsitive desde que nasceu e estou muito satisfeito com o tratamento que ele recebe. É, sem dúvidas, a melhor clínica da região.", owner: ["Paulo Varanda", "Pai do Enzo"], photo: "testimonial-3.png" }
    ];

    const handleClick = (clickedElId) => setCurrent(clickedElId);
    
    const currentIndex = testimonials.findIndex(el => el.id === current); 

    return (
        <div className="flex flex-col">
            <Testimonial text={testimonials[currentIndex].text} owner={testimonials[currentIndex].owner} photo={testimonials[currentIndex].photo}/>
            <div className="flex space-x-12 justify-center mt-16 text-xl md:mt-5">
                { testimonials.map(el => <p key={el.id} className={`${current === el.id && 'text-primary-pink'} font-semibold transition-all cursor-pointer`} onClick={() => handleClick(el.id)}> {el.id} </p> )}
            </div>
            
        </div>
    )
    
};

export default Carousel;

