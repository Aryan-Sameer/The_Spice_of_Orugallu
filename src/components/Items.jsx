import { FaRegClock } from "react-icons/fa";
import { menuItems } from "../utils/lib";
import { Link } from "react-router-dom";
import AnimatedContent from '../utils/AnimatedContent.jsx';

const Items = () => {

  return (
    <section id="menuItems" className="bg-[#161718] text-white relative overflow-hidden">
      <img
        src="./background/veggies3.webp"
        className="absolute top-0 pointer-events-none"
        alt="bg-image"
      />

      <img
        src="./background/veggies4.webp"
        className="absolute bottom-0 right-0 pointer-events-none"
        alt="bg-image"
      />

      <h1 className="text-4xl sm:text-5xl text-center font-bold pt-12 text-white font-serif relative">Delicious Menu</h1>
      <h2 className="text-lg text-center font-bold tracking-widest py-2 text-[#e3b179] relative"> Menu Highlights</h2>

      <div className="list grid grid-cols-1 lg:grid-cols-2 lg:w-3/4 md:w-[85%] rounded-box mx-auto py-6">
        {
          menuItems.map((item, index) => {
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
                <div className="list-row max-sm:gap-2">
                  <div><img className="rounded-box w-24 lg:w-28 aspect-1/1 object-cover" src={item.image} alt="menu item" /></div>
                  <div>
                    <span className="font-bold">{item.itemName}</span>
                    <p className="list-col-wrap text-xs mt-2"> {item.description} </p>
                  </div>
                  <div> {item.price} </div>
                </div>
              </AnimatedContent>
            )
          })
        }
      </div>

      <div className="flex flex-col items-center mb-12 relative">
        <p className="text-white flex items-center gap-2">
          <FaRegClock /> Daily from
          <span className="text-[#e3b179]">
            12:00 pm - 11:00 pm
          </span>
        </p>
        <Link to="/menu">
          <button
            className="btn btn-outline font-sans hover:bg-[#e3b179] border-[#e3b179] mt-4 shadow-none">
            <span className="font-semibold tracking-wider">View Full Menu</span>
          </button>
        </Link>
      </div>

    </section>
  )
}

export default Items
