const Membership = () => {
  const benefits = [
    "Asesoramiento jurídico laboral gratuito",
    "Representación en negociaciones colectivas",
    "Acceso a cursos de formación especializada",
    "Descuentos en servicios concertados",
    "Apoyo profesional en casos de conflicto laboral",
  ];

  return (
    <section id="afiliados" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Únete a Nosotros</h2>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-slate-700 mb-6">
              Beneficios de afiliación
            </h3>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:w-1/2 bg-gray-100 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-slate-700 mb-6 text-center">
              Formulario de afiliación
            </h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Nombre completo"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="email"
                placeholder="Correo electrónico"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="tel"
                placeholder="Teléfono"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                placeholder="Empresa donde trabaja"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                <option value="">Sector profesional</option>
                <option value="industrial">Industrial</option>
                <option value="servicios">Servicios</option>
                <option value="construccion">Construcción</option>
                <option value="educacion">Educación</option>
                <option value="sanitario">Sanitario</option>
                <option value="otro">Otro</option>
              </select>
              <button type="submit" className="btn-primary w-full">
                Enviar solicitud
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Membership;
