const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark text-light py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-2">© 2025 Restauracja Gusto. Wszelkie prawa zastrzeżone.</p>
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="hover:text-accent">Regulamin</a>
          <a href="#" className="hover:text-accent">Polityka prywatności</a>
        </div>
        <button
          onClick={scrollToTop}
          className="text-accent hover:text-secondary transition"
        >
          ↖️ Powrót do góry
        </button>
      </div>
    </footer>
  );
};

export default Footer;