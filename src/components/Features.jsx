import { features } from "../utils/lib"
import AnimatedContent from '../utils/AnimatedContent.jsx';

const Features = () => {
  return (
    <section id="features" className="bg-[#e3b179] p-4 md:p-6">
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
