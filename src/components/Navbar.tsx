import React, { useState } from 'react';
import { Link } from 'react-router';
import { Menu, X } from 'lucide-react';
import logo from "@/assets/asset 0.png"

interface NavItemProps {
  href: string;
  label: string;
  onClick?: () => void;
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="container mx-auto px-4 py-6 bg-black sticky top-0 left-0 w-full z-10 text-white">
      <nav className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link to={"/"}><img src={logo} alt="logo" width={100} height={100} /></Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <NavItem href="/" label="Home" />
          <NavItem href="/services" label="Services" />
          <NavItem href="/digital-content-services" label="Digital Content Services" />
          <NavItem href="/software-support" label="Software Support" />
          <NavItem href="/training-courses" label="Training & Courses" />
          <NavItem href="/blog" label="Blog" />
          <NavItem href="/contact-us" label="Contact Us" />
        </ul>

        {/* Mobile Menu */}
        <div className={`
          fixed inset-0 bg-black bg-opacity-90 md:hidden transition-transform duration-300 transform
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}>
          <div className="flex flex-col h-full pt-20 px-6">
            <ul className="space-y-4">
              <NavItem href="/" label="Home" onClick={toggleMenu} />
              <NavItem href="/services" label="Services" onClick={toggleMenu} />
              <NavItem href="/digital-content-services" label="Digital Content Services" onClick={toggleMenu} />
              <NavItem href="/software-support" label="Software Support" onClick={toggleMenu} />
              <NavItem href="/training-courses" label="Training & Courses" onClick={toggleMenu} />
              <NavItem href="/blog" label="Blog" onClick={toggleMenu} />
              <NavItem href="/contact-us" label="Contact Us" onClick={toggleMenu} />
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

function NavItem({ href, label, onClick }: NavItemProps) {
  return (
    <li>
      <Link
        to={href}
        className="hover:text-teal-500 transition-colors duration-300 block"
        onClick={onClick}
      >
        {label}
      </Link>
    </li>
  );
}

export default Navbar;