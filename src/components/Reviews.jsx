import GalleryPreview from "./GalleryPreview"
import { RiDoubleQuotesL } from "react-icons/ri";
import { reviewsUrl } from "../utils/lib";
import { reviews } from "../utils/lib";
import AnimatedContent from '../utils/AnimatedContent.jsx';

const Reviews = () => {

  return (
    <section id="reviews" className="bg-[#161718] lg:pb-8 relative max-lg:bg-[url'background/pattern2.png')]">
      <img
        src="./background/veggies4.png"
        className="hidden lg:block absolute bottom-0 right-0 pointer-events-none"
        alt="bg-image"
      />

      <img
        src="./background/veggies3.png"
        className="hidden lg:block absolute bottom-0 pointer-events-none"
        alt="bg-image"
      />

      <div
        className="hero lg:min-h-screen items-start relative"
        style={{
          backgroundImage: "url(./gallery/gallery_image_2.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="text-center text-white">
          <h1 className="text-4xl sm:text-5xl text-center mb-3 font-bold pt-8 shadow-black font-serif relative">
            Our Customers Say
          </h1>
          <p className="flex justify-center text-5xl mx-auto"><RiDoubleQuotesL /></p>

          {
            reviews.map((review, index) => {
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
                  <p className="text-lg lg:text-2xl md:max-w-3/4 mx-auto font-serif p-6 py-4 backdrop-brightness-90 shadow-black">
                    {review}
                  </p>
                </AnimatedContent>
              )
            })
          }

          <a target="_blank" href={reviewsUrl}>
            <button
              className="btn btn-outline font-sans hover:bg-[#e4c590] border-[#e4c590] mt-4 mb-8 shadow-none">
              <span className="font-semibold tracking-wider">View All Reviews</span>
            </button>
          </a>

        </div>
      </div>

      <GalleryPreview />

    </section>
  )
}

export default Reviews
