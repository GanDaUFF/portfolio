import React from 'react';

export default function NavBar() {
  return (
    <nav className="bg-stone-700 text-white w-[calc(100%-1rem)] my-2 h-16 fixed top-0 left-1/2 transform -translate-x-1/2 flex items-center px-4 rounded-lg shadow-md">
      <div className="text-lg font-bold">Meu Portfólio</div>
      <ul className="ml-auto flex space-x-4">
        <li><a href="#about" className="hover:text-stone-400">Sobre</a></li>
        <li><a href="#projects" className="hover:text-stone-400">Projetos</a></li>
        <li><a href="#contact" className="hover:text-stone-400">Contato</a></li>
      </ul>
    </nav>
  );
}
