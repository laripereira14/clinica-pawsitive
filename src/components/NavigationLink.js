import Link from "./Link";

const NavigationLink = ({ path, children }) => {

    return (
        <li className="md:border-b-4 md:border-transparent md:hover:border-b-4 hover:border-primary-green transition-all"> 
           <Link path={path}> {children} </Link>
        </li>
    )
}

export default NavigationLink;
