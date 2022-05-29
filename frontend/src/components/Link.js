import { HashLink } from 'react-router-hash-link';

const Link = ({ children, path, ...props }) => {

    const handleScroll = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -150; 
        window.scrollTo({ behavior: 'smooth', top: yCoordinate + yOffset }); 
    }

    return <HashLink to={path} scroll={handleScroll} {...props}> {children} </HashLink>
}

export default Link;
