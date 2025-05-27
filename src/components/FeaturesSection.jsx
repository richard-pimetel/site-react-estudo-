
import React from "react";
import { motion } from "framer-motion";
import { Code, Layers, Zap, BookOpen, Puzzle, Rocket } from "lucide-react";
import ConceptCard from "@/components/ConceptCard";

const FeaturesSection = () => {
  const features = [
    {
      icon: Layers,
      title: "Componentes",
      description: "Aprenda a criar componentes reutilizáveis e a estruturar sua aplicação React.",
      to: "/fundamentos/componentes",
      delay: 0.1
    },
    {
      icon: Code,
      title: "Props",
      description: "Entenda como passar dados entre componentes e criar interfaces dinâmicas.",
      to: "/fundamentos/props",
      delay: 0.2
    },
    {
      icon: Zap,
      title: "Estado",
      description: "Domine o gerenciamento de estado para criar aplicações interativas.",
      to: "/fundamentos/estado",
      delay: 0.3
    },
    {
      icon: BookOpen,
      title: "Hooks",
      description: "Explore os hooks do React para adicionar funcionalidades avançadas.",
      to: "/fundamentos/hooks",
      delay: 0.4
    },
    {
      icon: Puzzle,
      title: "Context API",
      description: "Compartilhe dados entre componentes sem passar props manualmente.",
      to: "/avancado/context",
      delay: 0.5
    },
    {
      icon: Rocket,
      title: "Projetos Práticos",
      description: "Aplique seus conhecimentos em projetos reais do início ao fim.",
      to: "/projetos",
      delay: 0.6
    }
  ];

  return (
    <section className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Aprenda React <span className="gradient-text">passo a passo</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Domine os conceitos fundamentais do React com exemplos práticos e explicações detalhadas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <ConceptCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              to={feature.to}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
