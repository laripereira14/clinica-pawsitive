import Button from 'components/Button';

import heroimg from 'assets/images/composition.png';


const HeroSection = () => {
    return (
        <div className="flex flex-col justify-center items-center bg-pattern bg-center_top bg-[length:100rem] pb-7 text-black md:bg-[length:120%] md:flex-row md:justify-evenly md:py-14 md:pl-14 md:bg-no-repeat">
           <div className="py-12 space-y-5 text-center">
               <div className="text-4xl font-bold md:text-6xl md:leading-tight"> 
                    <h1> Pense </h1>
                    <span className="text-primary-green">Pawsitive</span>.
               </div>
                <p className="text-lg font-semibold md:text-2xl"> O seu melhor amigo merece. </p>
                <Button> Agendar visita </Button>
           </div>  
           <img src={heroimg} className="w-5/6 md:w-4/12 md:mt-7"/>
        </div>
    )
}

export default HeroSection;

//           <img src={heroimg} className="w-5/6 md:w-4/12 md:mt-7"/><img src={heroimg} className="w-5/6 md:w-5/12 md:mt-7"/>