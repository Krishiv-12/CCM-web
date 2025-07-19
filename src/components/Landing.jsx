import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { FaAngleDown, FaBars, FaTimes } from 'react-icons/fa';

function Landing() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="w-full min-h-screen bg-[#001135]">
      
      <div className="nav bg-white w-full h-20 flex justify-between items-center px-4 lg:px-10 shadow-md">
        <img
          src="https://creativeclickmedia.com/wp-content/uploads/2023/07/CCM-logo-01.webp"
          alt="Logo"
          className="h-14"
        />

        <div className="hidden md:flex items-center gap-6">
          <div className="relative hidden lg:block">
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-64"
            />
            <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
          </div>

          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#" className="hover:text-blue-600">Services</a>
          <a href="#" className="hover:text-blue-600">Industries</a>
          <a href="#" className="hover:text-blue-600">About</a>
          <a href="#" className="hover:text-blue-600">Insights</a>
          <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Get Started</button>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? (
              <FaTimes className="text-3xl text-black" />
            ) : (
              <FaBars className="text-3xl text-black" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 z-20 bg-gray-100 py-8 flex flex-col items-center gap-4 text-lg font-medium">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#" className="hover:text-blue-600">Services</a>
          <a href="#" className="hover:text-blue-600">Industries</a>
          <a href="#" className="hover:text-blue-600">About</a>
          <a href="#" className="hover:text-blue-600">Insights</a>
          <a href="#" className="flex items-center gap-2 hover:text-blue-600">More <FaAngleDown /></a>
        </div>
      )}

      <div className="w-full flex flex-col lg:flex-row items-center px-4 lg:px-10 mt-10 lg:mt-0">
        

        <img
          src="https://creativeclickmedia.com/wp-content/uploads/2024/10/digital-marketing-agency.webp"
          alt="Marketing"
          className="block md:hidden w-full mb-6 rounded"
        />


        <div className="text-white w-full lg:w-1/2">
          <p className="text-[18px] mt-4 font-semibold md:text-2xl lg:text-[1.6vw]">
            New Jersey's #1 Digital Marketing Agency
          </p>

          <h1 className="mt-4 text-4xl md:text-6xl lg:text-[4.5vw] font-bold leading-tight">
            Digital is <br /> in our DNA
          </h1>

          <button className="mt-6 md:mt-10 px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
            Request A Proposal
          </button>

          <p className="mt-6 text-base md:text-xl text-gray-300 max-w-xl">
            Forget the status quo. Our cutting-edge strategies and creative campaigns
            will revolutionize your marketing and boost your bottom line.
          </p>

          <img
            src="https://creativeclickmedia.com/wp-content/uploads/2024/04/google-review-services-3.png"
            alt="Google Review"
            className="mt-6 h-10 lg:h-14"
          />
        </div>


        <div className="hidden lg:block w-1/2">
          <img
            src="https://creativeclickmedia.com/wp-content/uploads/2024/07/digital-marketing-agency.webp"
            alt="Digital"
            className="h-[75vh] object-cover rounded-xl ml-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Landing;
