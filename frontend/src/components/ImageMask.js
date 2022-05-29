const ImageMask = ({ imagePath, altText, side, imageClasses, children }) => {
    const img = require(`assets/images/${imagePath}`);
    return (
        <>
            <img src={img} alt={altText} className={`md:[shape-margin:1rem] lg:[shape-margin:2rem] ${imageClasses}`} style={{ shapeOutside: `url(${img})`, float: `${side}`}}/>
            <div className={`leading-normal text-justify my-8 md:leading-loose md:mt-6`}> 
                {children}
            </div>
        </>
    )
}

export default ImageMask;
