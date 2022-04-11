import About from './components/About';
import HeroSection from './components/HeroSection';
import Specialities from './components/Specialities';

const Home = () => {
    return (
        <main className="mt-20 md:mt-28">
            <HeroSection/>
            <About/>
            <Specialities/>
        </main>
        
    )
}

export default Home;