import React, { useState, useEffect } from "react";

const UseEffectDemo = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");
  
  useEffect(() => {
    if (count === 0) {
      setMessage("Clique no botão para incrementar o contador");
    } else if (count === 1) {
      setMessage("Você clicou uma vez!");
    } else {
      setMessage(`Você clicou ${count} vezes!`);
    }
  }, [count]);
  
  return (
    <div className="text-center">
      <h3 className="text-xl font-medium mb-4">{message}</h3>
      <div className="text-2xl font-bold mb-4">{count}</div>
      <button 
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      >
        Incrementar
      </button>
    </div>
  );
};

export default UseEffectDemo;