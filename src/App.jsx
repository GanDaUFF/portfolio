import { useEffect, useState } from 'react';
import './App.css';
import foto from './assets/whatsapp.jpeg';
import NavBar from './Components/NavBar';

export default function App() {
  const [hasScaled, setHasScaled] = useState(false);
  const [showNavBar, setShowNavBar] = useState(false);

  useEffect(() => {
    // Primeiro timer para escalar a imagem
    const scaleTimer = setTimeout(() => {
      setHasScaled(true);
    }, 100); // Delay inicial de 100ms

    // Segundo timer para exibir a NavBar após a escala
    const navBarTimer = setTimeout(() => {
      setShowNavBar(true);
    }, 1100); // 1000ms para a animação de escala + 100ms inicial

    return () => {
      clearTimeout(scaleTimer);
      clearTimeout(navBarTimer);
    };
  }, []);

  return (
    <div className="flex items-center bg-stone-900 justify-center w-screen h-screen">
      <NavBar hasScaled={showNavBar} />

      <div
        className={`w-1/4 h-3/4 bg-stone-500 rounded-lg transform transition-transform duration-1000 ease-in-out ${
          hasScaled ? 'scale-75' : 'scale-100'
        }`}
      >
        <img src={foto} alt="Minha imagem" className="w-full h-full object-cover rounded-lg" />
      </div>
    </div>
  );
}
