import About from './About';
import Booking from './Booking';
import HeroSection from './HeroSection';
import Specialities from './Specialties';

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
