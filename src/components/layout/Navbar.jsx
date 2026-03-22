
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; 
import Logo from '../../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full top-0 left-0 z-50 bg-butter shadow-sm">
      <div className="max-w-7xl sora-font mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className='w-14 h-14  '>
          <img src={Logo} alt="Logo"
           className="w-full h-full object-contain" />
        </div>

        <nav className="hidden md:flex items-center space-x-8 text-[1.1rem] tracking-wide">
          <a href="#about" className="hover:text-[#c44900] transition">About</a>
          <a href="#faq" className="uppercase hover:text-[#c44900] transition">Faq</a>
          
          <a 
  href="https://wa.link/lv9j6b" 
  target="_blank" 
  rel="noopener noreferrer"
>
          <button className="text-black cursor-pointer 
          px-5 py-3 rounded-md text-[0.9rem] font-medium transition border
           border-[#c44900]
           hover:bg-[#c44900] hover:text-white">
            Become a Member
          </button>
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-black focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Slide Down Animation) */}
      <div className={`md:hidden overflow-hidden transition-all
         duration-300 ease-in-out bg-butter border-t border-gray-400/30
          ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col space-y-4 px-6 py-6 text-center">
          <a 
            href="#about" 
            onClick={() => setIsOpen(false)}
            className="text-lg font-medium hover:text-[#c44900]"
          >
            About
          </a>

          <a 
            href="#faq" 
            onClick={() => setIsOpen(false)}
            className="text-lg font-medium uppercase hover:text-[#c44900]"
          >
            Faq
          </a>
          <a 
  href="https://wa.link/lv9j6b" 
  target="_blank" 
  rel="noopener noreferrer"
>
          <button className="w-full text-black px-5 py-3 cursor-pointer
           rounded-md text-lg font-medium transition hover:bg-[#c44900]
            border border-[#c44900]">
            Become a Member
          </button>
  </a>
  
        </div>
      </div>
    </header>
  );
};

export default Navbar;