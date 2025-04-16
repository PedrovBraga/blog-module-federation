import React from 'react';
import { Link } from 'react-router-dom';
import PostList from './PostList';

const Blog = ({posts}) => {

  return (
    <div className="container my-4">
      {/* Slider */}
      <div id="mainSlider" className="carousel slide mb-4" data-bs-ride="carousel">
        <div className="carousel-inner">
            {posts
            .filter((post) => post.nota > 8) // Filtra os posts com nota > 8
            .map((post, index) => (
                <div
                    key={post.id}
                    className={`carousel-item ${index === 0 ? 'active' : ''}`}
                    >
                    <Link to={`/post/${post.id}`}>
                        <img
                        src={post.imagem}
                        className="d-block w-100"
                        alt={post.titulo}
                        style={{ maxHeight: '400px', objectFit: 'cover' }} // Reduz o tamanho do slider
                        />
                        <div className="carousel-caption d-none d-md-block">
                        <h5>{post.titulo}</h5>
                        </div>
                    </Link>
                </div>
            ))}

        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#mainSlider"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#mainSlider"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Sobre o Blog */}
      <div className="mb-4">
        <h2>Sobre o Blog</h2>
        <p>
          Bem-vindo ao nosso blog! Aqui você encontra conteúdo de alta qualidade
          sobre tecnologia, saúde, produtividade e muito mais. Explore nossos
          artigos e aproveite o conhecimento compartilhado por nossos autores
          especializados.
        </p>
      </div>

      {/* Lista de Posts */}
      <div>
        <h2>Últimos Posts</h2>
        <PostList posts={posts}/>
      </div>
    </div>
  );
};

export default Blog;
