const PawPatternBackground = ({ children, classes, ...props }) => {
    return (
        <section className={`bg-pattern bg-center bg-[length:100rem] md:bg-[length:180%] md:bg-no-repeat lg:bg-[length:120%] ${classes}`} {...props}>
           { children }
        </section>
    );
}

export default PawPatternBackground;