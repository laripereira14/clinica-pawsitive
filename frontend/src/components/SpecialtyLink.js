const SpecialtyLink = ({ icon, title, ...props }) => {
    
    return (
        <div className="cursor-pointer flex flex-col justify-center items-center md:hover:scale-125 md:hover:transition-all" {...props}>
            <img src={require(`assets/icons/${icon}.png`)} className="h-16"/>
            <h4 className="font-semibold mt-4 text-lg"> {title} </h4>
        </div>
    );
}

export default SpecialtyLink;