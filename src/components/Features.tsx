const Features = () => {
  const features = [
    {
      icon: "📝",
      title: "Asesoría Legal",
      description:
        "Ofrecemos orientación jurídica especializada en derecho laboral para proteger tus derechos e intereses en el trabajo.",
    },
    {
      icon: "👥",
      title: "Negociación Colectiva",
      description:
        "Representamos a nuestros afiliados en negociaciones con empresas para garantizar mejoras laborales y salariales.",
    },
    {
      icon: "🎓",
      title: "Formación Continua",
      description:
        "Desarrollamos programas de capacitación para potenciar habilidades y mejorar las oportunidades profesionales.",
    },
  ];

  return (
    <section id="servicios" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Nuestros Servicios</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-700 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
