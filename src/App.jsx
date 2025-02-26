import { useEffect, useState } from 'react';
import './App.css';
import foto from './assets/whatsapp.jpeg';
import carGif from './assets/Carro.gif';
import NavBar from './Components/NavBar';

export default function App() {
  const [hasScaled, setHasScaled] = useState(false);
  const [hasMoved, setHasMoved] = useState(false); // Movimento reativado
  const [showNavBar, setShowNavBar] = useState(false);

  useEffect(() => {
    // Primeiro timer para escalar a imagem
    const scaleTimer = setTimeout(() => {
      setHasScaled(true);
    }, 100); // Delay inicial de 100ms

    // Segundo timer para mover a imagem após escalar
    const moveTimer = setTimeout(() => {
      setHasMoved(true);
    }, 1100); // 1000ms para a animação de escala + 100ms inicial

    // Terceiro timer para exibir a NavBar
    const navBarTimer = setTimeout(() => {
      setShowNavBar(true);
    }, 1100); // Após o movimento

    return () => {
      clearTimeout(scaleTimer);
      clearTimeout(moveTimer); // Movimento reativado
      clearTimeout(navBarTimer);
    };
  }, []);

  return (
    <div className="bg-stone-900 w-screen h-screen flex flex-col items-center justify-center ">
      {/* NavBar */}
      <div className='flex w-[calc(100%-1.5rem)] m-3 h-16'><NavBar hasScaled={showNavBar} /></div>

      {/* Content Area */}
      <div className="flex flex-row justify-center w-full h-full flex-1 gap-4 px-3 ">
        {/* Image Container */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-4">
            <div className={`w-[600px] h-[350px] bg-gradient-to-br from-stone-700 to-stone-800 rounded-lg shadow-2xl flex flex-col items-center justify-center transition-opacity duration-1000 p-8 text-white border border-stone-600 relative overflow-hidden animate-softBounce hover:scale-105  ${hasMoved ? 'opacity-100' : 'opacity-0'}`}>

              {/* 🟡 Div invisível para esconder o carro */}
              <div className="relative z-10 flex flex-col items-center backdrop-blur rounded-lg">
                {/* Título destacado */}
                <h2 className="text-3xl font-extrabold text-center text-indigo-400 tracking-wide uppercase">
                  Quem sou eu?
                </h2>

                {/* Nome com destaque */}
                <p className="text-xl font-semibold mt-2 text-gray-300 italic">
                  Henrique Cedraz
                </p>
              </div>

              {/* Texto principal com fundo destacado */}
              <p className="text-md text-center mt-4 max-w-[500px] leading-relaxed bg-gray-700 rounded-lg text-gray-400 p-3 relative z-10">
                Sou um <span className="text-indigo-300 font-semibold">estudante constante</span>, sempre em busca de novos aprendizados e desafios. Apaixonado por <span className="text-indigo-300 font-semibold">tecnologia, desenvolvimento e inovação</span>, acredito que o conhecimento é uma jornada sem fim.
              </p>

              {/* Linha decorativa */}
              <div className="w-16 h-1 bg-indigo-400 mt-4 rounded-full relative z-10"></div>

              {/* 🚗 Carro animado passando atrás da div invisível */}
              <img
                src={carGif}
                alt="Carro passando"
                className="absolute top-9 left-[-100px] w-[100px] animate-carPass z-0 translate-y-[-50%]"
              />
            </div>






            <div
              className={`w-[280px] h-[350px] bg-stone-500 rounded-lg transform transition-transform duration-1000 ease-in-out ${hasScaled ? 'scale-100' : 'scale-125'
                } ${hasMoved ? '' : '-translate-x-16 translate-y-5'}`} // Movimento reativado
            >
              <img src={foto} alt="Minha imagem" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
          <div className={`flex flex-row gap-4 transition-opacity duration-1000 ${hasMoved ? 'opacity-100' : 'opacity-0'}`}>
            <div className="w-[500px] h-[175px] bg-stone-700 rounded-lg shadow-lg"></div>
            <div className="w-[380px] h-[175px] bg-stone-700 rounded-lg shadow-lg"></div>
          </div>
        </div>
        {/* Placeholder for Additional Content */}
        <div className={`w-full h-[540px] flex flex-col gap-4 transition-opacity duration-1000 ${hasMoved ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-full h-5/6 bg-stone-700 rounded-lg shadow-lg"></div>
          <div className="w-full h-1/6 bg-stone-700 rounded-lg shadow-lg"></div>
        </div>
      </div>
    </div>
  );
}
