import { Link } from "react-router-dom"
import { reserveTableURl } from "../utils/lib";
import AnimatedContent from '../utils/AnimatedContent.jsx';

const Landing = () => {
    return (
        <section
            id="landingPage"
            className="hero min-h-svh"
            style={{
                backgroundImage:
                    "url(./assets/landingImage.webp)",
            }}
        >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center w-full">
                <div className="font-serif">
                    <AnimatedContent
                        distance={30}
                        direction="vertical"
                        reverse={false}
                        duration={1.1}
                        ease="power3.out"
                        initialOpacity={0.4}
                        animateOpacity
                        scale={1.0}
                        threshold={0.2}
                        delay={0.3}
                    >
                        <h1 className="mb-5 max-md:text-4xl max-lg:text-6xl text-8xl">
                            Flavours Inspired By <br />Authentic Telugu Dishes
                        </h1>
                    </AnimatedContent>

                    <AnimatedContent
                        distance={30}
                        direction="vertical"
                        reverse={false}
                        duration={1.1}
                        ease="power3.out"
                        initialOpacity={0.4}
                        animateOpacity
                        scale={1.0}
                        threshold={0.2}
                        delay={0.5}
                    >
                        <p className="mb-5 text-xl font-sans">
                            Restaurant • Catering • Takeaway
                        </p>
                        <Link to="/menu">
                            <button
                                className="btn btn-outline font-sans hover:bg-[#e3b179] border-[#e3b179] shadow-none mr-1">
                                <span className="font-semibold tracking-wider">View Full Menu</span>
                            </button>
                        </Link>
                        <a target="_blank" href={reserveTableURl}>
                            <button
                                className="btn btn-outline font-sans hover:bg-[#e3b179] border-[#e3b179] shadow-none ml-1">
                                <span className="font-semibold tracking-wider">BOOK A TABLE</span>
                            </button>
                        </a>
                    </AnimatedContent>
                </div>
            </div>
        </section>
    )
}

export default Landing
