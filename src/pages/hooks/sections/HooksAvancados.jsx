import React from "react";
import CodeBlock from "@/components/CodeBlock";

const HooksAvancados = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <h2 className="text-2xl font-semibold mb-4">Hooks Avançados</h2>
        
        <h3 className="text-xl font-semibold mt-8 mb-4">useReducer</h3>
        <p className="text-gray-700 mb-4">
          useReducer é uma alternativa ao useState para gerenciar estados complexos ou quando a próxima atualização de estado depende do valor anterior.
        </p>
        
        <CodeBlock 
          code={`import React, { useReducer } from 'react';

// Definindo o reducer
function counterReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      throw new Error('Ação desconhecida');
  }
}

function Counter() {
  // Inicializando o estado com useReducer
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  
  return (
    <div>
      <p>Contagem: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}`} 
          language="jsx" 
          title="Exemplo de useReducer"
        />
        
        <h3 className="text-xl font-semibold mt-8 mb-4">useCallback</h3>
        <p className="text-gray-700 mb-4">
          useCallback retorna uma versão memorizada de uma função callback que só muda se uma das dependências mudar. Isso é útil para otimizar o desempenho, evitando renderizações desnecessárias de componentes filhos.
        </p>
        
        <CodeBlock 
          code={`import React, { useState, useCallback } from 'react';

function ParentComponent() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);
  
  const handleClick = useCallback(() => {
    console.log('Clicado!', count);
  }, [count]);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar Count</button>
      <button onClick={() => setOtherState(otherState + 1)}>
        Incrementar Other State
      </button>
      <ChildComponent onClick={handleClick} />
    </div>
  );
}

const ChildComponent = React.memo(({ onClick }) => {
  console.log('ChildComponent renderizado');
  return <button onClick={onClick}>Clique em mim</button>;
});`} 
          language="jsx" 
          title="Exemplo de useCallback"
        />
        
        <h3 className="text-xl font-semibold mt-8 mb-4">useMemo</h3>
        <p className="text-gray-700 mb-4">
          useMemo retorna um valor memorizado que só é recalculado quando uma das dependências muda. Isso é útil para cálculos caros ou para evitar re-renderizações desnecessárias.
        </p>
        
        <CodeBlock 
          code={`import React, { useState, useMemo } from 'react';

function ExpensiveCalculation({ list }) {
  const sortedList = useMemo(() => {
    console.log('Ordenando lista...');
    return [...list].sort((a, b) => a - b);
  }, [list]);
  
  return (
    <div>
      <p>Lista ordenada:</p>
      <ul>
        {sortedList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  const [numbers, setNumbers] = useState([10, 5, 3, 8, 2]);
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Incrementar Count: {count}
      </button>
      <button onClick={() => setNumbers([...numbers, Math.floor(Math.random() * 100)])}>
        Adicionar Número
      </button>
      <ExpensiveCalculation list={numbers} />
    </div>
  );
}`} 
          language="jsx" 
          title="Exemplo de useMemo"
        />
      </div>

      <div className="space-y-6">
        <div className="bg-gray-50 p-6 rounded-lg border">
          <h3 className="text-lg font-semibold mb-4">Hooks Personalizados</h3>
          <p className="text-gray-700 mb-4">
            Hooks personalizados são uma forma de reutilizar lógica de estado entre componentes. Eles são funções JavaScript cujo nome começa com "use" e podem chamar outros hooks.
          </p>
          
          <CodeBlock 
            code={`import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error('Erro ao buscar dados');
        }
        
        const result = await response.json();
        setData(result);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [url]);
  
  return { data, loading, error };
}

function UserProfile({ userId }) {
  const { data, loading, error } = useFetch(
    \`https://api.example.com/users/\${userId}\`
  );
  
  if (loading) return <div>Carregando...</div>;
  if (error) return <div>Erro: {error}</div>;
  
  return (
    <div>
      <h2>{data.name}</h2>
      <p>Email: {data.email}</p>
    </div>
  );
}`} 
            language="jsx" 
            title="Hook Personalizado"
          />
        </div>
        
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">Recursos Adicionais</h3>
          <ul className="space-y-2">
            <li>
              <a href="https://react.dev/reference/react/hooks" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Documentação Oficial de Hooks
              </a>
            </li>
            <li>
              <a href="https://usehooks.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                useHooks - Coleção de Hooks Personalizados
              </a>
            </li>
            <li>
              <a href="https://overreacted.io/a-complete-guide-to-useeffect/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Guia Completo para useEffect
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HooksAvancados;