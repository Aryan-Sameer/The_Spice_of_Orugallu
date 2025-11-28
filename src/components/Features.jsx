import { features } from "../utils/lib"
import AnimatedContent from '../utils/AnimatedContent.jsx';
import { FaPhoneAlt } from "react-icons/fa";

const Features = () => {
  return (
    <section id="features" className="bg-[#e3b179] p-4 md:p-6 relative">

      <img
        src="./background/veggies1.webp"
        className="absolute top-0 left-0 opacity-30 lg:opacity-40 pointer-events-none"
        alt="bg-image"
      />

      <img
        src="./background/veggies2.webp"
        className="absolute bottom-0 right-0 opacity-30 lg:opacity-40 pointer-events-none"
        alt="bg-image"
      />

      <div className="flex items-center justify-center gap-6 w-full lg:w-3/4 mx-auto my-4 max-lg:flex-wrap-reverse">
        <div>
          <h1 className="text-4xl sm:text-5xl text-center font-bold pt-2 font-serif relative text-amber-950">
            Catering Sevice
          </h1>
          <p className="my-4 font-semibold text-black text-center max-md:w-full max-lg:w-3/4 mx-auto">
            We offer a wide selection of freshly prepared dishes, customized menus, and flexible serving options for gatherings of any size. Whether it's a family celebration, corporate event, or special occasion, our team ensures timely service, delicious food, and a seamless experience from start to finish
          </p>

          <div className="rounded-full bg-amber-950 w-fit px-4 py-2 mx-auto text-white select-none">
            <p className="flex items-center font-semibold gap-2">
              <FaPhoneAlt /> +91 89781 11072
            </p>
          </div>
        </div>

        <img
          src="./assets/catering.webp"
          alt="catering"
          className="w-full md:w-3/4 lg:w-1/2 rounded-sm" />
      </div>

      <h1 className="text-4xl sm:text-5xl text-center font-bold pt-8 font-serif relative text-amber-950">
        Why Choose Us?
      </h1>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 py-6 w-full lg:w-3/4 mx-auto text-white">
        {
          features.map((feature, index) => {
            return (
              <AnimatedContent
                key={index}
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
                <div className="w-full h-full card-sm rounded-sm shadow-sm bg-amber-950">
                  <div className="card-body">
                    <img src={feature.image} className="w-1/3 mx-auto" alt="feature-icon" />
                    <h2 className="text-center text-lg font-semibold">{feature.title}</h2>
                    <p className="text-center sm:text-sm text-zinc-200">{feature.desc}</p>
                  </div>

                </div>
              </AnimatedContent>
            )
          })
        }
      </div>
      <div className="text-center font-semibold text-amber-950">
        <p>
          Savor the rich spices of Telangana! The Spice of Orugallu Telugu Kitchen is bringing the essence of tradition straight to your plate.
        </p>
        <p>
          From age-old recipes to the bold, aromatic spices of our land, every dish tells a story of heritage and flavor.
        </p>
      </div>
    </section>
  )
}

export default Features
