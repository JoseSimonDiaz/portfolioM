import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

const Header = () => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-900 text-white py-20"
    >
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <img
              src="../../public/imgperfil.jpg"
              alt="Mauro Herman"
              className="w-48 h-48 rounded-full border-4 border-white shadow-lg"
            />
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">Mena Herrera Mauro Herman</h1>
          <p className="text-xl text-gray-300 mb-8">Estudiante de Periodismo | Profesional en Desarrollo</p>
          
          <a
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-white text-gray-900 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors font-semibold"
            href="../../public/cv-mauroMena.pdf"
          >
            <FaDownload />
            Descargar CV
          </a>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;