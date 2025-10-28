import { menuCard } from "../utils/menu"
import { Link } from "react-router-dom";

import { FaAngleLeft } from "react-icons/fa";

const Menu = () => {
  return (
    <main className="bg-[#161718] bg-[url(./background/pattern2.png)]">
      <Link to="/">
        <button
          className="btn btn-outline hover:bg-[#e3b179] border-[#e3b179] shadow-none text-[#e3b179] hover:text-black mx-4 mt-2">
          <span className="font-semibold tracking-wider"><FaAngleLeft /></span>
        </button>
      </Link>

      <div className="carousel carousel-center bg-neutral rounded-box space-x-4 p-4 my-18 max-w-svw">
        {
          menuCard.map((category, index) => {
            return (
              <ul key={index} className="carousel-item menu bg-base-200 rounded-box">
                <li>
                  <h2 className="menu-title text-black">{category.title}</h2>
                  <ul className="itemList max-h-80 overflow-y-auto">
                    {
                      category.items.map((item, idx) => {
                        return (
                          <li key={idx} className="flex flex-row justify-between pointer-events-none">
                            <p>{item.name}</p>
                            <p>{item.price}</p>
                          </li>
                        )
                      })
                    }
                  </ul>
                </li>
              </ul>
            )
          })
        }
      </div>
    </main>
  )
}

export default Menu
