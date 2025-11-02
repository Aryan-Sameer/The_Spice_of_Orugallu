import { useState } from "react";
import { Link } from "react-router-dom";
import { photoGallery } from "../utils/lib";

import { FaAngleLeft } from "react-icons/fa";

const Gallery = () => {

  const [previewImage, setPreviewImage] = useState(null);

  const gridLayourClass = "relative grid grid-cols-[repeat(auto-fill,_minmax(150px,_1fr))] md:grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] lg:grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-2 p-2 max-sm:pb-4 sm:p-6 sm:gap-6 lg:p-8 lg:gap-8ft"

  return (
    <main className="bg-[#161718] bg-[url('./background/pattern2.png')] py-4">

      <Link to="/">
        <button
          className="btn btn-outline hover:bg-[#e3b179] border-[#e3b179] shadow-none text-[#e3b179] hover:text-black mx-4 mt-2">
          <span className="font-semibold tracking-wider"><FaAngleLeft /></span>
        </button>
      </Link>

      <div className={gridLayourClass}>
        {
          photoGallery.map((image, idx) => {
            return (
              <div
                key={idx}
                onClick={() => {
                  document.getElementById('my_modal_3').showModal();
                  setPreviewImage(image);
                }}
                className="overflow-hidden relative rounded-sm">
                <img
                  className={`object-cover w-full hover:scale-[1.05] duration-200 ease-in aspect-3/2`}
                  src={image}
                  alt="Image"
                />
              </div>
            )
          })
        }
      </div>

      <dialog id="my_modal_3" className="modal max-h-svh">
        <div className="modal-box p-3 w-11/12 max-w-5xl my-6 bg-[#161718] bg-[url(./background/pattern2.png)]">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-white absolute right-0 top-0">✕</button>
          </form>
          <img src={previewImage} alt="image" className="rounded-sm object-cover mx-auto max-h-[calc(100svh-30px)]" />
        </div>
      </dialog>

    </main>
  )
}

export default Gallery
