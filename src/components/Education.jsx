import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Educación y Formación</h2>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-8 bg-gray-50 p-6 rounded-lg shadow-md"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Licenciatura en ciencias de la comunicación</h3>
          {/* <p className="text-gray-600">Filosofia y letras</p> */}
          <p className="text-gray-600">Actualmente cursando primer año</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-8 bg-gray-50 p-6 rounded-lg shadow-md"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Educación Secundaria</h3>
          <p className="text-gray-600">HUMANIDADES Y CIENCIAS SOCIALES</p>
          <p className="text-gray-600">Esc sec barrio el mirador - 2021</p>
          <p className="text-gray-600 font-medium">Graduado</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-gray-50 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Reparador de PC</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Limpieza y optimización de equipos</li>
              <li>Instalación de sistemas operativos Windows</li>
              <li>Configuración de programas</li>
              <li>Armado y desarmado de PC de escritorio</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-gray-50 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Operador de PC</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Microsoft Excel avanzado</li>
              <li>Microsoft Word avanzado</li>
              <li>Manejo de software básico</li>
              <li>Navegación en sistemas operativos</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;