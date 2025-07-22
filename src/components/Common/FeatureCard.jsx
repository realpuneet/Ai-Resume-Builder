// src/components/FeatureCard.jsx
import { motion } from "framer-motion";

const FeatureCard = ({ title, description, icon: Icon, delay }) => {
  return (
    <motion.div
      className="bg-white dark:bg-[#1e1e2f] rounded-2xl shadow-lg p-8 w-full max-w-sm border border-gray-200 dark:border-gray-700 
                 hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between min-h-[340px]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 text-white text-2xl mb-5 group-hover:scale-110 transition-transform">
        <Icon />
      </div>

      <div className="flex-1">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
          {description}
        </p>
      </div>

      <div className="mt-6 text-sm text-indigo-600 dark:text-indigo-400 font-medium group-hover:underline cursor-pointer">
        Learn more →
      </div>
    </motion.div>
  );
};

export default FeatureCard;
