const About = () => {
  const stats = [
    { value: "15+", label: "Años de experiencia" },
    { value: "5000+", label: "Trabajadores representados" },
    { value: "120+", label: "Convenios negociados" },
    { value: "98%", label: "Satisfacción de afiliados" },
  ];

  return (
    <section
      id="nosotros"
      className="py-20 bg-slate-800 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')] bg-cover bg-center opacity-10"></div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="section-title text-white text-4xl font-bold">
            Quiénes Somos
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mt-4">
            Una organización comprometida con la defensa de los derechos
            laborales y la mejora de las condiciones de trabajo
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-slate-700/50 p-8 rounded-2xl backdrop-blur-sm border border-slate-600">
              <h3 className="text-2xl font-bold mb-6 text-green-400">
                Nuestra Historia
              </h3>
              <p className="mb-6 text-slate-300 leading-relaxed">
                Fundado en 2010, Sindicato Unidos nació como respuesta a la
                necesidad de representación efectiva para los trabajadores de
                diversos sectores. A lo largo de más de 15 años, hemos crecido
                hasta convertirnos en una referencia en la defensa de los
                derechos laborales.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Nuestra misión es representar efectivamente a los trabajadores,
                promover el diálogo social y contribuir a la construcción de una
                sociedad más justa y equitativa donde el trabajo digno sea una
                realidad para todos.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-slate-700/50 p-4 rounded-xl text-center backdrop-blur-sm border border-slate-600"
                >
                  <div className="text-3xl font-bold text-green-400 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-slate-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-green-600/20 to-slate-700/50 p-8 rounded-2xl backdrop-blur-sm border border-slate-600">
              <h3 className="text-2xl font-bold mb-4 text-white flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                Nuestra Visión
              </h3>
              <p className="text-slate-300">
                Ser el sindicato de referencia en nuestro sector, reconocido por
                su eficacia, transparencia y compromiso inquebrantable con los
                trabajadores.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-600/20 to-slate-700/50 p-8 rounded-2xl backdrop-blur-sm border border-slate-600">
              <h3 className="text-2xl font-bold mb-4 text-white flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                Nuestros Valores
              </h3>
              <p className="text-slate-300">
                Transparencia, solidaridad, justicia social, equidad y
                compromiso con la mejora continua de las condiciones laborales
                de todos los trabajadores.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-600/20 to-slate-700/50 p-8 rounded-2xl backdrop-blur-sm border border-slate-600">
              <h3 className="text-2xl font-bold mb-4 text-white flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
                Nuestro Impacto
              </h3>
              <p className="text-slate-300">
                Más de 5.000 trabajadores representados, más de 120 convenios
                colectivos negociados con éxito y un historial de defensa de
                derechos laborales sin precedentes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
