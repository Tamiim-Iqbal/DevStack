import { useState } from "react";
import Logo from "../../../public/DevStack-resource/assets/logo-text.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = (
    <>
      <li className="mb-2 text-pink-500 font-semibold">Home</li>
      <li className="mb-2">Technologies</li>
      <li className="mb-2">Projects</li>
      <li className="mb-2">About</li>
      <li className="mb-2">Contact</li>
    </>
  );

  return (
    <div className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="navbar container mx-auto w-11/12">

        {/* Mobile Hamburger + Logo */}
        <div className="navbar-start">

          {/* Hamburger - Mobile Only */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="mr-2 block text-2xl lg:hidden"
            aria-label="Toggle menu" > ☰ </button>

          {/* Logo */}
          <img src={Logo} alt="Dev Stack Logo" className="h-8 w-auto" />
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal gap-9 px-1">
            {links}
          </ul>
        </div>

        {/* Right Side */}
        <div className="navbar-end gap-2">

          <button className="btn btn-ghost rounded-3xl">Sign In</button>

          <button className="btn gradient-button rounded-3xl text-white"> Sign Up</button>

        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="border-t border-gray-100 bg-white px-5 py-4 lg:hidden">
          <ul className="flex flex-col gap-3 text-sm font-medium text-gray-700">
            {links}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;