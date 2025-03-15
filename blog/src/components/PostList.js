import React, { useState } from 'react';

const postsData = [
  {
    id: 1,
    imagem: 'https://via.placeholder.com/800x400',
    titulo: 'Primeiro Post',
    dataPublicacao: '2025-02-10',
    autor: 'João Silva',
    categoria: 'Tecnologia',
    resumo: 'Resumo do primeiro post...',
  },
  {
    id: 2,
    imagem: 'https://via.placeholder.com/800x400',
    titulo: 'Segundo Post',
    dataPublicacao: '2025-02-11',
    autor: 'Maria Oliveira',
    categoria: 'Saúde',
    resumo: 'Resumo do segundo post...',
  },
  {
    id: 3,
    imagem: 'https://via.placeholder.com/800x400',
    titulo: 'Terceiro Post',
    dataPublicacao: '2025-02-12',
    autor: 'Carlos Costa',
    categoria: 'Tecnologia',
    resumo: 'Resumo do terceiro post...',
  },
];

const PostList = () => {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todas');

  const categorias = ['Todas', ...new Set(postsData.map((post) => post.categoria))];

  const postsFiltrados = categoriaSelecionada === 'Todas'
    ? postsData
    : postsData.filter((post) => post.categoria === categoriaSelecionada);

  return (
    <div className="container my-4">
      <h1 className="mb-4">Blog Posts</h1>

      {/* Dropdown de Filtro */}
      <div className="mb-4">
        <label htmlFor="categoria" className="form-label">
          Filtrar por Categoria:
        </label>
        <select
          id="categoria"
          className="form-select"
          value={categoriaSelecionada}
          onChange={(e) => setCategoriaSelecionada(e.target.value)}
        >
          {categorias.map((categoria) => (
            <option key={categoria} value={categoria}>
              {categoria}
            </option>
          ))}
        </select>
      </div>

      {/* Lista de Posts */}
      <div className="row">
        {postsFiltrados.map((post) => (
          <div key={post.id} className="col-12 mb-4">
            <div className="card shadow">
              <img src={post.imagem} className="card-img-top" alt={post.titulo} />
              <div className="card-body">
                <h5 className="card-title">{post.titulo}</h5>
                <p className="card-text text-muted">
                  {post.dataPublicacao} • {post.autor} • {post.categoria}
                </p>
                <p className="card-text">{post.resumo}</p>
                <a href={`/post/${post.id}`} className="btn btn-primary">
                  Ler mais
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
