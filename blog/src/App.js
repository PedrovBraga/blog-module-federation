import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import About from './components/About';
const Layout = React.lazy(() => import('container/Layout'));

const App = ({isContainer}) => {

  const posts = [
      {
        image: 'https://via.placeholder.com/600x300',
        title: 'Como começar com React',
        date: '15 de fevereiro de 2025',
        author: 'João Silva',
        category: 'Tecnologia',
        summary: 'Um guia rápido e prático para iniciantes no mundo do React.',
      },
      {
        image: 'https://via.placeholder.com/600x300',
        title: 'Dicas de Produtividade',
        date: '10 de fevereiro de 2025',
        author: 'Maria Oliveira',
        category: 'Estilo de Vida',
        summary: 'Descubra como organizar seu dia e aumentar sua produtividade.',
      },
      // Adicione mais posts aqui
    ];

  const routes = (
    <Layout isContainer={!isContainer}>
      <Routes>
        <Route path="/" element={<PostList posts={posts} />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Layout>
  );
    
  return (
    <>
      {!isContainer ? (
        <Router>{routes}</Router> // Renderiza o Router se não estiver no container
      ) : (
        routes // Apenas as rotas, sem o Router, se estiver no container
      )}
    </>
  );
};

export default App;
