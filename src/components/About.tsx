const About = () => {
  return (
    <section id="nosotros" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Quiénes Somos</h2>

        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="mb-6">
            Somos una organización sindical comprometida con la defensa de los
            derechos laborales y la mejora de las condiciones de trabajo en
            todos los sectores. Con más de 15 años de experiencia, hemos
            conseguido importantes avances para nuestros afiliados.
          </p>
          <p>
            Nuestra misión es representar efectivamente a los trabajadores,
            promover el diálogo social y contribuir a la construcción de una
            sociedad más justa y equitativa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-slate-700 mb-4">
              Nuestra Visión
            </h3>
            <p>
              Ser el sindicato de referencia en nuestro sector, reconocido por
              su eficacia y compromiso con los trabajadores.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-slate-700 mb-4">
              Nuestros Valores
            </h3>
            <p>
              Transparencia, solidaridad, justicia social y compromiso con la
              mejora continua de las condiciones laborales.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-slate-700 mb-4">
              Nuestro Impacto
            </h3>
            <p>
              Más de 5.000 trabajadores representados y numerosos convenios
              colectivos negociados con éxito.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
