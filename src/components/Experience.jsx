import { motion } from 'framer-motion';

const experiences = [
  {
    company: "Junta Electoral",
    period: "10/03/2023 - 28/07/2023",
    responsibilities: [
      "Realización de cómputos y procesamiento de información electoral",
      "Carga de datos al sistema con precisión",
      "Generación y distribución de documentos oficiales en PDF"
    ]
  },
  {
    company: "Mc Kio",
    period: "27/05/2021 - 19/07/2021",
    responsibilities: [
      "Manejo de caja registradora y atención personalizada",
      "Gestión de inventario básico",
      "Supervisión y mantenimiento de limpieza"
    ]
  },
  {
    company: "Kalabacha",
    period: "02/08/2021 - 03/09/2021",
    responsibilities: [
      "Atención al cliente en mostrador",
      "Coordinación de envíos entre sucursales",
      "Mantenimiento de estándares de calidad"
    ]
  }
];

const Experience = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Experiencia Laboral</h2>
        <div className="space-y-8">
          {experiences.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold text-gray-800">{job.company}</h3>
              <p className="text-gray-600 mb-4">{job.period}</p>
              <ul className="list-disc list-inside space-y-2">
                {job.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-gray-700">{resp}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;