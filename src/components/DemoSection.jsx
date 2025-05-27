
import React from "react";
import { motion } from "framer-motion";
import InteractiveDemo from "@/components/InteractiveDemo";

// Componente de exemplo para o contador
const CounterDemo = () => {
  const [count, setCount] = React.useState(0);
  
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

// Componente de exemplo para a lista de tarefas
const TodoDemo = () => {
  const [todos, setTodos] = React.useState([
    { id: 1, text: "Aprender React", completed: true },
    { id: 2, text: "Criar componentes", completed: false },
    { id: 3, text: "Gerenciar estado", completed: false }
  ]);
  const [newTodo, setNewTodo] = React.useState("");
  
  const addTodo = () => {
    if (newTodo.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    setNewTodo("");
  };
  
  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };
  
  return (
    <div className="w-full max-w-md">
      <div className="flex mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Nova tarefa..."
          className="flex-1 px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onKeyPress={(e) => e.key === "Enter" && addTodo()}
        />
        <button
          onClick={addTodo}
          className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600"
        >
          Adicionar
        </button>
      </div>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li 
            key={todo.id}
            className="flex items-center p-3 border rounded-md hover:bg-gray-50"
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              className="mr-3 h-4 w-4 text-blue-500"
            />
            <span className={todo.completed ? "line-through text-gray-400" : ""}>
              {todo.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const DemoSection = () => {
  const counterCode = `import React, { useState } from "react";

function Counter() {
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
}`;

  const todoCode = `import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Aprender React", completed: true },
    { id: 2, text: "Criar componentes", completed: false },
    { id: 3, text: "Gerenciar estado", completed: false }
  ]);
  const [newTodo, setNewTodo] = useState("");
  
  const addTodo = () => {
    if (newTodo.trim() === "") return;
    setTodos([...todos, { 
      id: Date.now(), 
      text: newTodo, 
      completed: false 
    }]);
    setNewTodo("");
  };
  
  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };
  
  return (
    <div className="w-full max-w-md">
      <div className="flex mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Nova tarefa..."
          className="flex-1 px-4 py-2 border rounded-l-md"
          onKeyPress={(e) => e.key === "Enter" && addTodo()}
        />
        <button
          onClick={addTodo}
          className="px-4 py-2 bg-blue-500 text-white rounded-r-md"
        >
          Adicionar
        </button>
      </div>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li 
            key={todo.id}
            className="flex items-center p-3 border rounded-md"
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              className="mr-3 h-4 w-4"
            />
            <span className={todo.completed ? "line-through text-gray-400" : ""}>
              {todo.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}`;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Exemplos <span className="gradient-text">interativos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Veja o React em ação e experimente modificar o código para ver os resultados em tempo real
          </p>
        </motion.div>

        <div className="space-y-12">
          <InteractiveDemo
            title="Contador Simples"
            description="Um exemplo básico de gerenciamento de estado com useState"
            initialCode={counterCode}
            result={CounterDemo}
          />
          
          <InteractiveDemo
            title="Lista de Tarefas"
            description="Um exemplo mais complexo com gerenciamento de estado e interatividade"
            initialCode={todoCode}
            result={TodoDemo}
          />
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
