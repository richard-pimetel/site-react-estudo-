
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import CodeBlock from "@/components/CodeBlock";
import InteractiveDemo from "@/components/InteractiveDemo";

// Componente de exemplo para contador
const CounterDemo = () => {
  const [count, setCount] = useState(0);
  
  return (
    <div className="text-center">
      <h3 className="text-2xl font-bold mb-4">{count}</h3>
      <div className="flex gap-2 justify-center">
        <button 
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
        >
          -
        </button>
        <button 
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          +
        </button>
      </div>
    </div>
  );
};

// Componente de exemplo para formulário
const FormDemo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Em uma aplicação real, aqui você enviaria os dados para um servidor
  };
  
  if (submitted) {
    return (
      <div className="text-center p-4 bg-green-50 rounded-lg">
        <h3 className="text-lg font-medium text-green-800 mb-2">Formulário Enviado!</h3>
        <p className="text-green-700 mb-4">Obrigado por entrar em contato, {formData.name}.</p>
        <button
          onClick={() => {
            setFormData({ name: "", email: "", message: "" });
            setSubmitted(false);
          }}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          Enviar Outro
        </button>
      </div>
    );
  }
  
  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Nome
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Mensagem
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Enviar
      </button>
    </form>
  );
};

const StatePage = () => {
  const counterCode = `import React, { useState } from "react";

function Counter() {
  // Declarando uma variável de estado chamada "count"
  const [count, setCount] = useState(0);
  
  return (
    <div className="text-center">
      <h3 className="text-2xl font-bold mb-4">{count}</h3>
      <div className="flex gap-2 justify-center">
        <button 
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
        >
          -
        </button>
        <button 
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;`;

  const formCode = `import React, { useState } from "react";

function ContactForm() {
  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  // Estado para controlar se o formulário foi enviado
  const [submitted, setSubmitted] = useState(false);
  
  // Função para atualizar o estado quando os inputs mudam
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Em uma aplicação real, aqui você enviaria os dados para um servidor
  };
  
  // Renderização condicional baseada no estado
  if (submitted) {
    return (
      <div className="text-center p-4 bg-green-50 rounded-lg">
        <h3 className="text-lg font-medium text-green-800 mb-2">
          Formulário Enviado!
        </h3>
        <p className="text-green-700 mb-4">
          Obrigado por entrar em contato, {formData.name}.
        </p>
        <button
          onClick={() => {
            setFormData({ name: "", email: "", message: "" });
            setSubmitted(false);
          }}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          Enviar Outro
        </button>
      </div>
    );
  }
  
  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Nome
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Mensagem
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md"
          rows="4"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Enviar
      </button>
    </form>
  );
}

export default ContactForm;`;

  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-6">Estado no React</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl">
          O estado (state) é uma das características mais poderosas do React, permitindo que seus componentes armazenem e gerenciem dados que podem mudar ao longo do tempo, tornando suas interfaces interativas.
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
              <h2 className="text-2xl font-semibold mb-4">O que é Estado?</h2>
              <p className="text-gray-700 mb-4">
                Estado é um objeto JavaScript que armazena dados que podem mudar durante o ciclo de vida de um componente. Quando o estado muda, o componente é renderizado novamente, refletindo as mudanças na interface do usuário.
              </p>
              <p className="text-gray-700 mb-4">
                Diferente das props, que são passadas de componentes pais para filhos, o estado é gerenciado internamente pelo próprio componente.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">Características do Estado</h3>
              
              <Accordion type="single" collapsible className="mb-8">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Estado é Local e Encapsulado</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-4">
                      O estado é completamente encapsulado dentro do componente que o define. Ele não é acessível a nenhum componente além daquele que o possui e o gerencia.
                    </p>
                    <CodeBlock 
                      code={`function Counter() {
  // Este estado só é acessível dentro deste componente
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Contagem: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Incrementar
      </button>
    </div>
  );
}`} 
                      language="jsx" 
                    />
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>Estado Causa Re-renderização</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-4">
                      Quando o estado de um componente muda, o React re-renderiza o componente para refletir as mudanças. Este é o mecanismo central que permite interfaces reativas no React.
                    </p>
                    <CodeBlock 
                      code={`function ToggleButton() {
  const [isOn, setIsOn] = useState(false);
  
  // Quando setIsOn é chamado, o componente re-renderiza
  return (
    <button
      onClick={() => setIsOn(!isOn)}
      className={isOn ? "bg-green-500" : "bg-gray-300"}
    >
      {isOn ? "ON" : "OFF"}
    </button>
  );
}`} 
                      language="jsx" 
                    />
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>Estado é Assíncrono</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-4">
                      Atualizações de estado podem ser assíncronas, o que significa que o React pode agrupar várias atualizações de estado para melhorar o desempenho.
                    </p>
                    <CodeBlock 
                      code={`function Counter() {
  const [count, setCount] = useState(0);
  
  const handleClick = () => {
    // Estas atualizações podem ser agrupadas pelo React
    setCount(count + 1); // Usando o valor atual
    
    // Para garantir que você está usando o valor mais recente:
    setCount(prevCount => prevCount + 1); // Usando função de atualização
  };
  
  return (
    <button onClick={handleClick}>Incrementar</button>
  );
}`} 
                      language="jsx" 
                    />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <h3 className="text-xl font-semibold mt-8 mb-4">Quando Usar Estado</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Para dados que mudam ao longo do tempo</li>
                <li>Para valores que o usuário pode modificar (inputs, toggles, etc.)</li>
                <li>Para controlar a interface do usuário (mostrar/esconder elementos)</li>
                <li>Para armazenar respostas de APIs ou dados assíncronos</li>
                <li>Para manter o controle de formulários</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-4">useState Hook</h3>
              <div className="mb-4">
                <CodeBlock 
                  code={`import React, { useState } from 'react';

function ExemploEstado() {
  // Declaração de estado
  const [contador, setContador] = useState(0);
  
  // useState retorna um array com 2 elementos:
  // 1. O valor atual do estado (contador)
  // 2. Uma função para atualizar o estado (setContador)
  
  return (
    <div>
      <p>Você clicou {contador} vezes</p>
      
      {/* Atualizando o estado quando o botão é clicado */}
      <button onClick={() => setContador(contador + 1)}>
        Clique aqui
      </button>
    </div>
  );
}`} 
                  language="jsx" 
                  title="Exemplo de useState"
                />
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-800 mb-2">Dica Rápida</h4>
                <p className="text-blue-700 text-sm">
                  Quando o novo estado depende do estado anterior, use a forma de função para garantir que você está trabalhando com o valor mais recente:
                  <code className="block mt-2 bg-blue-100 p-2 rounded">
                    setContador(prevContador => prevContador + 1);
                  </code>
                </p>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="exemplos">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Contador Simples</h2>
              <p className="text-gray-700 mb-6">
                Um exemplo básico de como usar o estado para criar um contador interativo.
              </p>
              
              <InteractiveDemo
                title="Contador com useState"
                description="Um componente que usa estado para incrementar e decrementar um contador"
                initialCode={counterCode}
                result={CounterDemo}
              />
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-6">Formulário com Estado</h2>
              <p className="text-gray-700 mb-6">
                Um exemplo mais complexo que mostra como gerenciar o estado de um formulário.
              </p>
              
              <InteractiveDemo
                title="Formulário Controlado"
                description="Um formulário que usa estado para controlar inputs e mostrar feedback"
                initialCode={formCode}
                result={FormDemo}
              />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="avancado">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold mb-4">Técnicas Avançadas de Gerenciamento de Estado</h2>
              
              <h3 className="text-xl font-semibold mt-8 mb-4">Elevação de Estado</h3>
              <p className="text-gray-700 mb-4">
                Quando vários componentes precisam compartilhar o mesmo estado, você pode "elevar" o estado para o componente pai comum mais próximo.
              </p>
              
              <CodeBlock 
                code={`function ParentComponent() {
  // Estado elevado para o componente pai
  const [sharedData, setSharedData] = useState("Dados compartilhados");
  
  // Função para atualizar o estado
  const updateData = (newData) => {
    setSharedData(newData);
  };
  
  return (
    <div>
      {/* Passando o estado e a função de atualização como props */}
      <ChildA data={sharedData} />
      <ChildB data={sharedData} onUpdate={updateData} />
    </div>
  );
}

function ChildA({ data }) {
  return <div>Componente A: {data}</div>;
}

function ChildB({ data, onUpdate }) {
  return (
    <div>
      <div>Componente B: {data}</div>
      <button onClick={() => onUpdate("Novos dados")}>
        Atualizar Dados
      </button>
    </div>
  );
}`} 
                language="jsx" 
                title="Elevação de Estado"
              />
              
              <h3 className="text-xl font-semibold mt-8 mb-4">useReducer para Estado Complexo</h3>
              <p className="text-gray-700 mb-4">
                Para estados mais complexos ou quando a próxima atualização depende do estado anterior, useReducer pode ser uma alternativa melhor ao useState.
              </p>
              
              <CodeBlock 
                code={`import React, { useReducer } from 'react';

// Definindo o reducer
function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, {
        id: Date.now(),
        text: action.payload,
        completed: false
      }];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
}

function TodoApp() {
  // Usando useReducer em vez de useState
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [text, setText] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_TODO', payload: text });
    setText('');
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Adicionar tarefa..."
        />
        <button type="submit">Adicionar</button>
      </form>
      
      <ul>
        {todos.map(todo => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            <span onClick={() => dispatch({
              type: 'TOGGLE_TODO',
              payload: todo.id
            })}>
              {todo.text}
            </span>
            <button onClick={() => dispatch({
              type: 'DELETE_TODO',
              payload: todo.id
            })}>
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}`} 
                language="jsx" 
                title="useReducer para Estado Complexo"
              />
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg border">
                <h3 className="text-lg font-semibold mb-4">Padrões Avançados</h3>
                
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded border">
                    <h4 className="font-medium mb-2">Estado Imutável</h4>
                    <p className="text-sm text-gray-700">
                      Sempre trate o estado como imutável. Nunca modifique o estado diretamente; em vez disso, crie uma nova cópia com as alterações desejadas.
                    </p>
                    <CodeBlock 
                      code={`// INCORRETO
const [user, setUser] = useState({ name: 'João', age: 25 });
user.age = 26; // Modificação direta do estado!
setUser(user);

// CORRETO
const [user, setUser] = useState({ name: 'João', age: 25 });
setUser({ ...user, age: 26 }); // Cria um novo objeto`} 
                      language="jsx" 
                    />
                  </div>
                  
                  <div className="bg-white p-4 rounded border">
                    <h4 className="font-medium mb-2">Estado Derivado</h4>
                    <p className="text-sm text-gray-700">
                      Evite duplicar estado quando você pode derivá-lo de outro estado ou props.
                    </p>
                    <CodeBlock 
                      code={`// EVITE
const [items, setItems] = useState([1, 2, 3]);
const [itemCount, setItemCount] = useState(3);

const addItem = (item) => {
  setItems([...items, item]);
  setItemCount(itemCount + 1); // Redundante!
};

// MELHOR
const [items, setItems] = useState([1, 2, 3]);
// Derive o contador do array de itens
const itemCount = items.length;

const addItem = (item) => {
  setItems([...items, item]);
  // Não precisa atualizar itemCount separadamente
};`} 
                      language="jsx" 
                    />
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-4">Recursos Adicionais</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="https://react.dev/learn/managing-state" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Documentação Oficial sobre Estado
                    </a>
                  </li>
                  <li>
                    <a href="https://kentcdodds.com/blog/application-state-management-with-react" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Gerenciamento de Estado de Aplicação com React
                    </a>
                  </li>
                  <li>
                    <a href="https://redux.js.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Redux - Biblioteca para Gerenciamento de Estado
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

export default StatePage;
