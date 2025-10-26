import { galleryPreviewImages } from "../utils/lib"
import { Link } from "react-router-dom";

const GalleryPreview = () => {

  const btnClass = "absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-[#e3b179] hover:bg-transparent hover:text-[#e3b179] border border-[#e3b179] text-black font-semibold text-sm sm:tracking-wide shadow-none rounded-sm p-1 sm:p-2 cursor-pointer duration-200";

  const gridLayourClass = "text-white relative lg:bg-[#161718] grid grid-cols-[repeat(auto-fill,_minmax(150px,_1fr))] md:grid-cols-[repeat(auto-fill,_minmax(180px,_1fr))] lg:grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-2 p-2 max-sm:pb-4 sm:p-6 sm:gap-6 lg:p-8 lg:gap-8 w-[95%] w-full lg:w-3/4 mx-auto lg:bg-[url(./background/pattern2.png)]"

  return (
    <section
      id="galleryPreview"
      className="lg:mt-[-200px]">

      <h1 className="text-4xl sm:text-5xl z-10 translate-y-1/8 sm:translate-y-1/5 text-center font-bold pt-2 lg:pt-4 text-[#e3b179] font-serif relative">
        Photo Gallery
      </h1>
      <div
        className={gridLayourClass}>
        {
          galleryPreviewImages.map((image, index) => {
            return (
              <div key={index} className="overflow-hidden relative rounded-sm">
                <img
                  className={`object-cover w-full hover:scale-[1.05] duration-200 ease-in aspect-3/2 ${index == galleryPreviewImages.length - 1 ? "hover:scale-[1] brightness-40" : ""}`}
                  src={image}
                  alt="Image"
                />
                {
                  index == galleryPreviewImages.length - 1 ?
                    <div className="flex items-center justify-center">
                      <Link to="/gallery">
                        <button
                          className={btnClass}
                        >
                          View More
                        </button>
                      </Link>

                    </div> : ""
                }
              </div>
            )
          })
        }

        <div className="overflow-hidden relative">
          <img
            className="object-cover w-full h-full brightness-40 duration-200 ease-in rounded-sm"
            src="./gallery/gallery_image_3.jpg"
            alt="Image"
          />
          <a target="_blank" href="https://www.instagram.com/thespiceoforugallu/">
            <button
              className={btnClass + " w-max"}
            >
              More on Instagram
            </button>
          </a>
        </div>

      </div >
    </section>
  )
}

export default GalleryPreview
