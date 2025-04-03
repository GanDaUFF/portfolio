import React from 'react';

export default function NavBar({ hasScaled }) {
  return (
    <nav
    className={`bg-stone-700 text-white w-[calc(100%-1.5rem)] h-16 fixed top-3 left-1/2 transform -translate-x-1/2 flex items-center px-4 rounded-lg shadow-md transition-opacity duration-1000 ${
      hasScaled ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`}
    >
      <div className="text-lg font-bold">Meu Portfólio</div>
      <ul className="ml-auto flex space-x-4">
        <li><a href="#about" className="hover:text-stone-400">Sobre</a></li>
        <li><a href="#projects" className="hover:text-stone-400">Projetos</a></li>
        <li><a href="#contact" className="hover:text-stone-400">Contato</a></li>
      </ul>
    </nav>
  );
}
