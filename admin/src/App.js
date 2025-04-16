import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard.js";
import AddPost from "./components/AddPost.jsx";
import EditPost from "./components/EditPost.jsx";
import UserPosts from "./components/UserPosts.jsx";
const Layout = React.lazy(() => import('container/Layout'));

const App = ({isContainer, location, navigate }) => {

  const postsData = [
    {
      id: 1,
      imagem: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      titulo: 'Primeiro Post',
      dataPublicacao: '2025-02-10',
      autor: 'João Silva',
      categoria: 'Tecnologia',
      resumo: 'Resumo do primeiro post...',
      conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget lectus eu justo dapibus lacinia vel non eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus facilisis arcu sed nisl aliquam, a facilisis lectus efficitur. Nullam euismod, lorem a vehicula fringilla, ex sem luctus sapien, sed malesuada purus nunc id libero. Proin et massa at ex iaculis bibendum id vel risus.',
      nota: 7
    },
    {
      id: 2,
      imagem: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      titulo: 'Segundo Post',
      dataPublicacao: '2025-02-11',
      autor: 'Maria Oliveira',
      categoria: 'Saúde',
      resumo: 'Resumo do segundo post...',
      conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget lectus eu justo dapibus lacinia vel non eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus facilisis arcu sed nisl aliquam, a facilisis lectus efficitur. Nullam euismod, lorem a vehicula fringilla, ex sem luctus sapien, sed malesuada purus nunc id libero. Proin et massa at ex iaculis bibendum id vel risus.',
      nota: 8
    },
    {
      id: 3,
      imagem: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      titulo: 'Terceiro Post',
      dataPublicacao: '2025-02-12',
      autor: 'Carlos Costa',
      categoria: 'Tecnologia',
      resumo: 'Resumo do terceiro post...',
      conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget lectus eu justo dapibus lacinia vel non eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus facilisis arcu sed nisl aliquam, a facilisis lectus efficitur. Nullam euismod, lorem a vehicula fringilla, ex sem luctus sapien, sed malesuada purus nunc id libero. Proin et massa at ex iaculis bibendum id vel risus.',
      nota: 9
    },
  ]

  // const routerLocation = isContainer ? { location, navigate } : {};

  // Ajustar paths dinamicamente
  const basePath = isContainer ? '/admin' : '';
  const sidebarOptions = [
    { label: 'Dashboard', path: `${basePath}/` },
    { label: 'Criar', path: `${basePath}/add-post` },
    { label: 'Posts', path: `${basePath}/user-posts` },
  ];

  const routes = (
    <Layout isContainer={!isContainer} showSidebar={true} optionsSidebar={sidebarOptions}>
      <Routes location={location} navigate={navigate}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add-post" element={<AddPost />} />
        <Route path="/edit-post/:id" element={<EditPost posts={postsData} />} />
        <Route path="/user-posts" element={<UserPosts posts={postsData} />} />
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