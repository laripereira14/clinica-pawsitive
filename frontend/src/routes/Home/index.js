import About from './components/About';
import Booking from './components/Booking';
import HeroSection from './components/HeroSection';
import Specialities from './components/Specialties';

const Home = () => {
    return (
        <main className="mt-20 md:mt-28">
            <HeroSection/>
            <About/>
            <Specialities/>
            <Booking/>
        </main>
    );
}

export default Home;
