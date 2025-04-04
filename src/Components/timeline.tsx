import { MapPin } from "lucide-react";
import { BookOpen } from 'lucide-react';

interface Evento {
  ano: string;
  cor: string;
  titulo: { pt: string; en: string; es: string };
  descricao: { pt: string; en: string; es: string };
}

interface TimelineProps {
  language: 'pt' | 'en' | 'es';
}

export default function Timeline({ language }: TimelineProps) {
  const eventos: Evento[] = [
    {
      ano: "2021",
      cor: "bg-green-500",
      titulo: {
        pt: "Autodidata",
        en: "Self-taught",
        es: "Autodidacta"
      },
      descricao: {
        pt: "Iniciei meus estudos em cursos online e desenvolvi um site em WordPress, enquanto ainda atuava como designer gráfico.",
        en: "I started studying through online courses and developed a WordPress site, while still working as a graphic designer.",
        es: "Comencé mis estudios con cursos en línea y desarrollé un sitio en WordPress, mientras aún trabajaba como diseñador gráfico."
      }
    },
    {
      ano: "2023",
      cor: "bg-blue-500",
      titulo: {
        pt: "Faculdade",
        en: "College",
        es: "Universidad"
      },
      descricao: {
        pt: "Comecei Análise e Desenvolvimento de Sistemas e continuei aprendendo programação por fora.",
        en: "Started a degree in Systems Analysis and Development and kept studying programming on my own.",
        es: "Comencé Análisis y Desarrollo de Sistemas y seguí aprendiendo programación por mi cuenta."
      }
    },
    {
      ano: "2024",
      cor: "bg-yellow-500",
      titulo: {
        pt: "Estágio",
        en: "Internship",
        es: "Pasantía"
      },
      descricao: {
        pt: "Passei pela Dev Ali como voluntário e fui contratado na equipe da rodoviária de Salvador-BA (Grupo Sinart).",
        en: "Volunteered at Dev Ali and was hired by the Salvador-BA bus station team (Grupo Sinart).",
        es: "Fui voluntario en Dev Ali y luego contratado por el equipo de la terminal de Salvador-BA (Grupo Sinart)."
      }
    },
  ];
// Título por idioma
const tituloGeral: Record<'pt' | 'en' | 'es', string> = {
    pt: 'Minha História',
    en: 'My Story',
    es: 'Mi Historia',
  };
  
  return (
    <div className="w-full h-full flex-col items-center  p-2">
      <h2 className="text-2xl font-bold  text-indigo-300 text-start pl-3 pt-2 mb-3">{tituloGeral[language]} 💻</h2>

      <div className="flex flex-col w-full max-w-5xl p-3 bg-slate-500 bg-opacity-30 rounded-md ">

        <div className="flex justify-between items-center">
          {eventos.map((evento, idx) => (
            <div key={idx} className="flex flex-col items-center text-center w-full px-2 group relative">
              {/* Ícone */}
              <div className={`p-1 rounded-full ${evento.cor}`}>
                <MapPin className="text-white w-5 h-5" />
              </div>

              {/* Tooltip */}
              <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs p-2 rounded shadow w-44 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                {evento.descricao[language]}
              </div>

              {/* Linha abaixo do pin */}
              <div className="w-full h-0.5 bg-indigo-500 mt-2" />

              {/* Título e ano */}
              <p className="text-sm font-semibold text-white mt-2">{evento.titulo[language]}</p>
              <p className="text-xs font-medium text-gray-400">{evento.ano}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
