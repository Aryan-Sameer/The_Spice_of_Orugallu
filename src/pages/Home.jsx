import { useState, useRef } from 'react';

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
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        if (window.scrollY > lastScrollY) {
            navRef.current.style.top = "-100%";
        } else {
            navRef.current.style.top = "0";
        }
        lastScrollY = window.scrollY;

        if (window.scrollY > 100) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    });

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
