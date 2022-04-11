import Button from 'components/Button';

import heroimg from 'assets/images/composition.png';


const HeroSection = () => {
    return (
        <div className="flex flex-col justify-center items-center bg-pattern bg-center_top bg-[length:100rem] pb-7 text-black md:bg-[length:120%] md:flex-row md:justify-evenly md:p-14 md:bg-no-repeat">
           <div className="py-12 space-y-5 text-center md:mt-12">
               <div className="text-5xl md:text-[2.75rem] font-bold md:leading-tight lg:text-6xl"> 
                    <h1> Pense </h1>
                    <span className="text-primary-green">Pawsitive</span>.
               </div>
                <p className="text-lg font-semibold lg:text-2xl"> O seu melhor amigo merece. </p>
                <Button> Agendar visita </Button>
           </div>  
           <img src={heroimg} className="w-10/12 md:w-3/6 md:mt-7 md:ml-6 lg:w-5/12 "/>
        </div>
    )
}

export default HeroSection;

//           <img src={heroimg} className="w-5/6 md:w-4/12 md:mt-7"/><img src={heroimg} className="w-5/6 md:w-5/12 md:mt-7"/>