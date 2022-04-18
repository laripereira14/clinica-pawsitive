const PawPatternBackground = ({ children, classes }) => {
    return (
        <section className={`bg-pattern bg-center bg-[length:100rem] md:bg-[length:120%] md:bg-no-repeat ${classes}`}>
           { children }
        </section>
    );
}

export default PawPatternBackground;