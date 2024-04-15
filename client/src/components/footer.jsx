import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 py-12">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <p className="text-white text-sm">&copy; 2024 T Shirt Hall. All rights reserved.</p>
        </div>
        <div>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-white hover:text-gray-400 transition duration-300">About</a></li>
            <li><a href="#" className="text-white hover:text-gray-400 transition duration-300">Services</a></li>
            <li><a href="#" className="text-white hover:text-gray-400 transition duration-300">Contact</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;