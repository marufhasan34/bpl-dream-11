import React from "react";
import footerImg from '../../assets/logo-footer.png'
const Footer = () => {
  return (
    <div className="mt-40">
      <div className="relative bg-[#020617] pt-32 pb-10">
        {/* Subscribe Section */}
        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4">
          <div className="bg-linear-to-r from-blue-100 to-orange-200 rounded-2xl shadow-lg p-8 text-center">
            <h2 className="text-2xl font-semibold mb-2">
              Subscribe to our Newsletter
            </h2>
            <p className="text-gray-600 mb-4">
              Get the latest updates and news right in your inbox!
            </p>

            <div className="flex items-center justify-center gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-md border outline-none w-64"
              />
              <button className="px-5 py-2 rounded-md bg-linear-to-r from-pink-400 to-yellow-400 text-white cursor-pointer font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <img className="mx-auto pt-6 pb-10" src={footerImg} alt="" />

        {/* Footer Content */}
        <div className="max-w-6xl pb-4 mx-auto text-center lg:text-left px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-white">
          <div>
            <h3 className="font-semibold mb-2">About Us</h3>
            <p className="text-sm text-gray-400">
              We are a passionate team <br /> dedicated to providing the best.{" "}
              <br /> services to our customers.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Quick Links</h3>
            <ul className="text-sm text-gray-400 lg:list-disc pl-5 space-y-1">
              <li>Home</li>
              <li>Services</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Subscribe</h3>
            <p className="my-3 text-gray-400">Subscribe to our newsletter for the <br /> latest updates.</p>
            <div className="flex bg-white rounded-xl overflow-hidden shadow-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3  outline-none text-gray-600"
              />
              <button className="px-6 py-3 cursor-pointer font-semibold text-black bg-linear-to-r from-yellow-200 via-pink-300 to-purple-400">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <hr />
        <p className="text-center text-white pt-6 ">@2024 Your Company All Rights Reserved.</p>
      </div>
      
    </div>
  );
};

export default Footer;
