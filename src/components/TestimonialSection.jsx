
import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Carlos Silva",
    role: "Desenvolvedor Frontend",
    content: "Este site me ajudou a entender os conceitos do React que eu estava tendo dificuldade. As explicações são claras e os exemplos práticos são excelentes!",
    avatar: "CS",
    rating: 5
  },
  {
    id: 2,
    name: "Ana Oliveira",
    role: "Estudante de Programação",
    content: "Comecei a aprender React há pouco tempo e este site tem sido meu guia principal. Os projetos práticos me ajudaram a aplicar o que aprendi.",
    avatar: "AO",
    rating: 5
  },
  {
    id: 3,
    name: "Rafael Mendes",
    role: "Desenvolvedor Full Stack",
    content: "Mesmo já trabalhando com React, encontrei conteúdos avançados que me ajudaram a melhorar minhas habilidades. Recomendo para todos os níveis!",
    avatar: "RM",
    rating: 4
  }
];

const TestimonialCard = ({ testimonial, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
      className="bg-white p-6 rounded-xl shadow-md"
    >
      <div className="flex items-center mb-4">
        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-medium">
          {testimonial.avatar}
        </div>
        <div className="ml-4">
          <h4 className="font-semibold">{testimonial.name}</h4>
          <p className="text-sm text-gray-600">{testimonial.role}</p>
        </div>
      </div>
      
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
      </div>
      
      <p className="text-gray-700">{testimonial.content}</p>
    </motion.div>
  );
};

const TestimonialSection = () => {
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
            O que nossos <span className="gradient-text">alunos dizem</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Veja como nossa plataforma tem ajudado desenvolvedores a dominar o React
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
