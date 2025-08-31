const Features = () => {
  const features = [
    {
      icon: "⚖️",
      title: "Asesoría Legal",
      description:
        "Ofrecemos orientación jurídica especializada en derecho laboral para proteger tus derechos e intereses en el trabajo.",
      details: [
        "Consultoría legal gratuita",
        "Representación en conflictos",
        "Asesoramiento en despidos",
      ],
    },
    {
      icon: "🤝",
      title: "Negociación Colectiva",
      description:
        "Representamos a nuestros afiliados en negociaciones con empresas para garantizar mejoras laborales y salariales.",
      details: [
        "Mejoras salariales",
        "Condiciones laborales",
        "Beneficios adicionales",
      ],
    },
    {
      icon: "📚",
      title: "Formación Continua",
      description:
        "Desarrollamos programas de capacitación para potenciar habilidades y mejorar las oportunidades profesionales.",
      details: [
        "Cursos especializados",
        "Talleres prácticos",
        "Certificaciones reconocidas",
      ],
    },
  ];

  return (
    <section
      id="servicios"
      className="py-20 bg-gradient-to-b from-white to-slate-100 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-slate-800 to-transparent opacity-10"></div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="section-title text-4xl font-bold">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mt-4">
            Ofrecemos una amplia gama de servicios diseñados para proteger y
            mejorar las condiciones laborales de nuestros afiliados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg text-center transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl group relative overflow-hidden"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-slate-700 opacity-10 group-hover:opacity-20 transition duration-500 rounded-xl"></div>

              <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-50 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-green-600 transition-colors duration-300">
                {feature.title}
              </h3>

              <p className="text-slate-600 mb-6 leading-relaxed">
                {feature.description}
              </p>

              <ul className="text-left space-y-2">
                {feature.details.map((detail, i) => (
                  <li key={i} className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-slate-100">
                <a
                  href="#contacto"
                  className="inline-flex items-center text-green-600 font-medium hover:text-green-700 transition-colors"
                >
                  Más información
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
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
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="#contacto"
            className="btn-primary inline-flex items-center px-8 py-4 text-lg"
          >
            Contacta con nosotros
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
