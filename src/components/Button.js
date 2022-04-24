import Link from "./Link";

const Button = ({ children, classes, href }) => {
    return (
        <Link path={href}>
            <button className={`  
                py-3
                px-4
                mt-6
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
        </Link>
    )
}

export default Button;