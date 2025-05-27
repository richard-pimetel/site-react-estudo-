import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import CodeBlock from "@/components/CodeBlock";

const ConceitosBasicosHooks = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <h2 className="text-2xl font-semibold mb-4">O que são Hooks?</h2>
        <p className="text-gray-700 mb-4">
          Hooks são funções que permitem que você use recursos do React, como estado e efeitos colaterais, em componentes funcionais. Antes dos hooks, esses recursos só estavam disponíveis em componentes de classe.
        </p>
        <p className="text-gray-700 mb-4">
          Hooks foram introduzidos no React 16.8 e revolucionaram a forma como escrevemos componentes, tornando o código mais conciso, legível e fácil de testar.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-4">Regras dos Hooks</h3>
        <p className="text-gray-700 mb-4">
          Para garantir que os hooks funcionem corretamente, existem duas regras importantes que você deve seguir:
        </p>
        
        <Accordion type="single" collapsible className="mb-8">
          <AccordionItem value="item-1">
            <AccordionTrigger>Só chame Hooks no Nível Superior</AccordionTrigger>
            <AccordionContent>
              <p className="mb-4">
                Não chame hooks dentro de loops, condições ou funções aninhadas. Em vez disso, use-os sempre no nível superior do seu componente React.
              </p>
              <CodeBlock 
                code={`// CORRETO
function ExemploCorreto() {
  const [count, setCount] = useState(0);
  
  // ...
}

// INCORRETO
function ExemploIncorreto() {
  if (condicao) {
    const [count, setCount] = useState(0); // Isso é errado!
  }
  
  // ...
}`} 
                language="jsx" 
              />
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2">
            <AccordionTrigger>Só chame Hooks em Componentes React</AccordionTrigger>
            <AccordionContent>
              <p className="mb-4">
                Chame hooks apenas dentro de componentes funcionais do React ou dentro de hooks personalizados. Não os chame em funções JavaScript regulares.
              </p>
              <CodeBlock 
                code={`// CORRETO
function MeuComponente() {
  const [count, setCount] = useState(0);
  // ...
}

// CORRETO (Hook personalizado)
function useMinhaLogica() {
  const [valor, setValor] = useState(0);
  // ...
  return valor;
}

// INCORRETO
function funcaoRegular() {
  const [count, setCount] = useState(0); // Isso é errado!
  // ...
}`} 
                language="jsx" 
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <h3 className="text-xl font-semibold mt-8 mb-4">Hooks Básicos</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li><strong>useState:</strong> Permite adicionar estado a componentes funcionais</li>
          <li><strong>useEffect:</strong> Permite executar efeitos colaterais em componentes funcionais</li>
          <li><strong>useContext:</strong> Permite consumir um contexto React</li>
          <li><strong>useReducer:</strong> Uma alternativa ao useState para lógica de estado mais complexa</li>
          <li><strong>useRef:</strong> Permite criar uma referência mutável que persiste durante todo o ciclo de vida do componente</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg border">
        <h3 className="text-lg font-semibold mb-4">useState</h3>
        <div className="mb-4">
          <CodeBlock 
            code={`import React, { useState } from 'react';

function Contador() {
  // Declarando uma variável de estado
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>
        Clique aqui
      </button>
    </div>
  );
}`} 
            language="jsx" 
            title="Exemplo de useState"
          />
        </div>
        
        <h3 className="text-lg font-semibold mb-4 mt-6">useEffect</h3>
        <div className="mb-4">
          <CodeBlock 
            code={`import React, { useState, useEffect } from 'react';

function ExemploUseEffect() {
  const [count, setCount] = useState(0);
  
  // Similar a componentDidMount e componentDidUpdate
  useEffect(() => {
    // Atualiza o título do documento
    document.title = \`Você clicou \${count} vezes\`;
    
    // Função de limpeza (opcional)
    return () => {
      document.title = 'React App';
    };
  }, [count]); // Só re-executa se count mudar
  
  return (
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>
        Clique aqui
      </button>
    </div>
  );
}`} 
            language="jsx" 
            title="Exemplo de useEffect"
          />
        </div>
        
        <div className="bg-blue-50 p-4 rounded-lg mt-6">
          <h4 className="font-medium text-blue-800 mb-2">Dica Rápida</h4>
          <p className="text-blue-700 text-sm">
            O array de dependências do useEffect controla quando o efeito será executado:
          </p>
          <ul className="text-blue-700 text-sm mt-2 space-y-1">
            <li><code>useEffect(fn)</code> - Executa após cada renderização</li>
            <li><code>useEffect(fn, [])</code> - Executa apenas uma vez (montagem)</li>
            <li><code>useEffect(fn, [a, b])</code> - Executa quando a ou b mudam</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ConceitosBasicosHooks;