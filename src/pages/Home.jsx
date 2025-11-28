import { useState, useEffect, useRef } from 'react';

import Landing from '../components/Landing'
import About from "../components/About"
import Items from '../components/Items'
import Reviews from '../components/Reviews'
import Features from '../components/Features'
import Contact from '../components/Contact'
import Navbar from '../components/Navbar'

const Home = () => {

    const navRef = useRef(null)
    const [scrolled, setScrolled] = useState(false)
    
    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            if (!navRef.current) return; // safety check

            if (window.scrollY > lastScrollY) {
                navRef.current.style.top = "-100%";
            } else {
                navRef.current.style.top = "0";
            }
            lastScrollY = window.scrollY;

            setScrolled(window.scrollY > 100);
        }

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id='home'>
            <Navbar navRef={navRef} scrolled={scrolled} />
            <Landing />
            <About />
            <Items />
            <Reviews />
            <Features />
            <Contact />
        </section>
    )
}

export default Home
