import React from 'react';

const Dropdown = () => {
    return (
        <nav className="bg-white border-b border-black">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <img className="block lg:hidden h-8 w-auto" src="logo.svg" alt="Logo" />
                        <img className="hidden lg:block h-8 w-auto" src="logo.svg" alt="Logo" />
                    </div>
                    {/* Navigation Links */}
                    <div className="hidden md:flex md:items-center md:space-x-4">
                        <a href="/" className="text-black hover:text-gray-500">Home</a>
                        <a href="/about" className="text-black hover:text-gray-500">About</a>
                        <a href="/contact" className="text-black hover:text-gray-500">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Dropdown;
