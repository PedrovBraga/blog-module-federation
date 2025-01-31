import React from 'react';
import ReactDOM from 'react-dom/client';

// Carrega os remotes dos microfrontends
const AuthApp = React.lazy(() => import('auth/AuthApp'));
const BlogApp = React.lazy(() => import('blog/BlogApp'));

// Componente principal do container
const App = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <div>
        <h1>Container</h1>
        <hr />
        <div>
          <h2>Auth Microfrontend</h2>
          <AuthApp />
        </div>
        <hr />
        <div>
          <h2>Blog Microfrontend</h2>
          <BlogApp />
        </div>
      </div>
    </React.Suspense>
  );
};

const rootElement = document.getElementById("root"); // Certifique-se de que o ID corresponde ao definido no HTML
const root = ReactDOM.createRoot(rootElement);
root.render(<React.StrictMode><App/></React.StrictMode>)
