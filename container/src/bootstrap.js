import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Layout from './components/Layout';
import Teste from './components/Teste';

// Importação Lazy dos Microfrontends
const Blog = lazy(() =>
  import('blog/BlogApp').catch(() => {
    console.error('Blog microfrontend indisponível');
    return () => <div>Erro ao carregar Blog</div>;
  })
);

const Auth = lazy(() =>
  import('auth/AuthApp').catch(() => {
    console.error('Auth microfrontend indisponível');
    return () => <div>Erro ao carregar Auth</div>;
  })
);

const Admin = lazy(() =>
  import('admin/AdminApp').catch(() => {
    console.error('Admin microfrontend indisponível');
    return () => <div>Erro ao carregar Admin</div>;
  })
);

const MfeWrapper = ({ mfe: Mfe, isContainer }) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Força remount quando o pathname muda
  return <Mfe key={location.pathname} isContainer={isContainer} location={location} navigate={navigate} />;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Teste />} />
      <Route path="/admin/*" element={<MfeWrapper mfe={Admin} isContainer={true} />} />
      <Route path="/blog/*" element={<MfeWrapper mfe={Blog} isContainer={true} />} />
      <Route path="/auth/*" element={<Auth isContainer={true} />} />
    </Routes>
  );
};

const App = () => {
  return (
    <Router>
      <Layout isContainer>
        <Suspense fallback={<div>Loading...</div>}>
          <AppRoutes />
        </Suspense>
      </Layout>
    </Router>
  );
};

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);