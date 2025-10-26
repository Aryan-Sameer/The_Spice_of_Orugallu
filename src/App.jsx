import { useRef } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from "./pages/Home"
import Footer from "./components/Footer"
import Menu from './pages/Menu';
import Gallery from './pages/Gallery';

import { IoIosArrowUp } from "react-icons/io";

function App() {
    const scrollUpClass = "bg-base-300 hidden rounded-full p-1 sm:p-3 fixed right-3 bottom-3 text-2xl z-20 cursor-pointer"
    const upRef = useRef(null)

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/menu",
            element: <Menu />
        },
        {
            path: "/gallery",
            element: <Gallery />
        },
    ])

    window.addEventListener('scroll', () => {
        if (window.scrollY > window.innerHeight * 1/2) {
            upRef.current.style.display = "block";
        } else {
            upRef.current.style.display = "none";
        }
    });

    return (
        <main>
            <RouterProvider router={router} />
            <Footer />

            <div
                onClick={() => document.getElementById('landingPage').scrollIntoView({ behavior: 'smooth' })}
                ref={upRef}
                className={scrollUpClass}>
                <IoIosArrowUp />
            </div>
        </main>
    )
}

export default App
