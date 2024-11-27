import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Contacto</h2>
        
        <div className="flex justify-center space-x-6 mb-12">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="mailto:contacto@ejemplo.com"
            className="flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full hover:bg-gray-100 transition-colors"
          >
            <FaEnvelope />
            <span>Email</span>
          </motion.a>
          
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </motion.a>
        </div>

        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;