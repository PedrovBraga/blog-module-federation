import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import About from './components/About';
import Blog from './components/Blog';
import { postsData } from './data/posts';
const Layout = React.lazy(() => import('container/Layout'));

const App = ({isContainer, location, navigate}) => {

  // Ajustar paths dinamicamente
  const basePath = isContainer ? '/blog' : '';
  const sidebarOptions = [
    { label: 'Home', path: `${basePath}/` },
    { label: 'Posts', path: `${basePath}/posts` },
    { label: 'About', path: `${basePath}/about` },
  ];

  // const routerLocation = isContainer ? location : undefined;

  const routes = (
    <Layout isContainer={!isContainer} showSidebar={true} optionsSidebar={sidebarOptions}>
      <Routes location={location} navigate={navigate}>
        <Route path="/" element={<Blog posts={postsData} />} />
        <Route path="/posts" element={<PostList posts={postsData} />} />
        <Route path="/post/:id" element={<PostDetail posts={postsData} />} />
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
