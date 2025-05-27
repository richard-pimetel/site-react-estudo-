
import React from "react";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Code, ExternalLink, FileText, Video, Youtube } from "lucide-react";

const ResourcesPage = () => {
  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h1 className="text-4xl font-bold mb-6">Recursos para Aprendizado</h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          Uma coleção cuidadosamente selecionada de recursos para ajudar você a aprofundar seus conhecimentos em React, desde documentação oficial até tutoriais em vídeo e ferramentas úteis.
        </p>
      </motion.div>

      <Tabs defaultValue="documentacao" className="mt-12">
        <TabsList className="mb-8">
          <TabsTrigger value="documentacao">Documentação</TabsTrigger>
          <TabsTrigger value="tutoriais">Tutoriais</TabsTrigger>
          <TabsTrigger value="cursos">Cursos</TabsTrigger>
          <TabsTrigger value="ferramentas">Ferramentas</TabsTrigger>
        </TabsList>

        <TabsContent value="documentacao">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ResourceCard 
              title="Documentação Oficial do React"
              description="A fonte definitiva para aprender React diretamente dos criadores."
              icon={<BookOpen className="h-10 w-10 text-blue-500" />}
              link="https://react.dev/"
            />
            <ResourceCard 
              title="Create React App"
              description="Aprenda como configurar um novo projeto React com Create React App."
              icon={<Code className="h-10 w-10 text-blue-500" />}
              link="https://create-react-app.dev/"
            />
            <ResourceCard 
              title="React Router"
              description="Documentação oficial do React Router para navegação em aplicações React."
              icon={<FileText className="h-10 w-10 text-blue-500" />}
              link="https://reactrouter.com/"
            />
            <ResourceCard 
              title="Redux"
              description="Biblioteca para gerenciamento de estado em aplicações JavaScript."
              icon={<Code className="h-10 w-10 text-blue-500" />}
              link="https://redux.js.org/"
            />
            <ResourceCard 
              title="React Hooks"
              description="Guia completo sobre os Hooks do React e como utilizá-los."
              icon={<BookOpen className="h-10 w-10 text-blue-500" />}
              link="https://react.dev/reference/react/hooks"
            />
            <ResourceCard 
              title="MDN Web Docs"
              description="Documentação abrangente sobre tecnologias web, incluindo JavaScript."
              icon={<FileText className="h-10 w-10 text-blue-500" />}
              link="https://developer.mozilla.org/pt-BR/"
            />
          </div>
        </TabsContent>

        <TabsContent value="tutoriais">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ResourceCard 
              title="React para Iniciantes"
              description="Um guia passo a passo para quem está começando com React."
              icon={<Video className="h-10 w-10 text-blue-500" />}
              link="https://www.youtube.com/watch?v=SqcY0GlETPk"
              type="video"
            />
            <ResourceCard 
              title="Criando uma Aplicação com Hooks"
              description="Aprenda a criar uma aplicação completa usando React Hooks."
              icon={<Video className="h-10 w-10 text-blue-500" />}
              link="https://www.youtube.com/watch?v=O6P86uwfdR0"
              type="video"
            />
            <ResourceCard 
              title="Dominando o Context API"
              description="Tutorial detalhado sobre como usar o Context API para gerenciamento de estado."
              icon={<FileText className="h-10 w-10 text-blue-500" />}
              link="https://blog.rocketseat.com.br/context-api-react/"
              type="article"
            />
            <ResourceCard 
              title="Autenticação em React"
              description="Como implementar autenticação em aplicações React."
              icon={<Video className="h-10 w-10 text-blue-500" />}
              link="https://www.youtube.com/watch?v=KISMYYXSIX8"
              type="video"
            />
            <ResourceCard 
              title="Testes em React"
              description="Aprenda a testar seus componentes React com Jest e React Testing Library."
              icon={<FileText className="h-10 w-10 text-blue-500" />}
              link="https://www.robinwieruch.de/react-testing-library/"
              type="article"
            />
            <ResourceCard 
              title="React Performance"
              description="Dicas e técnicas para otimizar o desempenho de aplicações React."
              icon={<Video className="h-10 w-10 text-blue-500" />}
              link="https://www.youtube.com/watch?v=5fLW5Q5ODiE"
              type="video"
            />
          </div>
        </TabsContent>

        <TabsContent value="cursos">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ResourceCard 
              title="React - The Complete Guide"
              description="Curso completo de React, incluindo Hooks, Redux, React Router e muito mais."
              icon={<Youtube className="h-10 w-10 text-red-500" />}
              link="https://www.udemy.com/course/react-the-complete-guide-incl-redux/"
              type="course"
            />
            <ResourceCard 
              title="Epic React"
              description="Série de workshops para dominar React, por Kent C. Dodds."
              icon={<BookOpen className="h-10 w-10 text-blue-500" />}
              link="https://epicreact.dev/"
              type="course"
            />
            <ResourceCard 
              title="React para Iniciantes"
              description="Curso gratuito de React para quem está começando."
              icon={<Video className="h-10 w-10 text-blue-500" />}
              link="https://www.youtube.com/playlist?list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO"
              type="course"
            />
            <ResourceCard 
              title="Ignite - Trilha React"
              description="Programa de aceleração em React da Rocketseat."
              icon={<BookOpen className="h-10 w-10 text-blue-500" />}
              link="https://www.rocketseat.com.br/ignite"
              type="course"
            />
            <ResourceCard 
              title="React Avançado"
              description="Crie aplicações reais com NextJS, GraphQL e mais."
              icon={<Code className="h-10 w-10 text-blue-500" />}
              link="https://reactavancado.com.br/"
              type="course"
            />
            <ResourceCard 
              title="Frontend Masters"
              description="Cursos de React e outras tecnologias frontend por especialistas da indústria."
              icon={<BookOpen className="h-10 w-10 text-blue-500" />}
              link="https://frontendmasters.com/courses/?q=react"
              type="course"
            />
          </div>
        </TabsContent>

        <TabsContent value="ferramentas">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ResourceCard 
              title="React DevTools"
              description="Extensão para navegadores que permite inspecionar componentes React."
              icon={<Code className="h-10 w-10 text-blue-500" />}
              link="https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi"
              type="tool"
            />
            <ResourceCard 
              title="CodeSandbox"
              description="Ambiente de desenvolvimento online para criar projetos React rapidamente."
              icon={<Code className="h-10 w-10 text-blue-500" />}
              link="https://codesandbox.io/"
              type="tool"
            />
            <ResourceCard 
              title="Storybook"
              description="Ferramenta para desenvolver componentes UI de forma isolada."
              icon={<BookOpen className="h-10 w-10 text-blue-500" />}
              link="https://storybook.js.org/"
              type="tool"
            />
            <ResourceCard 
              title="React Hook Form"
              description="Biblioteca para gerenciar formulários em React com facilidade."
              icon={<Code className="h-10 w-10 text-blue-500" />}
              link="https://react-hook-form.com/"
              type="tool"
            />
            <ResourceCard 
              title="Chakra UI"
              description="Biblioteca de componentes acessíveis e customizáveis para React."
              icon={<Code className="h-10 w-10 text-blue-500" />}
              link="https://chakra-ui.com/"
              type="tool"
            />
            <ResourceCard 
              title="React Query"
              description="Biblioteca para busca, cache e atualização de dados em aplicações React."
              icon={<Code className="h-10 w-10 text-blue-500" />}
              link="https://tanstack.com/query/latest"
              type="tool"
            />
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg border border-blue-100">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 gradient-text">Quer contribuir?</h2>
          <p className="text-gray-700 mb-6">
            Conhece algum recurso incrível que deveria estar nesta lista? Tem alguma sugestão para melhorar nossa plataforma de aprendizado? Adoraríamos ouvir suas ideias!
          </p>
          <Button>
            Enviar Sugestão <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

const ResourceCard = ({ title, description, icon, link, type = "doc" }) => {
  const getTypeLabel = () => {
    switch (type) {
      case "video":
        return "Vídeo";
      case "article":
        return "Artigo";
      case "course":
        return "Curso";
      case "tool":
        return "Ferramenta";
      default:
        return "Documentação";
    }
  };

  const getTypeColor = () => {
    switch (type) {
      case "video":
        return "text-red-600 bg-red-50";
      case "article":
        return "text-green-600 bg-green-50";
      case "course":
        return "text-purple-600 bg-purple-50";
      case "tool":
        return "text-orange-600 bg-orange-50";
      default:
        return "text-blue-600 bg-blue-50";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="h-full card-hover">
        <CardHeader>
          <div className="flex justify-between items-start">
            {icon}
            <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${getTypeColor()}`}>
              {getTypeLabel()}
            </span>
          </div>
          <CardTitle className="mt-4">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardFooter>
          <Button asChild variant="outline" className="w-full">
            <a href={link} target="_blank" rel="noopener noreferrer">
              Acessar Recurso <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ResourcesPage;
