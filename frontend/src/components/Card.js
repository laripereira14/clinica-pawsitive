const Card = ({ title, description, onClick }) => {

    return (
    <div className="bg-primary-green py-2 px-4 flex items-center justify-between rounded-xl lg:hover:scale-110 cursor-pointer transition" onClick={onClick}>
        <div>
            <h2 className="text-lg font-medium"> {title} </h2>
            <span> {description} </span>
        </div>
        <h2 className="text-4xl"> {'>'} </h2>
    </div>
    );
}
export default Card;