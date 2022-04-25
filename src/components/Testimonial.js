const Testimonial = ({ text, photo, owner, ...props }) => {
    return (
        <div className="flex flex-col items-center mt-8 text-neutral-600 md:p-8 md:flex-row md:items-start" {...props}>
            <blockquote className="p-4 text-lg italic border-l-4 border-primary-pink">
                <p className="mb-4">"{text}"</p>    
                <cite className="flex flex-col items-start text-base italic">
                    <span className="mb-1 t font-bold"> {owner[0]} </span>
                    <span> {owner[1]} </span>
                </cite>
            </blockquote>
            <img src={require(`assets/images/${photo}`)} className="w-5/6 mt-5 md:ml-5 md:w-3/12 lg:w-2/12"/>
        </div>
    );
}

export default Testimonial;
