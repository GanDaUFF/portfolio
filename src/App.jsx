import { useEffect, useState } from 'react';
import './App.css';
import foto from './assets/whatsapp.jpeg';
import NavBar from './Components/NavBar';

export default function App() {
  const [hasScaled, setHasScaled] = useState(false);
  // const [hasMoved, setHasMoved] = useState(false); // Movimento desativado
  const [showNavBar, setShowNavBar] = useState(false);

  useEffect(() => {
    // Primeiro timer para escalar a imagem
    const scaleTimer = setTimeout(() => {
      setHasScaled(true);
    }, 100); // Delay inicial de 100ms

    // Segundo timer para mover a imagem após escalar (desativado)
    /*
    const moveTimer = setTimeout(() => {
      setHasMoved(true);
    }, 1100); // 1000ms para a animação de escala + 100ms inicial
    */

    // Terceiro timer para exibir a NavBar
    const navBarTimer = setTimeout(() => {
      setShowNavBar(true);
    }, 1500); // Após o movimento

    return () => {
      clearTimeout(scaleTimer);
      // clearTimeout(moveTimer); // Movimento desativado
      clearTimeout(navBarTimer);
    };
  }, []);

  return (
    <div className="bg-stone-900 w-screen h-screen flex flex-col items-center justify-center ">
      {/* NavBar */}
      <div className='flex w-[calc(100%-1.5rem)] h-16'><NavBar hasScaled={showNavBar} /></div>

      {/* Content Area */}
      <div className="flex flex-row items-center  flex-1 ">
        {/* Image Container */}
        <div className="flex flex-col">
          <div className="flex flex-row m-4 gap-4">
          <div className="w-[600px] h-[350 px] bg-stone-700 rounded-lg shadow-lg flex items-center justify-center"></div>
            <div
              className={`w-[280px] h-[350 px] bg-stone-500 rounded-lg transform transition-transform duration-1000 ease-in-out ${hasScaled ? 'scale-100' : 'scale-110'
                }`}
            // ${hasMoved ? 'translate-x-40 -translate-y-12' : ''} // Movimento desativado
            >
              <img src={foto} alt="Minha imagem" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
          <div className="flex flex-row mx-4 gap-4">

          <div className="w-[500px] h-[125px] bg-stone-700 rounded-lg shadow-lg"></div>
          <div className="w-[380px] h-[125px] bg-stone-700 rounded-lg shadow-lg"></div>
          </div>

          
        </div>
        {/* Placeholder for Additional Content */}
        <div className="w-[300px] h-[510px] bg-stone-700 rounded-lg shadow-lg"></div>
      </div>
    </div>
  );
}
