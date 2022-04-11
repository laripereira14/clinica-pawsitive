const Button = ({ variant, children }) => {
    return (
        <button className="
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
        "> 
            {children} 
        </button>
    )
}

export default Button;