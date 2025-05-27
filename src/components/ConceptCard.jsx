
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ConceptCard = ({ title, description, icon: Icon, to, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
      className="concept-card"
    >
      <Link to={to} className="block p-6">
        <div className="flex items-center mb-4">
          <div className="p-2 rounded-lg bg-blue-50">
            <Icon className="h-6 w-6 concept-icon" />
          </div>
          <h3 className="ml-3 text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center text-blue-600 font-medium">
          <span>Aprender mais</span>
          <ArrowRight className="ml-2 h-4 w-4" />
        </div>
      </Link>
    </motion.div>
  );
};

export default ConceptCard;
