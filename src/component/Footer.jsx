import React from 'react';

function Footer() {
  return (
    <footer className="flex max-w-screen-xl md:flex-row flex-wrap item center  mx-auto gap-y-6 gap-x-12 b border-blue-gray-50 py-4 text-center md:justify-between justify-center flex-col">
      <p className="block font-sans font-bold leading-relaxed text-blue-gray-900 antialiased p-2  text-xl">
        © 2023 CodeLab
      </p>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8 justify-center">
        <li>
          <a
            href="#"
            className="block p-2  font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-blue-700 focus:text-blue-700 "
          >
            About Us
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block p-2 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-blue-700 focus:text-blue-700"
          >
            License
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block p-2 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-blue-700 focus:text-blue-700"
          >
            Contribute
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block p-2  font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-blue-700 focus:text-blue-700"
          >
            Contact Us
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;


