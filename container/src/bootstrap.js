import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Teste from './components/Teste';
import Auth from 'auth/AuthApp';
import Blog from 'blog/BlogApp';

// Carregar os microfrontends diretamente com import()
// const Auth = () => import('auth/AuthApp');
// const Blog = () => import('blog/BlogApp');

const App = () => {
  return (
    <Router>
      <Layout isContainer={true}>
        <Suspense fallback={<div>Carregando...</div>}>
          <Routes>
            <Route path="/" element={<Teste/>} />
            <Route path="/blog/*" element={<Blog/>} />
            <Route path="/auth/*" element={<Auth/>} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
};

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<React.StrictMode><App /></React.StrictMode>);
