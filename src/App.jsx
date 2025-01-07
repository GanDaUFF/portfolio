import { useEffect, useState } from 'react';
import './App.css';
import foto from './assets/whatsapp.jpeg';
import NavBar from './Components/NavBar';

export default function App() {
  const [hasScaled, setHasScaled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasScaled(true);
    }, 100); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center bg-stone-900 justify-center w-screen h-screen">
    <NavBar className={`${hasScaled ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`} />


      <div
        className={`w-1/4 h-3/4 bg-stone-500 rounded-lg transform transition-transform duration-1000 ease-in-out ${
          hasScaled ? 'scale-50' : 'scale-90'
        }`}
      >
        
        <img src={foto} alt="Minha imagem" className="w-full h-full object-cover rounded-lg" />
      </div>
    </div>
  );
}
