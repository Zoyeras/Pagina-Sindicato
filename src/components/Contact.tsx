const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Contacto</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-slate-700 mb-6">
              Información de contacto
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-700 mr-4">
                  📍
                </div>
                <p>
                  Av. de los Trabajadores, 123
                  <br />
                  28001 Madrid, España
                </p>
              </div>

              <div className="flex items-center">
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-700 mr-4">
                  📞
                </div>
                <p>+34 91 123 45 67</p>
              </div>

              <div className="flex items-center">
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-700 mr-4">
                  ✉️
                </div>
                <p>info@sindicatounidos.org</p>
              </div>

              <div className="flex items-center">
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-700 mr-4">
                  🕒
                </div>
                <p>Lunes - Viernes: 9:00 - 18:00</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-2xl font-bold text-slate-700 mb-6">
                Encuéntranos
              </h3>
              <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-slate-600">Mapa de ubicación</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-700 mb-6">
              Envíanos un mensaje
            </h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Nombre completo"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
              <input
                type="email"
                placeholder="Correo electrónico"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
              <input
                type="text"
                placeholder="Asunto"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <textarea
                placeholder="Tu mensaje"
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              ></textarea>
              <button type="submit" className="btn-primary">
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
