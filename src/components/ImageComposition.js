import Cat from 'assets/images/2.png';
import PawAndHand from 'assets/images/3.png';
import Ferret from 'assets/images/4.png';
import Dog from 'assets/images/5.png';

const ImageComposition = () => {
    return (
        <div className="relative w-12">
            
            <img src={Cat} className="w-5/6 md:w-3/12 md:absolute top-48 -left-40"/>
            <img src={Ferret} className="w-5/6 md:w-3/12 md:absolute -top-24 left-72"/>
            <img src={Dog} className="w-5/6 md:w-3/12 md:absolute -top-36 -left-32"/>
            <img src={PawAndHand} className="w-5/6 md:w-5/12 md:absolute"/>
        </div>
    )
}

export default ImageComposition;