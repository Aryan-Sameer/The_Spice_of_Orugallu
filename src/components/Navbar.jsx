import { reserveTableURl } from "../utils/lib";

const Navbar = ({ navRef, scrolled }) => {
  const navClass = 'cursor-pointer hover:underline underline-offset-8 decoration-double';

  return (
    <nav
      ref={navRef}
      id="navbar"
      className={`navbar fixed top-0 text-[#e3b179] px-2 md:px-6 z-30 duration-200 ${scrolled ? "bg-black" : ""}`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="mr-2 lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu space-y-2 menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-3 shadow font-bold bg-black">
            <li
              onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })}
              className={navClass}>HOME</li>
            <li
              onClick={() => document.getElementById('About').scrollIntoView({ behavior: 'smooth' })}
              className={navClass}>ABOUT US</li>
            <li
              onClick={() => document.getElementById('menuItems').scrollIntoView({ behavior: 'smooth' })}
              className={navClass}>MENU</li>
            <li
              onClick={() => document.getElementById('reviews').scrollIntoView({ behavior: 'smooth' })}
              className={navClass}>REVIEWS</li>
            <li
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className={navClass}>CONTACT</li>
          </ul>
        </div>
        <a href="/" className="w-[180px] brightness-[1.5]" >
          <img src="./assets/orugallu logo.png" alt="logo" />
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold tracking-widest gap-12">
          <li
            onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })}
            className={navClass}>HOME</li>
          <li
            onClick={() => document.getElementById('About').scrollIntoView({ behavior: 'smooth' })}
            className={navClass}>ABOUT US</li>
          <li
            onClick={() => document.getElementById('menuItems').scrollIntoView({ behavior: 'smooth' })}
            className={navClass}>MENU</li>
          <li
            onClick={() => document.getElementById('reviews').scrollIntoView({ behavior: 'smooth' })}
            className={navClass}>REVIEWS</li>
          <li
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className={navClass}>CONTACT</li>
        </ul>
      </div>

      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <button
            className="btn btn-outline max-sm:btn-sm hover:bg-[#e3b179] border-[#e3b179] shadow-none">
            <span className="font-semibold tracking-wider">ORDER ONLNE</span>
          </button>

          <ul tabIndex="-1" className="dropdown-content menu bg-black rounded-box z-1 w-52 p-2 shadow-sm">
            <li>
              <a target="_blank" href="https://www.zomato.com/hyderabad/the-spice-of-orugallu-narapally/order">Zomato</a>
            </li>
            <li>
              <a target="_blank" href="https://magicpin.in/walletrecharge?merchantId=51891940&tabType=delivery&utm_source=reserve_google&utm_campaign=starter_integration&utm_medium=delivery&rwg_token=ACgRB3fTYExVthC--Mx2e3j3Z8Pnb2ogv8UUp1dGmS7DEqjXzMCkfmbzi7gTWO20jAsf8rj76qWdUiSFqsKphmZJD31CNm09Fg%3D%3D">Magicpin</a>
            </li>
            <li>
              <a target="_blank" href="https://www.swiggy.com/city/hyderabad/the-spice-of-orugallu-uppal-rest1014698?utm_source=GooglePlaceOrder&utm_campaign=GoogleMap&is_retargeting=true&media_source=GooglePlaceOrder">Swiggy</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
