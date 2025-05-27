
import React from "react";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import CodeBlock from "@/components/CodeBlock";
import InteractiveDemo from "@/components/InteractiveDemo";

// Componente de exemplo para demonstração
const SimpleComponent = () => {
  return (
    <div className="bg-blue-100 p-4 rounded-lg text-center">
      <h3 className="text-lg font-medium text-blue-800">Meu Componente</h3>
      <p className="text-blue-600">Este é um componente React simples!</p>
    </div>
  );
};

// Componente de exemplo para demonstração de props
const PropsComponent = () => {
  const Button = ({ text, color }) => {
    return (
      <button 
        className={`px-4 py-2 rounded-md text-white ${
          color === "blue" ? "bg-blue-500" : 
          color === "green" ? "bg-green-500" : 
          color === "red" ? "bg-red-500" : 
          "bg-gray-500"
        }`}
      >
        {text}
      </button>
    );
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <Button text="Botão Azul" color="blue" />
      <Button text="Botão Verde" color="green" />
      <Button text="Botão Vermelho" color="red" />
    </div>
  );
};

const ComponentsPage = () => {
  const simpleComponentCode = `import React from "react";

function MeuComponente() {
  return (
    <div className="bg-blue-100 p-4 rounded-lg text-center">
      <h3 className="text-lg font-medium text-blue-800">
        Meu Componente
      </h3>
      <p className="text-blue-600">
        Este é um componente React simples!
      </p>
    </div>
  );
}

export default MeuComponente;`;

  const propsComponentCode = `import React from "react";

// Componente filho que recebe props
function Button({ text, color }) {
  return (
    <button 
      className={\`px-4 py-2 rounded-md text-white \${
        color === "blue" ? "bg-blue-500" : 
        color === "green" ? "bg-green-500" : 
        color === "red" ? "bg-red-500" : 
        "bg-gray-500"
      }\`}
    >
      {text}
    </button>
  );
}

// Componente pai que usa o componente Button
function ButtonGroup() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Button text="Botão Azul" color="blue" />
      <Button text="Botão Verde" color="green" />
      <Button text="Botão Vermelho" color="red" />
    </div>
  );
}

export default ButtonGroup;`;

  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-6">Componentes React</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl">
          Componentes são os blocos de construção fundamentais de qualquer aplicação React. Aprenda como criar e utilizar componentes para construir interfaces de usuário reutilizáveis.
        </p>
      </motion.div>

      <Tabs defaultValue="conceitos" className="mt-12">
        <TabsList className="mb-8">
          <TabsTrigger value="conceitos">Conceitos Básicos</TabsTrigger>
          <TabsTrigger value="exemplos">Exemplos Práticos</TabsTrigger>
          <TabsTrigger value="avancado">Técnicas Avançadas</TabsTrigger>
        </TabsList>

        <TabsContent value="conceitos">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold mb-4">O que são Componentes?</h2>
              <p className="text-gray-700 mb-4">
                Componentes permitem dividir a interface do usuário em partes independentes e reutilizáveis. Conceitualmente, componentes são como funções JavaScript que aceitam entradas (chamadas "props") e retornam elementos React que descrevem o que deve aparecer na tela.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">Tipos de Componentes</h3>
              
              <Accordion type="single" collapsible className="mb-8">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Componentes Funcionais</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-4">
                      Componentes funcionais são funções JavaScript que recebem props como argumento e retornam elementos React. São mais simples e, com a introdução dos Hooks, podem fazer tudo o que os componentes de classe fazem.
                    </p>
                    <CodeBlock 
                      code={`function Greeting(props) {
  return <h1>Olá, {props.name}!</h1>;
}`} 
                      language="jsx" 
                    />
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>Componentes de Classe</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-4">
                      Componentes de classe são definidos usando classes ES6 e estendem React.Component. Eles requerem um método render() que retorna elementos React.
                    </p>
                    <CodeBlock 
                      code={`class Greeting extends React.Component {
  render() {
    return <h1>Olá, {this.props.name}!</h1>;
  }
}`} 
                      language="jsx" 
                    />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <h3 className="text-xl font-semibold mt-8 mb-4">Regras para Componentes</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Sempre comece nomes de componentes com letra maiúscula</li>
                <li>Retorne um único elemento raiz (ou use Fragments)</li>
                <li>Mantenha os componentes puros quando possível</li>
                <li>Divida componentes complexos em componentes menores</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-4">Anatomia de um Componente</h3>
              <div className="mb-4">
                <CodeBlock 
                  code={`import React from 'react';

function MeuComponente(props) {
  // Lógica do componente
  const mensagem = "Olá, mundo!";
  
  // Retorna JSX
  return (
    <div className="container">
      <h1>{mensagem}</h1>
      <p>Este é meu componente</p>
      {props.children}
    </div>
  );
}

export default MeuComponente;`} 
                  language="jsx" 
                  title="MeuComponente.jsx"
                />
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-800 mb-2">Dica Rápida</h4>
                <p className="text-blue-700 text-sm">
                  Use a extensão .jsx para seus arquivos de componentes React. Isso ajuda na identificação e também habilita o suporte de sintaxe em muitos editores de código.
                </p>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="exemplos">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Componente Simples</h2>
              <p className="text-gray-700 mb-6">
                Vamos começar com um componente básico que renderiza alguns elementos HTML estilizados.
              </p>
              
              <InteractiveDemo
                title="Componente Básico"
                description="Um componente React simples que renderiza uma caixa com texto"
                initialCode={simpleComponentCode}
                result={SimpleComponent}
              />
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-6">Componente com Props</h2>
              <p className="text-gray-700 mb-6">
                Agora vamos ver como criar um componente que aceita props para personalizar sua aparência e comportamento.
              </p>
              
              <InteractiveDemo
                title="Componente com Props"
                description="Um componente que recebe props para personalizar botões"
                initialCode={propsComponentCode}
                result={PropsComponent}
              />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="avancado">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold mb-4">Técnicas Avançadas de Componentes</h2>
              
              <h3 className="text-xl font-semibold mt-8 mb-4">Composição de Componentes</h3>
              <p className="text-gray-700 mb-4">
                A composição é uma técnica poderosa no React que permite criar componentes complexos combinando componentes mais simples. Isso promove a reutilização de código e torna seu aplicativo mais modular.
              </p>
              
              <CodeBlock 
                code={`// Componentes menores e reutilizáveis
function Avatar({ user }) {
  return <img src={user.avatarUrl} alt={user.name} />;
}

function UserInfo({ user }) {
  return (
    <div className="user-info">
      <Avatar user={user} />
      <div className="user-name">{user.name}</div>
    </div>
  );
}

// Componente composto que utiliza os componentes menores
function Comment({ author, text, date }) {
  return (
    <div className="comment">
      <UserInfo user={author} />
      <div className="comment-text">{text}</div>
      <div className="comment-date">{date}</div>
    </div>
  );
}`} 
                language="jsx" 
                title="Composição de Componentes"
              />
              
              <h3 className="text-xl font-semibold mt-8 mb-4">Componentes de Ordem Superior (HOCs)</h3>
              <p className="text-gray-700 mb-4">
                HOCs são funções que recebem um componente e retornam um novo componente com funcionalidades adicionais. São úteis para reutilizar lógica de componentes.
              </p>
              
              <CodeBlock 
                code={`// HOC que adiciona funcionalidade de loading
function withLoading(Component) {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (isLoading) {
      return <div>Carregando...</div>;
    }
    return <Component {...props} />;
  };
}

// Componente base
function UserList({ users }) {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

// Componente aprimorado com HOC
const UserListWithLoading = withLoading(UserList);

// Uso
<UserListWithLoading 
  isLoading={this.state.isLoading}
  users={this.state.users}
/>`} 
                language="jsx" 
                title="Componentes de Ordem Superior (HOCs)"
              />
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg border">
                <h3 className="text-lg font-semibold mb-4">Padrões Avançados</h3>
                
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded border">
                    <h4 className="font-medium mb-2">Render Props</h4>
                    <p className="text-sm text-gray-700">
                      Técnica onde um componente recebe uma função como prop que retorna elementos React, permitindo compartilhar código entre componentes.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded border">
                    <h4 className="font-medium mb-2">Componentes Controlados vs. Não-Controlados</h4>
                    <p className="text-sm text-gray-700">
                      Padrões para gerenciar formulários e inputs no React, diferenciando onde o estado é mantido.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded border">
                    <h4 className="font-medium mb-2">Lazy Loading</h4>
                    <p className="text-sm text-gray-700">
                      Carregamento de componentes apenas quando necessário, melhorando a performance inicial da aplicação.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-4">Recursos Adicionais</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="https://react.dev/learn" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center">
                      Documentação Oficial do React
                    </a>
                  </li>
                  <li>
                    <a href="https://react-typescript-cheatsheet.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      React+TypeScript Cheatsheet
                    </a>
                  </li>
                  <li>
                    <a href="https://kentcdodds.com/blog/compound-components-with-react-hooks" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Componentes Compostos com Hooks
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ComponentsPage;
