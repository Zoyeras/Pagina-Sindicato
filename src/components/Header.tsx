import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-slate-600 text-white py-5 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center">
          <div className="logo flex items-center text-xl font-bold">
            <span className="mr-2 text-2xl">⚒️</span>
            <span>Sindicato Unidos</span>
          </div>

          <div
            className={`nav-links md:flex ${
              isMenuOpen ? "flex" : "hidden"
            } md:flex-row flex-col absolute md:static top-16 left-0 w-full md:w-auto bg-slate-600 md:bg-transparent md:gap-6 py-4 md:py-0`}
          >
            <a
              href="#inicio"
              className="py-2 px-4 hover:text-green-400 transition-colors"
            >
              Inicio
            </a>
            <a
              href="#nosotros"
              className="py-2 px-4 hover:text-green-400 transition-colors"
            >
              Nosotros
            </a>
            <a
              href="#servicios"
              className="py-2 px-4 hover:text-green-400 transition-colors"
            >
              Servicios
            </a>
            <a
              href="#noticias"
              className="py-2 px-4 hover:text-green-400 transition-colors"
            >
              Noticias
            </a>
            <a
              href="#afiliados"
              className="py-2 px-4 hover:text-green-400 transition-colors"
            >
              Afiliados
            </a>
            <a
              href="#contacto"
              className="py-2 px-4 hover:text-green-400 transition-colors"
            >
              Contacto
            </a>
          </div>

          <button className="menu-btn md:hidden text-2xl" onClick={toggleMenu}>
            ☰
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
