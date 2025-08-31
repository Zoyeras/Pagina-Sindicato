const Hero = () => {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-r from-slate-800 to-slate-700 text-white overflow-hidden"
    >
      {/* Imagen de fondo con overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-slate-900/70"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block bg-green-600/20 px-4 py-2 rounded-full mb-6 backdrop-blur-sm border border-green-400/30">
            <span className="text-green-300 font-semibold">
              Unidos por tus derechos
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fadeIn leading-tight">
            Defendiendo los <span className="text-green-400">derechos</span> de
            los trabajadores
          </h1>

          <p
            className="text-xl md:text-2xl mb-10 animate-fadeIn max-w-2xl mx-auto leading-relaxed"
            style={{ animationDelay: "0.5s" }}
          >
            Trabajamos juntos por mejores condiciones laborales y un futuro más
            justo para todos
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn"
            style={{ animationDelay: "1s" }}
          >
            <a
              href="#afiliados"
              className="btn-primary px-8 py-4 text-lg font-semibold flex items-center justify-center gap-2"
            >
              Únete a nosotros
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            <a
              href="#servicios"
              className="px-8 py-4 text-lg font-semibold border-2 border-white/30 rounded-full hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Conoce nuestros servicios
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white/60"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
