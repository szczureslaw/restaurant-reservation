import { useState } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = ['Strona główna', 'O nas', 'Promocje', 'Rezerwacja', 'Kontakt'];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary flex items-center">
          <span className="text-accent mr-1">✦</span> Gusto
        </div>
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item === 'Strona główna' ? 'hero' : item.toLowerCase().replace(' ', '')}
              smooth={true}
              duration={500}
              className="text-dark font-medium hover:text-accent cursor-pointer relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>
        <button
          className="md:hidden text-dark"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 border-t">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item === 'Strona główna' ? 'hero' : item.toLowerCase().replace(' ', '')}
              smooth={true}
              duration={500}
              className="block py-2 text-dark font-medium hover:text-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;