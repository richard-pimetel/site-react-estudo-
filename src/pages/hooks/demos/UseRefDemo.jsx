import React, { useState, useRef } from "react";

const UseRefDemo = () => {
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
          <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>
      </div>
      <button 
        onClick={togglePlay}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      >
        {isPlaying ? "Pausar" : "Reproduzir"}
      </button>
      <p className="mt-2 text-sm text-gray-600">
        Clique no vídeo ou no botão para {isPlaying ? "pausar" : "reproduzir"}
      </p>
    </div>
  );
};

export default UseRefDemo;