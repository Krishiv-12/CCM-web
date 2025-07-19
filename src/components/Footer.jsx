import React from 'react';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#041033] text-white py-12 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">

        <div>
          <div className="text-2xl font-bold mb-4">
            <span className="text-white">CCM</span>
          </div>
          <p className="text-sm text-gray-300">
            Creative Click Media provides digital marketing solutions that are built to amplify your brand’s voice and expand your reach. We combine data-driven strategies with creative insight, making sure your business thrives in an ever-evolving digital world.
          </p>
          <div className="flex space-x-4 mt-4">
            <FaFacebookF className="hover:text-blue-500 cursor-pointer" />
            <FaLinkedinIn className="hover:text-blue-400 cursor-pointer" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
            <FaPinterestP className="hover:text-red-400 cursor-pointer" />
            <FaYoutube className="hover:text-red-600 cursor-pointer" />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Our Agency</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>Our Company</li>
            <li>Awards</li>
            <li>Insights</li>
            <li>Company News</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Industries Served</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>Home Improvement</li>
            <li>Legal Services</li>
            <li>Medical</li>
            <li>Health & Wellness</li>
            <li>Professional Services</li>
            <li>B2B Services</li>
            <li>Nonprofit</li>
            <li>View All Industries</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Resources</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>How to Choose an SEO Agency</li>
            <li>Local Landing Page Checklist</li>
            <li>Customer Service Best Practices</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Tools</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>SEO Checker</li>
            <li>Copy & Paste Emoji Cheat Sheet</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
