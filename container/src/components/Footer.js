import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3 mt-auto">
      <div className="container text-center">
        <p className="mb-3">Siga-nos nas redes sociais:</p>
        <div>
          <a
            href="https://facebook.com"
            className="text-light me-3 text-decoration-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-facebook fs-4"></i>facebook
          </a>
          <a
            href="https://twitter.com"
            className="text-light me-3 text-decoration-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-twitter fs-4"></i>twitter
          </a>
          <a
            href="https://instagram.com"
            className="text-light me-3 text-decoration-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-instagram fs-4"></i>instagram
          </a>
          <a
            href="https://linkedin.com"
            className="text-light text-decoration-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-linkedin fs-4"></i>linkedin
          </a>
        </div>
        <p className="mt-3 mb-0">&copy; 2025 - Todos os direitos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
