import React from 'react';
import { useLocation } from 'react-router-dom'; // Importa o hook useLocation
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children, isContainer }) => {
  const location = useLocation(); // Pega a localização atual da URL
  
  // Verifica se o caminho atual é `/auth` e oculta Navbar e Footer nesse caso
  const hideNavbarFooter = location.pathname.startsWith('/auth');

  return (
    <div className="flex flex-col min-h-screen">
      {/* Renderiza o Navbar apenas se não for exibição no container */}
      {!hideNavbarFooter && isContainer && <Navbar />}
      <main className="flex-1 container mx-auto p-4">{children}</main>
      {/* Renderiza o Navbar apenas se showNavbar for true */}
      {!hideNavbarFooter && isContainer && <Footer />}
    </div>
  );
};

export default Layout;
