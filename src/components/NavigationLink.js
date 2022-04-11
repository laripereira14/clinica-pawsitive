import { Link } from 'react-router-dom';

const NavigationLink = ({ children, path }) => {
    return (
        <li className="md:border-b-4 md:border-transparent md:hover:border-b-4 hover:border-primary-green transition-all"> 
            <Link to={path}> {children} </Link>
        </li>
    )
}

export default NavigationLink;
