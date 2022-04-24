import DogImg from 'assets/images/6.png';
import Carousel from 'components/Carousel';

import SectionTitle from 'components/SectionTitle';
import Testimonial from 'components/Testimonial';

const About = () => {
    return (
        <section id="about" className="bg-white py-8 px-16 flex flex-col justify-center items-center md:inline-block md:px-20 md:py-12 lg:px-28">
            <SectionTitle classes="text-primary-pink md:mb-10"> Sobre a Pawsitive </SectionTitle>
            <img src={DogImg} className="hidden md:inline-block md:w-5/12 md:float-left md:[shape-outside:url(assets/images/6.png)] md:[shape-margin:1rem] lg:[shape-margin:2rem] lg:w-4/12"/>
            <div className="text-black leading-normal text-justify my-8 order-1 md:leading-loose md:mt-6"> 
                <p>A palavra "paw" significa "pata" em inglês e "positive" significa "positivo". Foi a partir da junção das duas que nasceu a Pawsitive, uma clínica veterinária criada no Rio de Janeiro em 2012 por quem ama animais e sabe como eles devem ser tratados. Aqui, prezamos pelo bem estar do seu companheiro acima de tudo, e por isso, não medimos esforços para entregar uma clínica profissional, higienizada, moderna e completa. </p>
                <p>Nossa equipe profissional é excelente e está preparada para atender desde um banho e tosa a um procedimento cirúrgico. Utilizamos tecnologias avançadas para a realização de nossos serviços, sem deixar de lado o amor pelos animais. Assim como na sua vida, na Pawsitive eles também são os protagonistas e, portanto, serão tratados da melhor maneira. </p>
                <Carousel/>
            </div>
        </section>
    
    );
}

export default About;


