import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

interface NavItem {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
}

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '#about-section' },
    { 
      label: 'Plans', 
      href: '#plans-section',
      children: [
        { label: 'A方案', href: '/plan/A' },
        { label: 'B方案', href: '/plan/B' },
        { label: 'C方案', href: '/plan/C' },
        { label: 'D方案', href: '/plan/D' },
        { label: '後代優惠', href: '/promotion' },
      ]
    },
    { 
      label: 'Service', 
      href: '#service-section',
      children: [
        { label: '基因客製', href: '/service/gene' },
        { label: '教育服務', href: '/service/education' },
        { label: '醫療保健', href: '/service/medical' },
      ]
    },
    { label: 'Process', href: '#process-section' },
    { label: 'T&C', href: '/terms' },
    { label: 'Contact', href: '#contact-section' },
  ];

  const handleNavClick = (href?: string) => {
    if (!href) return;
    
    setIsMobileMenuOpen(false);
    if (href.startsWith('#')) {
      // If on detail page, go home first then scroll
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(href.substring(1));
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.getElementById(href.substring(1));
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
       navigate(href);
       window.scrollTo(0, 0);
    }
  };

  return (
    <header 
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-dark py-4 shadow-lg' : 'bg-brand-dark py-6'
      }`}
    >
      {/* Changed layout: Removed container mx-auto to let items push to edges. 
          Used w-full and responsive padding to manage spacing. */}
      <div className="w-full px-6 lg:px-12 flex justify-between items-center text-white">
        {/* Logo Area */}
        <div 
            className="flex items-center space-x-3 cursor-pointer" 
            onClick={() => handleNavClick('/')}
        >
          <img 
            src="/images/logo.png" 
            alt="birthplan+subscrybebe logo" 
            className="h-10 w-auto rounded-sm"
          />
          
          {/* Use font-logo (Bauhaus Pro) and ensure it is bold */}
          <span className="text-2xl font-bold tracking-wide font-logo">
            birthplan+subscrybebe
          </span>
        </div>

        {/* Desktop Nav */}
        {/* Reduced text size to text-base, increased spacing to space-x-12 */}
        <nav className="hidden lg:flex space-x-12 text-base font-heading tracking-wide">
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              <button
                onClick={() => handleNavClick(item.href)}
                className="hover:text-gray-300 transition-colors flex items-center gap-1 py-2 font-heading"
              >
                {item.label}
              </button>

              {/* Dropdown Menu */}
              {item.children && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-32 hidden group-hover:block">
                  {/* Updated styling: Brand dark blue with 75% opacity, centered text, no borders */}
                  <div className="bg-[#051628]/75 backdrop-blur-sm shadow-xl flex flex-col py-2">
                    {item.children.map((child) => (
                      <button
                        key={child.label}
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent triggering parent click
                          handleNavClick(child.href);
                        }}
                        /* Reduced text size to text-sm */
                        className="text-center px-2 py-2 text-sm font-heading text-white hover:text-brand-gold transition-colors"
                      >
                        {child.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-brand-dark absolute top-full left-0 w-full border-t border-gray-700 py-4 max-h-[80vh] overflow-y-auto shadow-2xl">
          <div className="flex flex-col items-center space-y-2 text-white font-body px-6">
            {navItems.map((item) => (
              <div key={item.label} className="w-full flex flex-col items-center">
                <button
                  onClick={() => handleNavClick(item.href)}
                  className="text-lg hover:text-gray-300 py-3 font-heading"
                >
                  {item.label}
                </button>
                
                {/* Mobile Submenu */}
                {item.children && (
                  <div className="flex flex-col items-center space-y-2 mb-2 w-full bg-gray-900/30 rounded-lg py-2">
                    {item.children.map((child) => (
                      <button
                        key={child.label}
                        onClick={() => handleNavClick(child.href)}
                        className="text-sm text-gray-400 hover:text-white py-1 font-heading"
                      >
                        {child.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;