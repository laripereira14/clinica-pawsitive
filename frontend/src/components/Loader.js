import { ReactComponent as Paw } from 'assets/icons/paw.svg';

const Loader = () => {
    const pawClasses = 'w-10 h-10 animate-paw-loader opacity-0';
    const oddPawClasses = '-rotate-12';
    const evenPawClasses = 'rotate-12 translate-x-4';
    return (
        <div className='rotate-90'>
           <div className={`${pawClasses} ${oddPawClasses} [animation-delay:2.75s]`}><Paw/></div> 
           <div className={`${pawClasses} ${evenPawClasses} [animation-delay:2.5s]`}><Paw/></div> 
           <div className={`${pawClasses} ${oddPawClasses} [animation-delay:2.25s]`}><Paw/></div> 
           <div className={`${pawClasses} ${evenPawClasses} [animation-delay:2s]`}><Paw/></div> 
           <div className={`${pawClasses} ${oddPawClasses} [animation-delay:1.75s]`}><Paw/></div> 
           <div className={`${pawClasses} ${evenPawClasses} [animation-delay:1.5s]`}><Paw/></div> 
        </div>
    );
}

export default Loader;
