import React from 'react';
import { Linkedin, Mail, Phone, Hexagon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center">
              <Hexagon className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold">Rebase IT T&T</span>
            </div>
            <p className="mt-4 text-gray-400">
              Soluciones de trazabilidad de alto nivel para su negocio
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <a href="mailto:contact@rebaseit.com" className="flex items-center text-gray-400 hover:text-white">
                <Mail className="h-5 w-5 mr-2" />
                contact@rebaseit.com
              </a>
              <a href="tel:+1234567890" className="flex items-center text-gray-400 hover:text-white">
                <Phone className="h-5 w-5 mr-2" />
                +1 (234) 567-890
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5 mr-2" />
                LinkedIn
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="/privacy" className="text-gray-400 hover:text-white">Política de Privacidad</a>
              </li>
              <li>
                <a href="/terms" className="text-gray-400 hover:text-white">Términos y Condiciones</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Rebase IT T&T. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;