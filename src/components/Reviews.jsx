import GalleryPreview from "./GalleryPreview"
import { RiDoubleQuotesL } from "react-icons/ri";
import { reviewsUrl } from "../utils/lib";
import { reviews } from "../utils/lib";

const Reviews = () => {

  return (
    <section id="reviews" className="bg-[#161718] pb-8 relative">
      <img src="./background/veggies4.png" className="absolute bottom-0 right-0 pointer-events-none" />
      <img src="./background/veggies3.png" className="absolute bottom-0 pointer-events-none" />

      <div
        className="hero min-h-screen items-start relative"
        style={{
          backgroundImage: "url(./assets/ambience.jpg)",
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
                <p key={index} className="text-2xl md:max-w-3/4 mx-auto font-serif p-6 py-4 backdrop-brightness-90 shadow-black">
                  {review}
                </p>
              )
            })
          }

          <a target="_blank" href={reviewsUrl}>
            <button
              className="btn btn-outline font-sans hover:bg-[#e4c590] border-[#e4c590] mt-4 shadow-none">
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
