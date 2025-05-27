
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Code, FileCode, Star } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Lista de Tarefas",
    description: "Crie uma aplicação de lista de tarefas com funcionalidades de adicionar, remover, marcar como concluído e filtrar tarefas.",
    level: "Iniciante",
    duration: "2-3 horas",
    concepts: ["useState", "useEffect", "Componentes", "Eventos"],
    image: "todo-app"
  },
  {
    id: 2,
    title: "Aplicativo de Clima",
    description: "Desenvolva um aplicativo que mostra previsões do tempo para diferentes cidades usando uma API de clima.",
    level: "Intermediário",
    duration: "4-5 horas",
    concepts: ["useEffect", "Fetch API", "Props", "Estado"],
    image: "weather-app"
  },
  {
    id: 3,
    title: "E-commerce Simples",
    description: "Crie uma loja online com listagem de produtos, carrinho de compras e checkout.",
    level: "Avançado",
    duration: "8-10 horas",
    concepts: ["Context API", "useReducer", "Rotas", "Formulários"],
    image: "ecommerce"
  },
  {
    id: 4,
    title: "Blog com Markdown",
    description: "Desenvolva um blog que permite escrever e visualizar posts em formato Markdown.",
    level: "Intermediário",
    duration: "5-6 horas",
    concepts: ["Bibliotecas externas", "useEffect", "Rotas", "Estado"],
    image: "blog"
  },
  {
    id: 5,
    title: "Dashboard de Dados",
    description: "Crie um dashboard interativo com gráficos e visualizações de dados.",
    level: "Avançado",
    duration: "10-12 horas",
    concepts: ["Bibliotecas de gráficos", "useContext", "Fetch API", "Componentes complexos"],
    image: "dashboard"
  },
  {
    id: 6,
    title: "Jogo da Memória",
    description: "Desenvolva um jogo da memória com cartas que devem ser combinadas em pares.",
    level: "Iniciante",
    duration: "3-4 horas",
    concepts: ["useState", "useEffect", "Lógica de jogo", "CSS Grid"],
    image: "memory-game"
  }
];

const ProjectCard = ({ project }) => {
  const getLevelColor = (level) => {
    switch (level) {
      case "Iniciante":
        return "text-green-600 bg-green-50";
      case "Intermediário":
        return "text-blue-600 bg-blue-50";
      case "Avançado":
        return "text-purple-600 bg-purple-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="h-full card-hover">
        <CardHeader className="pb-4">
          <div className="mb-2">
            <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${getLevelColor(project.level)}`}>
              {project.level}
            </span>
          </div>
          <CardTitle>{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <img  alt={`Projeto ${project.title}`} className="w-full h-48 object-cover rounded-md" src="https://images.unsplash.com/photo-1608403810239-ac22e2c3bac7" />
          </div>
          <div className="flex items-center text-sm text-gray-500 mb-3">
            <Clock className="h-4 w-4 mr-1" />
            <span>{project.duration}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.concepts.map((concept, index) => (
              <span 
                key={index}
                className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-md"
              >
                {concept}
              </span>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild className="w-full">
            <Link to={`/projetos/${project.id}`}>
              Ver Projeto <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const ProjectsPage = () => {
  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h1 className="text-4xl font-bold mb-6">Projetos Práticos</h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          Aprenda React na prática construindo projetos reais. Cada projeto foca em conceitos específicos e inclui instruções passo a passo, código de exemplo e desafios extras.
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-6 mb-12 bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border border-blue-100">
        <div className="md:w-2/3">
          <h2 className="text-2xl font-bold mb-3 gradient-text">Por que projetos práticos?</h2>
          <p className="text-gray-700 mb-4">
            Construir projetos é a melhor maneira de consolidar seu conhecimento em React. Você aprenderá a:
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start">
              <Code className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
              <span>Aplicar conceitos teóricos em cenários reais</span>
            </li>
            <li className="flex items-start">
              <FileCode className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
              <span>Estruturar aplicações React de forma organizada</span>
            </li>
            <li className="flex items-start">
              <Star className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
              <span>Resolver problemas comuns de desenvolvimento</span>
            </li>
          </ul>
        </div>
        <div className="md:w-1/3 flex items-center justify-center">
          <img  alt="Pessoa programando em React" className="max-w-full rounded-lg shadow-lg" src="https://images.unsplash.com/photo-1509966756634-9c23dd6e6815" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
