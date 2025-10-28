import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa6";
import AnimatedContent from '../utils/AnimatedContent.jsx';

const About = () => {
  return (
    <section id="About" className="hero bg-[#e3b179] min-h-svh relative">
      <img
        src="./background/veggies1.png"
        className="absolute top-0 left-0 opacity-30 lg:opacity-40 pointer-events-none"
        alt="bg-image"
      />

      <img
        src="./background/veggies2.png"
        className="absolute bottom-0 right-0 opacity-30 lg:opacity-40 pointer-events-none"
        alt="bg-image"
      />

      <div className="hero-content flex-col lg:flex-row gap-6">
        <div className="w-full text-center">
          <h1 className="text-5xl font-bold py-4 text-amber-950 font-serif">Who are we?</h1>
          <h1 className="text-xl text-black font-bold"> The Soul of Telangana. The Spirit of Fine Dining.</h1>
          <p className="py-4 text-black font-semibold">
            Located along the serene Warangal Highway near Narapally, The Spice of Orugallu blends Telangana's timeless flavors with the elegance of fine dining. With its warm, earthy ambiance and authentic culinary craft, it offers the perfect space for family gatherings, romantic dinners, or peaceful moments on the go. Every dish is a tribute to tradition — refined, heartfelt, and unforgettable.
          </p>
          <div className="rounded-full bg-amber-950 w-fit px-4 py-2 mx-auto text-white select-none">
            <p className="flex items-center font-semibold">
              1K +
              <span className="flex items-center text-yellow-500 mx-1">
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalf />
              </span>
              4.6 Star Rating
            </p>
          </div>
        </div>

        <AnimatedContent
          distance={20}
          direction="vertical"
          reverse={false}
          duration={1.1}
          ease="power3.out"
          initialOpacity={0.6}
          animateOpacity
          scale={1.0}
          threshold={0.2}
          delay={0.3}
        >
          <div
            className="relative"
            style={{
              background: "url('./background/pattern2.png')",
            }}>
            <img
              src="./about/about_us_1.jpg"
              className="rounded-lg p-8"
              alt="about us"
            />
            <img
              src="./about/about_us_2.png"
              className="rounded-lg absolute w-2/5 bottom-[-6%] left-[-2%] shadow-md brightness-[1.1] hover:scale-[0.99] duration-200"
              alt="about us"
            />
            <img
              src="./about/about_us_3.png"
              className="rounded-lg absolute w-2/5 top-[-6%] right-[-2%] shadow-md brightness-[1.1] hover:scale-[1.02] duration-200"
              alt="about us"
            />
          </div>
        </AnimatedContent>
      </div>
    </section>
  )
}

export default About
