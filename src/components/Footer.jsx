
import React from "react";
import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t py-12 mt-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <span className="text-lg font-bold gradient-text">ReactMaster</span>
            <p className="mt-2 text-sm text-gray-600">
              Aprenda React de forma fácil e divertida com tutoriais práticos e exemplos interativos.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <p className="font-medium mb-4">Conteúdo</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/fundamentos/componentes" className="text-gray-600 hover:text-primary">
                  Componentes
                </Link>
              </li>
              <li>
                <Link to="/fundamentos/props" className="text-gray-600 hover:text-primary">
                  Props
                </Link>
              </li>
              <li>
                <Link to="/fundamentos/estado" className="text-gray-600 hover:text-primary">
                  Estado
                </Link>
              </li>
              <li>
                <Link to="/fundamentos/hooks" className="text-gray-600 hover:text-primary">
                  Hooks
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <p className="font-medium mb-4">Recursos</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/projetos" className="text-gray-600 hover:text-primary">
                  Projetos Práticos
                </Link>
              </li>
              <li>
                <Link to="/recursos" className="text-gray-600 hover:text-primary">
                  Materiais de Estudo
                </Link>
              </li>
              <li>
                <a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">
                  Documentação Oficial
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <p className="font-medium mb-4">Comunidade</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">
                  Fórum
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">
                  Contribuir
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} ReactMaster. Todos os direitos reservados.
          </p>
          <p className="text-sm text-gray-500 flex items-center mt-4 md:mt-0">
            Feito com <Heart size={14} className="mx-1 text-red-500" /> para a comunidade React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
