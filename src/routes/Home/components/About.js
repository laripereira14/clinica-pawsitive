import DogImg from 'assets/images/6.png';
import SectionTitle from 'components/SectionTitle';

const About = () => {
    return (
        <section className="bg-white py-8 px-16 md:px-10 lg:px-14 flex flex-col justify-center items-center md:block md:px-40 md:py-12">
            <SectionTitle color="primary-pink" classes="md:mb-10"> Sobre a Pawsitive </SectionTitle>
            <img src={DogImg} className="w-5/6 order-2 md:w-5/12 md:mt-6 md:float-left md:[shape-outside:url(assets/images/6.png)] md:[shape-margin:2rem] lg:w-4/12"/>
            <p className="text-black leading-normal text-justify my-8 order-1 md:leading-loose md:mt-6"> A palavra "paw" significa "pata" em inglês e "positive" significa "positivo". Foi a partir da junção das duas que nasceu a Pawsitive, uma clínica veterinária criada por quem ama animais e sabe como eles devem ser tratados. 
            </p>
        </section>
    
    );
}

export default About;

/**<div className="bg-white py-8 px-20 space-y-5 flex flex-col justify-center items-center md:flex-row md:flex-wrap">
           <h2 className="text-3xl font-bold text-primary-pink md:text-4xl md:w-full text-center"> Sobre a Pawsitive </h2>
           <p className="text-black leading-relaxed text-justify md:flex-1 md:order-2 "> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci quia voluptates assumenda alias ullam ad repellendus ut, aspernatur rerum accusantium illo placeat fugiat quasi facere eveniet? Est impedit natus magnam ad nesciunt tenetur vitae mollitia nemo laboriosam nobis pariatur ab adipisci, ipsa suscipit, ratione placeat sunt hic quas, eos officiis eius. Eveniet quae nesciunt quibusdam deleniti ut dolor nobis doloremque laboriosam. Qui aliquid laboriosam fugiat. Unde eveniet odio dolore, incidunt quasi blanditiis ad quod reiciendis, deleniti ipsum nesciunt omnis et vero consequatur perferendis vel laboriosam nemo aliquam sint quae alias recusandae rem enim.  orem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci quia voluptates assumenda alias ullam ad repellendus ut, aspernatur rerum accusantium illo placeat fugiat quasi facere eveniet? Est impedit natus magnam ad nesciunt tenetur vitae mollitia nemo laboriosam nobis pariatur ab adipisci, ipsa suscipit, ratione placeat sunt hic quas, eos officiis eius. Eveniet quae nesciunt quibusdam deleniti ut dolor nobis doloremque laboriosam. Qui aliquid laboriosam fugiat. Unde eveniet odio dolore, incidunt quasi blanditiis ad quod reiciendis, deleniti ipsum nesciunt omnis et vero consequatur perferendis vel laboriosam nemo aliquam sint quae alias recusandae rem enim.orem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci quia voluptates assumenda alias ullam ad repellendus ut, aspernatur rerum accusantium illo placeat fugiat quasi facere eveniet? Est impedit natus magnam ad nesciunt tenetur vitae mollitia nemo laboriosam nobis pariatur ab adipisci, ipsa suscipit, ratione placeat sunt hic quas, eos officiis eius. Eveniet quae nesciunt quibusdam deleniti ut dolor nobis doloremque laboriosam. Qui aliquid laboriosam fugiat. Unde eveniet odio dolore, incidunt quasi blanditiis ad quod reiciendis, deleniti ipsum nesciunt omnis et vero consequatur perferendis vel laboriosam nemo aliquam sint quae alias recusandae rem enim.</p>
            <div className="w-5/6 md:w-4/12 md:order-1 md:float-left md:[shape-outside:url(assets/images/6.png)]"></div>
       </div>
    );
} */
