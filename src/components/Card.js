import { ReactComponent as GroomingIcon } from 'assets/icons/grooming.svg';

const Card = ({ icon, title }) => {

    const icons = {
        grooming: GroomingIcon,
        
    }
    
    return (
        <div className="cursor-pointer flex flex-col justify-center items-center md:hover:scale-125 md:hover:transition-all">
            <img src={require(`assets/icons/${icon}.png`)} className="h-16"/>
            <h4 className="font-semibold mt-4 text-lg"> {title} </h4>
        </div>
    );
}

export default Card;