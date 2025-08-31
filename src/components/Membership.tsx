const Membership = () => {
  const benefits = [
    "Asesoramiento jurídico laboral gratuito",
    "Representación en negociaciones colectivas",
    "Acceso a cursos de formación especializada",
    "Descuentos en servicios concertados",
    "Apoyo profesional en casos de conflicto laboral",
    "Defensa legal en procedimientos judiciales",
    "Orientación sobre derechos y obligaciones",
    "Bolsa de empleo exclusiva para afiliados",
  ];

  return (
    <section
      id="afiliados"
      className="py-20 bg-gradient-to-b from-slate-100 to-white relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-slate-800 to-transparent opacity-5"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-4xl font-bold">Únete a Nosotros</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mt-4">
            Forma parte de la mayor organización sindical de tu sector y
            disfruta de ventajas exclusivas
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-stretch">
          <div className="lg:w-1/2 bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 pb-4 border-b border-slate-200 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 text-green-500"
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
              Beneficios de afiliación
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start p-3 rounded-lg bg-slate-50 hover:bg-green-50 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-slate-700">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200">
              <div className="flex items-center text-slate-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Proceso de afiliación rápido y sencillo</span>
              </div>

              <div className="flex items-center text-slate-600 mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                <span>Tus datos están protegidos y seguros</span>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 bg-gradient-to-br from-green-600 to-green-700 p-8 rounded-2xl shadow-lg text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Formulario de afiliación
            </h3>
            <p className="text-green-100 text-center mb-8">
              Completa el formulario y nos pondremos en contacto contigo en
              menos de 24 horas
            </p>

            <form className="space-y-5">
              <div>
                <label htmlFor="nombre" className="block text-green-100 mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="nombre"
                  placeholder="Tu nombre completo"
                  className="w-full px-4 py-3 rounded-lg bg-green-500/20 border border-green-400/30 placeholder-green-200 text-white focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-green-100 mb-2">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="tu@email.com"
                    className="w-full px-4 py-3 rounded-lg bg-green-500/20 border border-green-400/30 placeholder-green-200 text-white focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="telefono"
                    className="block text-green-100 mb-2"
                  >
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    placeholder="+34 000 000 000"
                    className="w-full px-4 py-3 rounded-lg bg-green-500/20 border border-green-400/30 placeholder-green-200 text-white focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="empresa" className="block text-green-100 mb-2">
                  Empresa donde trabaja
                </label>
                <input
                  type="text"
                  id="empresa"
                  placeholder="Nombre de la empresa"
                  className="w-full px-4 py-3 rounded-lg bg-green-500/20 border border-green-400/30 placeholder-green-200 text-white focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="sector" className="block text-green-100 mb-2">
                  Sector profesional
                </label>
                <select
                  id="sector"
                  className="w-full px-4 py-3 rounded-lg bg-green-500/20 border border-green-400/30 text-white focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent"
                >
                  <option value="">Selecciona tu sector</option>
                  <option value="industrial">Industrial</option>
                  <option value="servicios">Servicios</option>
                  <option value="construccion">Construcción</option>
                  <option value="educacion">Educación</option>
                  <option value="sanitario">Sanitario</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="privacidad"
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="privacidad"
                  className="ml-2 block text-sm text-green-100"
                >
                  Acepto la política de privacidad y el tratamiento de mis datos
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-white text-green-700 py-4 rounded-lg font-bold hover:bg-green-50 transition-colors flex items-center justify-center gap-2"
              >
                Enviar solicitud
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
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Membership;
