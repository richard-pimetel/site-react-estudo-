
import React from "react";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import CodeBlock from "@/components/CodeBlock";
import InteractiveDemo from "@/components/InteractiveDemo";

// Componente de exemplo para demonstração de props básicas
const BasicPropsDemo = () => {
  const Greeting = ({ name, role }) => (
    <div className="bg-blue-50 p-4 rounded-lg text-center">
      <h3 className="text-lg font-medium text-blue-800">Olá, {name}!</h3>
      <p className="text-blue-600">Você é um {role} incrível!</p>
    </div>
  );

  return (
    <div className="space-y-4">
      <Greeting name="Maria" role="Desenvolvedora" />
      <Greeting name="João" role="Designer" />
    </div>
  );
};

// Componente de exemplo para demonstração de children props
const ChildrenPropsDemo = () => {
  const Card = ({ title, children }) => (
    <div className="border rounded-lg overflow-hidden shadow-sm">
      <div className="bg-gray-50 p-3 border-b">
        <h3 className="font-medium">{title}</h3>
      </div>
      <div className="p-4">
        {children}
      </div>
    </div>
  );

  return (
    <div className="space-y-4 w-full max-w-md mx-auto">
      <Card title="Informações Importantes">
        <p className="text-gray-700">
          Este é um conteúdo passado como children para o componente Card.
        </p>
        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
          Saiba mais
        </button>
      </Card>
      
      <Card title="Estatísticas">
        <div className="flex justify-between">
          <div className="text-center">
            <div className="text-2xl font-bold">120</div>
            <div className="text-sm text-gray-500">Usuários</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">42</div>
            <div className="text-sm text-gray-500">Projetos</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">8.5</div>
            <div className="text-sm text-gray-500">Avaliação</div>
          </div>
        </div>
      </Card>
    </div>
  );
};

const PropsPage = () => {
  const basicPropsCode = `import React from "react";

// Componente que recebe props
function Greeting({ name, role }) {
  return (
    <div className="bg-blue-50 p-4 rounded-lg text-center">
      <h3 className="text-lg font-medium text-blue-800">
        Olá, {name}!
      </h3>
      <p className="text-blue-600">
        Você é um {role} incrível!
      </p>
    </div>
  );
}

// Componente pai que usa o componente Greeting
function GreetingList() {
  return (
    <div className="space-y-4">
      <Greeting name="Maria" role="Desenvolvedora" />
      <Greeting name="João" role="Designer" />
    </div>
  );
}

export default GreetingList;`;

  const childrenPropsCode = `import React from "react";

// Componente que recebe children como prop
function Card({ title, children }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm">
      <div className="bg-gray-50 p-3 border-b">
        <h3 className="font-medium">{title}</h3>
      </div>
      <div className="p-4">
        {children}
      </div>
    </div>
  );
}

// Componente pai que usa o componente Card
function CardExample() {
  return (
    <div className="space-y-4 w-full max-w-md mx-auto">
      <Card title="Informações Importantes">
        <p className="text-gray-700">
          Este é um conteúdo passado como children para o componente Card.
        </p>
        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
          Saiba mais
        </button>
      </Card>
      
      <Card title="Estatísticas">
        <div className="flex justify-between">
          <div className="text-center">
            <div className="text-2xl font-bold">120</div>
            <div className="text-sm text-gray-500">Usuários</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">42</div>
            <div className="text-sm text-gray-500">Projetos</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">8.5</div>
            <div className="text-sm text-gray-500">Avaliação</div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default CardExample;`;

  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-6">Props no React</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl">
          Props (abreviação de "properties") são a forma como os componentes React recebem dados. Aprenda como usar props para tornar seus componentes dinâmicos e reutilizáveis.
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
              <h2 className="text-2xl font-semibold mb-4">O que são Props?</h2>
              <p className="text-gray-700 mb-4">
                Props são argumentos passados para componentes React. Eles funcionam de forma semelhante aos atributos HTML, mas podem conter qualquer valor JavaScript, incluindo strings, números, objetos, arrays e até mesmo funções.
              </p>
              <p className="text-gray-700 mb-4">
                Props são somente leitura e ajudam a tornar seus componentes mais dinâmicos e reutilizáveis, permitindo que você passe dados de um componente pai para um componente filho.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">Características das Props</h3>
              
              <Accordion type="single" collapsible className="mb-8">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Unidirecionalidade</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-4">
                      Os dados em React fluem em uma única direção: de cima para baixo, de componentes pais para componentes filhos. Isso é conhecido como fluxo de dados unidirecional.
                    </p>
                    <CodeBlock 
                      code={`// Componente pai
function Parent() {
  const data = "Dados do componente pai";
  return <Child message={data} />;
}

// Componente filho
function Child({ message }) {
  return <p>{message}</p>;
}`} 
                      language="jsx" 
                    />
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>Imutabilidade</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-4">
                      Props são imutáveis, o que significa que um componente não deve modificar suas próprias props. Se um componente precisa modificar dados, ele deve usar o estado (state).
                    </p>
                    <CodeBlock 
                      code={`function Button({ text }) {
  // CORRETO: Usar a prop diretamente
  return <button>{text}</button>;
  
  // INCORRETO: Tentar modificar a prop
  // text = text.toUpperCase(); // Isso causará um erro
}`} 
                      language="jsx" 
                    />
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>Props Padrão</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-4">
                      Você pode definir valores padrão para props que serão usados quando uma prop específica não for fornecida.
                    </p>
                    <CodeBlock 
                      code={`function Greeting({ name = "Visitante" }) {
  return <h1>Olá, {name}!</h1>;
}

// Uso:
// <Greeting /> renderiza "Olá, Visitante!"
// <Greeting name="Maria" /> renderiza "Olá, Maria!"`} 
                      language="jsx" 
                    />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <h3 className="text-xl font-semibold mt-8 mb-4">Tipos de Props</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Props básicas:</strong> Strings, números, booleanos</li>
                <li><strong>Props de objeto:</strong> Passar objetos complexos</li>
                <li><strong>Props de função:</strong> Passar funções como callbacks</li>
                <li><strong>Children props:</strong> Conteúdo entre tags de abertura e fechamento</li>
                <li><strong>Spread props:</strong> Passar todas as propriedades de um objeto</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-4">Sintaxe de Props</h3>
              <div className="mb-4">
                <CodeBlock 
                  code={`// Definindo um componente que aceita props
function UserProfile({ name, age, isAdmin, onLogout }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Idade: {age}</p>
      {isAdmin && <p>Administrador</p>}
      <button onClick={onLogout}>Sair</button>
    </div>
  );
}

// Usando o componente com props
function App() {
  const handleLogout = () => {
    console.log("Usuário saiu");
  };

  return (
    <UserProfile
      name="Ana Silva"
      age={28}
      isAdmin={true}
      onLogout={handleLogout}
    />
  );
}`} 
                  language="jsx" 
                  title="Exemplo de Props"
                />
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-800 mb-2">Dica Rápida</h4>
                <p className="text-blue-700 text-sm">
                  Use a desestruturação de objetos para acessar props de forma mais limpa e direta. Isso torna seu código mais legível e evita repetir <code>props.</code> várias vezes.
                </p>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="exemplos">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Props Básicas</h2>
              <p className="text-gray-700 mb-6">
                Vamos ver como passar e usar props simples em componentes React.
              </p>
              
              <InteractiveDemo
                title="Props Básicas"
                description="Um componente que recebe e exibe props simples"
                initialCode={basicPropsCode}
                result={BasicPropsDemo}
              />
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-6">Children Props</h2>
              <p className="text-gray-700 mb-6">
                A prop especial <code>children</code> permite que você passe elementos JSX como filhos de um componente.
              </p>
              
              <InteractiveDemo
                title="Children Props"
                description="Um componente que utiliza a prop children para criar layouts reutilizáveis"
                initialCode={childrenPropsCode}
                result={ChildrenPropsDemo}
              />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="avancado">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold mb-4">Técnicas Avançadas com Props</h2>
              
              <h3 className="text-xl font-semibold mt-8 mb-4">Prop Drilling e Alternativas</h3>
              <p className="text-gray-700 mb-4">
                Prop drilling ocorre quando você precisa passar props através de vários níveis de componentes. Embora funcione, pode tornar o código difícil de manter.
              </p>
              
              <CodeBlock 
                code={`// Prop drilling através de múltiplos níveis
function App() {
  const user = { name: "João", role: "Admin" };
  return <Layout user={user} />;
}

function Layout({ user }) {
  return (
    <div>
      <Header user={user} />
      <Content />
      <Footer />
    </div>
  );
}

function Header({ user }) {
  return (
    <header>
      <UserInfo user={user} />
    </header>
  );
}

function UserInfo({ user }) {
  return <div>Olá, {user.name} ({user.role})</div>;
}`} 
                language="jsx" 
                title="Exemplo de Prop Drilling"
              />
              
              <p className="text-gray-700 mt-4 mb-4">
                Alternativas ao prop drilling incluem:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li><strong>Context API:</strong> Para compartilhar dados que são considerados "globais" para uma árvore de componentes</li>
                <li><strong>Gerenciadores de estado:</strong> Como Redux, Zustand ou Recoil para aplicações mais complexas</li>
                <li><strong>Composição de componentes:</strong> Reestruturar seus componentes para evitar passar props desnecessariamente</li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-8 mb-4">Render Props</h3>
              <p className="text-gray-700 mb-4">
                Render Props é um padrão onde uma prop é uma função que retorna um elemento React, permitindo compartilhar código entre componentes.
              </p>
              
              <CodeBlock 
                code={`// Componente que usa o padrão render props
function MouseTracker({ render }) {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  
  React.useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Chama a função render passando os dados atuais
  return render(position);
}

// Uso do componente
function App() {
  return (
    <MouseTracker
      render={({ x, y }) => (
        <div>
          <h1>Posição do Mouse:</h1>
          <p>X: {x}, Y: {y}</p>
        </div>
      )}
    />
  );
}`} 
                language="jsx" 
                title="Padrão Render Props"
              />
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg border">
                <h3 className="text-lg font-semibold mb-4">Padrões Avançados</h3>
                
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded border">
                    <h4 className="font-medium mb-2">Prop Types</h4>
                    <p className="text-sm text-gray-700">
                      Validação de tipos para props, ajudando a capturar bugs relacionados a tipos incorretos.
                    </p>
                    <CodeBlock 
                      code={`import PropTypes from 'prop-types';

function User({ name, age, isAdmin }) {
  return (/* ... */);
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  isAdmin: PropTypes.bool
};

User.defaultProps = {
  isAdmin: false
};`} 
                      language="jsx" 
                    />
                  </div>
                  
                  <div className="bg-white p-4 rounded border">
                    <h4 className="font-medium mb-2">Componentes Compostos</h4>
                    <p className="text-sm text-gray-700">
                      Padrão onde componentes trabalham juntos para fornecer uma API mais expressiva.
                    </p>
                    <CodeBlock 
                      code={`// Exemplo simplificado de componentes compostos
const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = React.useState(0);
  
  return React.Children.map(children, (child, index) => {
    return React.cloneElement(child, {
      isActive: index === activeTab,
      onClick: () => setActiveTab(index)
    });
  });
};

const Tab = ({ isActive, onClick, children }) => {
  return (
    <button 
      onClick={onClick}
      style={{ fontWeight: isActive ? 'bold' : 'normal' }}
    >
      {children}
    </button>
  );
};

// Uso
<Tabs>
  <Tab>Aba 1</Tab>
  <Tab>Aba 2</Tab>
  <Tab>Aba 3</Tab>
</Tabs>`} 
                      language="jsx" 
                    />
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-4">Recursos Adicionais</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="https://react.dev/learn/passing-props-to-a-component" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Documentação Oficial sobre Props
                    </a>
                  </li>
                  <li>
                    <a href="https://kentcdodds.com/blog/prop-drilling" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Prop Drilling por Kent C. Dodds
                    </a>
                  </li>
                  <li>
                    <a href="https://reactpatterns.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Padrões React Avançados
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

export default PropsPage;
