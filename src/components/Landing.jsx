import { Link } from "react-router-dom"

const Landing = () => {
    return (
        <section
            id="landingPage"
            className="hero min-h-screen"
            style={{
                backgroundImage:
                    "url(./assets/landingImage.png)",
            }}
        >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center w-full">
                <div className="font-serif">
                    <h1 className="mb-5 max-md:text-4xl max-lg:text-6xl text-8xl">
                        Flavours Inspired By <br />Authentic Telugu Dishes
                    </h1>
                    <p className="mb-5 text-xl font-sans">
                        Restaurant • Catering • Takeaway
                    </p>
                    <Link to="/menu">
                        <button
                            className="btn btn-outline font-sans hover:bg-[#e3b179] border-[#e3b179] shadow-none">
                            <span className="font-semibold tracking-wider">View Full Menu</span>
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Landing
