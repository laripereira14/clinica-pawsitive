const Button = ({ children, classes }) => {
    return (
        <button className={`  
        py-3
        px-4
        bg-primary-pink 
        rounded-xl
        min-w-[12rem]
        w-max 
        text-white 
        font-medium
        hover:bg-secondary-pink
        transition
        md:hover:scale-110
        ${classes}`
        }> 
            {children} 
        </button>
    )
}

export default Button;