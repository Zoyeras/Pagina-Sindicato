const News = () => {
  const news = [
    {
      date: "18 Abril, 2025",
      title: "Firma del nuevo convenio colectivo del sector",
      excerpt:
        "Después de meses de negociaciones, hemos logrado firmar un nuevo convenio que mejora sustancialmente las condiciones salariales...",
      image: "/api/placeholder/400/200",
    },
    {
      date: "10 Abril, 2025",
      title: "Jornada informativa sobre derechos laborales",
      excerpt:
        "El próximo día 25 celebraremos una jornada informativa sobre los derechos fundamentales de los trabajadores y cómo defenderlos...",
      image: "/api/placeholder/400/200",
    },
    {
      date: "5 Abril, 2025",
      title: "Ampliación de los servicios de asesoría jurídica",
      excerpt:
        "A partir de mayo, ampliamos nuestro equipo jurídico para ofrecer asistencia personalizada en todas las delegaciones...",
      image: "/api/placeholder/400/200",
    },
  ];

  return (
    <section id="noticias" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Últimas Noticias</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {news.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-gray-500 text-sm mb-2">{item.date}</div>
                <h3 className="text-xl font-bold text-slate-700 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <a
                  href="#"
                  className="text-green-600 font-medium hover:text-green-700 flex items-center"
                >
                  Leer más <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
