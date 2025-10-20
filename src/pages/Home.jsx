import Landing from '../components/Landing'
import About from "../components/About"
import Items from '../components/Items'
import Reviews from '../components/Reviews'
import Features from '../components/Features'
import Contact from '../components/Contact'

const Home = () => {
    return (
        <section id='home'>
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
