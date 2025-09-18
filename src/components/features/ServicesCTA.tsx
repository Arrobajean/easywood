import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ServicesCTA = () => (
  <div className="text-center bg-gradient-to-br from-gray-900 to-black text-white rounded-2xl p-12">
    <h2 className="text-3xl font-bold mb-4">
      ¿Listo para transformar tu espacio?
    </h2>
    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
      Contacta con nosotros para recibir un presupuesto personalizado y sin
      compromiso. Nuestro equipo de expertos te asesorará en todo el proceso.
    </p>
    <Link to="/contacto">
      <motion.button
        className="bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium text-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Solicitar presupuesto gratuito
      </motion.button>
    </Link>
  </div>
);

export default ServicesCTA;
