import Carousel from 'components/Carousel';
import ImageMask from 'components/ImageMask';
import SectionTitle from 'components/SectionTitle';

const About = () => {
    return (
        <section id="about" className="bg-white py-8 px-16 flex flex-col justify-center items-center text-black md:inline-block md:px-20 md:py-12 lg:px-28">
            <SectionTitle classes="text-primary-pink md:mb-10"> Sobre a Pawsitive </SectionTitle>
            <ImageMask imagePath="1.png" altText="dog" side="left" imageClasses="hidden md:inline-block md:w-5/12 lg:w-4/12">
                    <p>A palavra "paw" significa "pata" em inglês e "positive" significa "positivo". Foi a partir da junção das duas que nasceu a Pawsitive, uma clínica veterinária criada no Rio de Janeiro em 2012 por quem ama animais e sabe como eles devem ser tratados. Aqui, prezamos pelo bem estar do seu companheiro acima de tudo, e por isso, não medimos esforços para entregar uma clínica profissional, higienizada, moderna e completa. </p>
                    <p>Nossa equipe profissional é excelente e está preparada para atender desde um banho e tosa a um procedimento cirúrgico. Utilizamos tecnologias avançadas para a realização de nossos serviços, sem deixar de lado o amor pelos animais. Assim como na sua vida, na Pawsitive eles também são os protagonistas e, portanto, serão tratados da melhor maneira. </p>
                    <Carousel/>
            </ImageMask>
        </section>
    
    );
}

export default About;
