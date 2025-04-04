import { useEffect, useState } from "react";
import "./App.css";
import foto from "./assets/whatsapp.jpeg";
import carGif from "./assets/Carro.gif";
import NavBar from "./Components/NavBar";
import "font-awesome/css/font-awesome.min.css";
import { Popover, PopoverContent, PopoverTrigger } from "@/Components/ui/popover";
import { Button } from "@/Components/ui/button";
import { Plus } from "lucide-react";
import Timeline from "./Components/timeline";
import TechStack from "./Components/stack";

// Define the type for translations
interface Translations {
  title?: string;
  name?: string;
  description?: JSX.Element;  // Changed to JSX.Element
}



export default function App() {
  const [translations, setTranslations] = useState<Translations>({
    title: "Quem sou eu?",
    name: "Henrique Cedraz",
    description: (
      <span>
        Sou um <span className="text-indigo-300 font-semibold">estudante constante</span>, 
        sempre em busca de novos aprendizados e desafios. Apaixonado por{" "}
        <span className="text-indigo-300 font-semibold">tecnologia</span>,{" "}
        <span className="text-indigo-300 font-semibold">desenvolvimento</span> e{" "}
        <span className="text-indigo-300 font-semibold">inovação</span>, acredito que o conhecimento é uma jornada sem fim.
      </span>
    )
  });
  
  const [language, setLanguage] = useState<string>('pt'); // 'pt' = Português, 'en' = Inglês, 'es' = Espanhol

  const [hasScaled, setHasScaled] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);
  const [showNavBar, setShowNavBar] = useState(false);

  // Função para alterar as traduções de acordo com a linguagem selecionada
  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    switch (lang) {
      case 'en':
        setTranslations({
          title: "Who am I?",
          name: "Henrique Cedraz",
          description: (
            <span>
              I am a <span className="text-indigo-300 font-semibold">constant learner</span>, 
              always seeking new challenges and knowledge. Passionate about{" "}
              <span className="text-indigo-300 font-semibold">technology</span>,{" "}
              <span className="text-indigo-300 font-semibold">development</span> and{" "}
              <span className="text-indigo-300 font-semibold">innovation</span>, I believe that knowledge is a never-ending journey.
            </span>
          )
        });
        break;
      case 'es':
        setTranslations({
          title: "¿Quién soy yo?",
          name: "Henrique Cedraz",
          description: (
            <span>
              Soy un <span className="text-indigo-300 font-semibold">estudiante constante</span>, 
              siempre en busca de nuevos aprendizajes y desafíos. Apasionado por{" "}
              <span className="text-indigo-300 font-semibold">tecnología</span>,{" "}
              <span className="text-indigo-300 font-semibold">desarrollo</span> e{" "}
              <span className="text-indigo-300 font-semibold">innovación</span>, creo que el conocimiento es un viaje sin fin.
            </span>
          )
        });
        break;
      default:
        setTranslations({
          title: "Quem sou eu?",
          name: "Henrique Cedraz",
          description: (
            <span>
              Sou um <span className="text-indigo-300 font-semibold">estudante constante</span>, 
              sempre em busca de novos aprendizados e desafios. Apaixonado por{" "}
              <span className="text-indigo-300 font-semibold">tecnologia</span>,{" "}
              <span className="text-indigo-300 font-semibold">desenvolvimento</span> e{" "}
              <span className="text-indigo-300 font-semibold">inovação</span>, acredito que o conhecimento é uma jornada sem fim.
            </span>
          )
        });
    }
  };

  useEffect(() => {
    const scaleTimer = setTimeout(() => setHasScaled(true), 100);
    const moveTimer = setTimeout(() => setHasMoved(true), 1100);
    const navBarTimer = setTimeout(() => setShowNavBar(true), 1100);

    return () => {
      clearTimeout(scaleTimer);
      clearTimeout(moveTimer);
      clearTimeout(navBarTimer);
    };
  }, []);

  // Componentes de texto armazenados em variáveis
  const textComponents = {
    title: (
      <h2 className="text-3xl font-extrabold text-center text-indigo-400 tracking-wide uppercase">
        {translations.title}
      </h2>
    ),
    name: (
      <p className="text-xl font-semibold mt-2 text-gray-300 italic">
        {translations.name}
      </p>
    ),
    description: (
      <p className="text-md text-center mt-4 max-w-[500px] leading-relaxed bg-gray-700 rounded-lg text-gray-400 p-3 relative z-10">
        {translations.description}
      </p>
    ),
    divider: <div className="w-16 h-1 bg-indigo-400 mt-4 rounded-full relative z-10"></div>,
  };

  // Lista de linguagens
  const languages = [
    { label: "Português", value: "pt" },
    { label: "English", value: "en" },
    { label: "Español", value: "es" }
  ];

  return (
    <div className="bg-stone-900 w-screen h-screen flex flex-col items-center justify-center">
      {/* NavBar */}
      <div className="flex w-[calc(100%-1.5rem)] m-3 h-16">
        <NavBar hasScaled={showNavBar} />
      </div>

      {/* Content Area */}
      <div className="flex flex-row justify-center w-full h-full flex-1 gap-4 px-3">
        {/* Image Container */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-4">
            <div
              className={`w-[600px] h-[350px] bg-gradient-to-br from-stone-700 to-stone-800 rounded-lg shadow-2xl flex flex-col items-center justify-center transition-opacity duration-1000 p-8 text-white border border-stone-600 relative overflow-hidden animate-softBounce hover:scale-105 ${
                hasMoved ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* 🟡 Texto principal */}
              <div className="relative z-10 flex flex-col items-center backdrop-blur rounded-lg">
                {textComponents.title}
                {textComponents.name}
              </div>

              {textComponents.description}

              {textComponents.divider}

              {/* 🚗 Carro animado */}
              <img
                src={carGif}
                alt="Carro passando"
                className="absolute top-9 left-[-100px] w-[100px] animate-carPass z-0 translate-y-[-50%]"
              />
            </div>

            <div
              className={`w-[280px] h-[350px] bg-stone-500 rounded-lg transform transition-transform duration-1000 ease-in-out ${
                hasScaled ? "scale-100" : "scale-125"
              } ${hasMoved ? "" : "-translate-x-16 translate-y-5"}`}
            >
              <img src={foto} alt="Minha imagem" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
          <div className={`flex flex-row gap-4 transition-opacity duration-1000 ${hasMoved ? "opacity-100" : "opacity-0"}`}>
            <div className="w-[500px] h-[175px] bg-stone-700 rounded-lg shadow-lg">
            <Timeline language={language as 'pt' | 'en' | 'es'} />
            </div>
            <div className="w-[380px] h-[175px] bg-stone-700 rounded-lg shadow-lg">
            <TechStack />
            </div>
          </div>
        </div>

        {/* Placeholder for Additional Content */}
        <div className={`w-full h-[540px] flex flex-col gap-4 transition-opacity duration-1000 ${hasMoved ? "opacity-100" : "opacity-0"}`}>
          <div className="w-full h-5/6 bg-stone-700 rounded-lg shadow-lg"></div>
          <div className="w-full h-1/6 bg-stone-700 rounded-lg shadow-lg items-center justify-center flex gap-10">
            <a href="https://www.linkedin.com/in/henrique-cedraz-6590aa21b/" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-linkedin fa-3x text-white hover:text-indigo-400"></i>
            </a>
            <a href="https://github.com/GanDaUFF" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-github fa-3x text-white hover:text-indigo-400"></i>
            </a>
            <a href="https://www.instagram.com/henrique_googles/" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-instagram fa-3x text-white hover:text-indigo-400"></i>
            </a>
            <a href="https://wa.me/5571993790255" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-whatsapp fa-3x text-white hover:text-indigo-400"></i>
            </a>
          </div>
        </div>
      </div>

      {/* 🟡 Botão Flutuante */}
      <div className="fixed bottom-6 right-6">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full p-3 bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-all"
            >
              <Plus className="w-6 h-6" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-40 flex flex-col gap-2">
            <Button variant="ghost">Contato</Button>
            <Button variant="ghost">Sobre</Button>
            <Button variant="ghost">Configurações</Button>

            {/* Novo Popover para Linguagens */}
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost">Linguagens</Button>
              </PopoverTrigger> 
              <PopoverContent className="w-40">
                <ul className="flex flex-col gap-2">
                  {languages.map((lang) => (
                    <li key={lang.value}>
                      <Button variant="link" onClick={() => changeLanguage(lang.value)}>
                        {lang.label}
                      </Button>
                    </li>
                  ))}
                </ul>
              </PopoverContent>
            </Popover>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
