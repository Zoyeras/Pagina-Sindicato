const Hero = () => {
  return (
    <section
      id="inicio"
      className="min-h-[600px] flex items-center bg-gradient-to-r from-slate-700/90 to-slate-600/90 text-white"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeIn">
            Defendiendo los derechos de los trabajadores
          </h1>
          <p
            className="text-xl mb-8 animate-fadeIn"
            style={{ animationDelay: "0.5s" }}
          >
            Trabajamos juntos por mejores condiciones laborales y un futuro más
            justo para todos
          </p>
          <a
            href="#afiliados"
            className="btn-primary inline-block animate-fadeIn"
            style={{ animationDelay: "1s" }}
          >
            Únete a nosotros
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
