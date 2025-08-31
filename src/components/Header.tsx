import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`text-white py-4 sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-700 shadow-lg"
          : "bg-slate-600/95 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center">
          <div className="logo flex items-center text-xl font-bold">
            <span className="mr-3 text-2xl bg-green-500 p-2 rounded-lg">
              ⚒️
            </span>
            <span>Sindicato Unidos</span>
          </div>

          <div
            className={`nav-links md:flex ${
              isMenuOpen ? "flex" : "hidden"
            } md:flex-row flex-col absolute md:static top-full left-0 w-full md:w-auto bg-slate-700 md:bg-transparent md:gap-8 py-4 md:py-0 shadow-lg md:shadow-none`}
          >
            <a
              href="#inicio"
              className="py-2 px-4 hover:text-green-400 transition-colors font-medium border-l-4 md:border-l-0 md:border-b-2 border-transparent hover:border-green-400"
            >
              Inicio
            </a>
            <a
              href="#nosotros"
              className="py-2 px-4 hover:text-green-400 transition-colors font-medium border-l-4 md:border-l-0 md:border-b-2 border-transparent hover:border-green-400"
            >
              Nosotros
            </a>
            <a
              href="#servicios"
              className="py-2 px-4 hover:text-green-400 transition-colors font-medium border-l-4 md:border-l-0 md:border-b-2 border-transparent hover:border-green-400"
            >
              Servicios
            </a>
            <a
              href="#noticias"
              className="py-2 px-4 hover:text-green-400 transition-colors font-medium border-l-4 md:border-l-0 md:border-b-2 border-transparent hover:border-green-400"
            >
              Noticias
            </a>
            <a
              href="#afiliados"
              className="py-2 px-4 hover:text-green-400 transition-colors font-medium border-l-4 md:border-l-0 md:border-b-2 border-transparent hover:border-green-400"
            >
              Afiliados
            </a>
            <a
              href="#contacto"
              className="py-2 px-4 hover:text-green-400 transition-colors font-medium border-l-4 md:border-l-0 md:border-b-2 border-transparent hover:border-green-400"
            >
              Contacto
            </a>
          </div>

          <button
            className="menu-btn md:hidden text-2xl p-1 rounded bg-slate-700 hover:bg-slate-600 transition-colors"
            onClick={toggleMenu}
            aria-label="Abrir menú"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
