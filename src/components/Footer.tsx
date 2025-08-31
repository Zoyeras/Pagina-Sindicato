const Footer = () => {
  return (
    <footer className="bg-slate-600 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div>
            <h3 className="text-xl font-bold mb-4 pb-2 border-b-2 border-green-500 inline-block">
              Sindicato Unidos
            </h3>
            <p className="mb-6">
              Defendiendo los derechos de los trabajadores desde 2010.
              Comprometidos con la justicia social y las condiciones laborales
              dignas.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-10 h-10 bg-slate-500 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors"
              >
                📘
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-500 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors"
              >
                📱
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-500 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors"
              >
                📸
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-500 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors"
              >
                🐦
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 pb-2 border-b-2 border-green-500 inline-block">
              Enlaces rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#inicio"
                  className="hover:text-green-400 transition-colors"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#nosotros"
                  className="hover:text-green-400 transition-colors"
                >
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  className="hover:text-green-400 transition-colors"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#noticias"
                  className="hover:text-green-400 transition-colors"
                >
                  Noticias
                </a>
              </li>
              <li>
                <a
                  href="#afiliados"
                  className="hover:text-green-400 transition-colors"
                >
                  Afiliación
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="hover:text-green-400 transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 pb-2 border-b-2 border-green-500 inline-block">
              Recursos
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Guía de derechos laborales
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Convenios colectivos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Legislación laboral
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Centro de formación
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Preguntas frecuentes
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 pb-2 border-b-2 border-green-500 inline-block">
              Boletín informativo
            </h3>
            <p className="mb-4">
              Suscríbete para recibir las últimas novedades y actualizaciones:
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="w-full px-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                Suscribirse
              </button>
            </form>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-500 text-center">
          <p>&copy; 2025 Sindicato Unidos. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
