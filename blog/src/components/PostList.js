import React, { useState } from 'react';

const PostList = ({posts}) => {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todas');

  const categorias = ['Todas', ...new Set(posts.map((post) => post.categoria))];

  const postsFiltrados = categoriaSelecionada === 'Todas'
    ? posts
    : posts.filter((post) => post.categoria === categoriaSelecionada);

  return (
    <div className="container my-4">
      <h1 className="mb-4">Posts</h1>

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
          <div key={post.id} className="col-md-6 mb-4">
            <div className="card shadow">
              <a href={`/post/${post.id}`}>
                <img src={post.imagem} className="card-img-top" alt={post.titulo} />
              </a>
              <div className="card-body">
                <a href={`/post/${post.id}`} className="text-decoration-none">
                  <h5 className="card-title text-primary">{post.titulo}</h5>
                </a>
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
