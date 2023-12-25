import { useState } from "react";
import TransparentLogo from "../../../assets/logo-white.png";
import loginIcon from "../../../assets/login.png";
import { Link } from "react-router-dom";

function Header() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [showLoginOptions,setShowLoginOptions]=useState(false)
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  return (
    <>
      <header className="bg-gray-600 w-screen p-2">
        <nav className="flex items-center justify-between">
          <div
            className="text-white flex items-center sm:hidden cursor-pointer"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </div>

          {/* Logo */}
          <div className="flex-grow text-center">
            <img
              src={TransparentLogo}
              alt="Logo"
              className="w-30 h-[36px] mx-auto"
            />
          </div>

          <div className="text-white flex items-center mr-8 relative">
            <img src={loginIcon} className="w-6 h-6 mr-1" alt="" />
            <button onClick={()=>setShowLoginOptions(!showLoginOptions)}>Login</button>
            {showLoginOptions && <>
                <div className="absolute z-10 top-full rounded-lg -left-full bg-white text-black flex flex-col p-4 gap-8">
                    <Link className="border-b-2">Admin</Link>
                    <Link to={'/candidate/verify-token'} className="border-b-2">Candidate</Link>
                </div>
            </>}
          </div>
        </nav>
      </header>

      <div className="p-2 bg-stone-950 hidden sm:block w-screen">
        <div className="flex justify-center space-x-8">
          <a href="" className="text-white">
            Home
          </a>
          <a href="" className="text-white">
            Contact
          </a>
          <a href="" className="text-white">
            About us
          </a>
          <a href="" className="text-white">
            Support
          </a>
          <a href="" className="text-white">
            Help
          </a>
        </div>
      </div>
      <div className="p-4 sm:p-0 bg-stone-950"></div>

      {menuVisible && (
        <div className="p-[10%] bg-black sm:hidden left-0 top-0 bottom-0 flex flex-col items-center relative">
          <div className="flex justify-end p-2 absolute top-0 right-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              className="w-6 h-6 cursor-pointer"
              onClick={closeMenu}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div className="mb-2"></div>
          <a href="" className="text-white mb-2">
            Home
          </a>
          <a href="" className="text-white mb-2">
            Contact
          </a>
          <a href="" className="text-white mb-2">
            About us
          </a>
          <a href="" className="text-white mb-2">
            Support
          </a>
          <a href="" className="text-white mb-2">
            Help
          </a>
        </div>
      )}
    </>
  );
}

export default Header;
