import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";
import { useState } from "react";



export default function Layout() {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
        <>

<header className="bg-gradient-to-r from-pink-800 via-pink-600 to-pink-600 shadow fixed top-0 left-0 w-full flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8">
      {/* Section gauche : Logo et Titre */}
      <div className="flex items-center space-x-4">
        <a href="/">
        <img src="./logo5.png" alt="logo" className="h-12 w-auto object-contain" />
        </a> <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-black whitespace-nowrap">
          WOMEN LEADING TECH (❁´◡`❁)
        </h1>
       
      </div>

      {/* Navigation */}
      <nav>
{/* Menu principal */}
<ul className={`md:flex space-x-4 text-xs lg:text-base font-bold text-black  ${isOpen ? 'block' : 'hidden'}`}>
          <li><Link to="/" className="hover:text-pink-500 block py-8 px-4 md:p-0">Home</Link></li>
          <li><Link to="/events" className="hover:text-pink-500 block py-2 px-4 md:p-0">| Events</Link></li>
          <li><Link to="/participate" className="hover:text-pink-500 block py-2 px-4 md:p-0">| Participate</Link></li>
          <li><Link to="/share" className="hover:text-pink-500 block py-2 px-4 md:p-0">| Share</Link></li>
          <li><Link to="/login" className="hover:text-pink-500 block py-2 px-4 md:p-0">| Login</Link></li>
        </ul>
     
 {/* Icône hamburger */}
 <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-black focus:outline-none "
        >
          {isOpen ? (
            // Icône fermer
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Icône hamburger
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>
    </header>

            <div className="w-full h-full">
                <Outlet />
                
            </div>
            <Footer /> 
        </>
    )
}