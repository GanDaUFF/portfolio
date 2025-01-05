import { useEffect, useState } from 'react';
import './App.css';
import foto from './assets/whatsapp.jpeg'; // Corrigir o caminho da imagem

export default function App() {
  const [hasScaled, setHasScaled] = useState(false);

  useEffect(() => {
    // Definir um delay para iniciar a animação ao carregar
    const timer = setTimeout(() => {
      setHasScaled(true);
    }, 100); // Atraso de 100ms para garantir que a animação seja aplicada corretamente

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center bg-stone-900 justify-center w-screen h-screen">
      <div
        className={`w-1/4 h-3/4 bg-stone-500 rounded-lg transform transition-transform duration-1000 ease-in-out ${
          hasScaled ? 'scale-50' : 'scale-100'
        }`}
      >
        {/* Inserir a imagem */}
        <img src={foto} alt="Minha imagem" className="w-full h-full object-cover rounded-lg" />
      </div>
    </div>
  );
}
