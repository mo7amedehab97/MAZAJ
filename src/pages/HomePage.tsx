import About from '../components/About';
import ContactSection from '../components/ContactSection';
import Dishes from '../components/Dishes';
import Expertise from '../components/Expertise';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Mission from '../components/Mission';
import Navbar from '../components/Navbar';
import Review from '../components/Review';

export default function HomePage() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <main className='overflow-x-hidden antialiased text-neutral-200'>
                <Dishes />
                <About />
                <Mission />
                <Expertise />
                <Review />
                <ContactSection />
            </main>
            <Footer />
        </>
    )
}
