import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";


export default function Layout() {
    return (
        <>
        <header className="bg-gradient-to-r from-pink-900 via-pink-600 to-pink-300 shadow fixed top-0 left-0 w-full ">
             <div className="flex-1 flex  items-center">
                <a href="/" className="btn btn-ghost text-3xl font-bold">
                    <img src="./logo5.png" alt="logo" className="h-12 w-auto object-contain ml-4"/>
                    <h1 className="text-3xl text-center font-semibold text-pink-600">WOMEN LEADING TECH (❁´◡`❁)</h1>

                        </a>
                </div>

        <div className="container mx-auto py-0 px-4 sm:px-6 lg:px-0">
            <div className="text-center flex justify-between items-center">
              <p className="text-sm text-white">New generation, new vision, women shaping tech</p>
            </div>
           
          <nav className="mt-4 ">
            <ul className="flex space-x-4 text-sm  w-96 ">
              <li><Link to="/" className="hover:text-pink-500">Home</Link></li>
              <li><Link to="/events" className="hover:text-pink-500"> | Events</Link></li>
              <li><Link to="/participate" className="hover:text-pink-500">| Participate</Link></li>
              <li><Link to="/share" className="hover:text-pink-500">| Share</Link></li>
              <li><Link to="login" className="hover:text-pink-500">| Login</Link></li>
              {/* <li><Link to="contact" className="hover:text-pink-500">| Contact</Link></li> */}
            </ul>
          </nav>
        </div>
      </header>

            <div className="w-full h-full">
                <Outlet />
                
            </div>
            <Footer /> 
        </>
    )
}