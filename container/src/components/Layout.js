import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';

const Layout = ({ children, isContainer, showSidebar, optionsSidebar }) => {
  const location = useLocation();
  
  const hideNavbarFooter = location.pathname.startsWith('/auth');

  return (
    <div className="d-flex flex-column min-vh-100">
      {!hideNavbarFooter && isContainer && <Navbar />}
      <div className="d-flex flex-grow-1 overflow-hidden">
        {/* Sidebar ocupa 3 colunas do grid */}
        {showSidebar && (
          <div className="col-md-3 col-lg-2 bg-light p-0 overflow-auto">
            <Sidebar options={optionsSidebar} />
          </div>
        )}
        {/* Conteúdo principal ocupa o restante */}
        <div className={`flex-grow-1 ${showSidebar ? 'col-md-9 col-lg-10' : ''} ${!isContainer ? 'p-3' : ''} overflow-auto`}>
          {children}
        </div>
      </div>
      {!hideNavbarFooter && isContainer && <Footer />}
    </div>
  );
};

export default Layout;
