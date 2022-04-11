import { ExamIcon } from "./SVGIcons";


  
const Card = () => {
    return (
        <div className="cursor-pointer text-white flex flex-col justify-center items-center">
            <ExamIcon className="fill-white h-16 md:hover:h-20 hover:transition-all"/>
            <h4 className="font-semibold mt-4 text-lg"> Exames </h4>
        </div>
    );
}

export default Card;