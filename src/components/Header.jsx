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
              src="https://scontent.ftuc2-1.fna.fbcdn.net/v/t39.30808-6/441406625_3296981603939542_6666834702808830735_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF4BYpmBv3c8P1ngzy2OV0vKPu4zLLNyboo-7jMss3JuhenjzsatpAVIzbgvVjamx8sb4ATqEMgu6OKNfV1ArI4&_nc_ohc=zk2c3r2Bfo4Q7kNvgGIGWPL&_nc_zt=23&_nc_ht=scontent.ftuc2-1.fna&_nc_gid=AlrsuubOKLELd0cxRyl5Y7z&oh=00_AYDXWuF1zL0nXFliQxqcOb8Q5J9PWJLWIxgVp4RZY_oaig&oe=674C51ED"
              alt="Mauro Herman"
              className="w-48 h-48 rounded-full border-4 border-white shadow-lg"
            />
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">Mena Herrera Mauro Herman</h1>
          <p className="text-xl text-gray-300 mb-8">Estudiante de Periodismo | Profesional en Desarrollo</p>
          
          <a
            href="../../public/cv-mauroMena.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-white text-gray-900 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors font-semibold"
          >
            Descargar CV
          </a>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;