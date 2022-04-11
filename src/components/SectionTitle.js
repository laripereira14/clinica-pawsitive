const SectionTitle = ({ color, classes, children }) => {
    return <h2 className={`text-3xl font-bold text-${color} md:text-4xl text-center ${classes}`}>{children}</h2>
}

export default SectionTitle;