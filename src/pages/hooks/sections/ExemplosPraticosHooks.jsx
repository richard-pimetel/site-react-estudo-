import React from "react";
import InteractiveDemo from "@/components/InteractiveDemo";
import UseEffectDemo from "@/pages/hooks/demos/UseEffectDemo";
import UseRefDemo from "@/pages/hooks/demos/UseRefDemo";

const ExemplosPraticosHooks = () => {
  const useEffectCode = `import React, { useState, useEffect } from "react";

function CounterWithEffect() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");
  
  useEffect(() => {
    if (count === 0) {
      setMessage("Clique no botão para incrementar o contador");
    } else if (count === 1) {
      setMessage("Você clicou uma vez!");
    } else {
      setMessage(\`Você clicou \${count} vezes!\`);
    }
    
    return () => {
      console.log("Limpando efeito anterior");
    };
  }, [count]);
  
  return (
    <div className="text-center">
      <h3 className="text-xl font-medium mb-4">{message}</h3>
      <div className="text-2xl font-bold mb-4">{count}</div>
      <button 
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Incrementar
      </button>
    </div>
  );
}`;

  const useRefCode = `import React, { useRef, useState } from "react";

function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  return (
    <div className="text-center">
      <div className="mb-4 bg-gray-800 rounded-lg overflow-hidden">
        <video 
          ref={videoRef}
          width="100%" 
          height="auto"
          loop
          muted
          onClick={togglePlay}
          className="cursor-pointer"
        >
          <source 
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" 
            type="video/mp4" 
          />
          Seu navegador não suporta o elemento de vídeo.
        </video>
      </div>
      <button 
        onClick={togglePlay}
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        {isPlaying ? "Pausar" : "Reproduzir"}
      </button>
      <p className="mt-2 text-sm text-gray-600">
        Clique no vídeo ou no botão para {isPlaying ? "pausar" : "reproduzir"}
      </p>
    </div>
  );
}`;

  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-2xl font-semibold mb-6">useEffect na Prática</h2>
        <p className="text-gray-700 mb-6">
          O hook useEffect permite executar efeitos colaterais em componentes funcionais, como buscar dados, assinar eventos ou manipular o DOM diretamente.
        </p>
        
        <InteractiveDemo
          title="useEffect com Dependências"
          description="Um componente que usa useEffect para atualizar uma mensagem quando o contador muda"
          initialCode={useEffectCode}
          result={UseEffectDemo}
        />
      </div>
      
      <div>
        <h2 className="text-2xl font-semibold mb-6">useRef na Prática</h2>
        <p className="text-gray-700 mb-6">
          O hook useRef permite criar uma referência mutável que persiste durante todo o ciclo de vida do componente. É útil para acessar elementos DOM diretamente.
        </p>
        
        <InteractiveDemo
          title="useRef para Manipular Vídeo"
          description="Um componente que usa useRef para controlar um elemento de vídeo"
          initialCode={useRefCode}
          result={UseRefDemo}
        />
      </div>
    </div>
  );
};

export default ExemplosPraticosHooks;