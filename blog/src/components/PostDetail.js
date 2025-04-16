import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const PostDetail = ({posts}) => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Encontrar o post com base no ID fornecido
  const post = posts.find((p) => p.id === parseInt(id, 10));

  if (!post) {
    return <p>Post não encontrado.</p>;
  }

  return (
    <div className="container mt-4">
      <button
        className="btn btn-secondary mb-3"
        onClick={() => navigate(-1)}
      >
        &larr; Voltar
      </button>
      <div className="">
        <img
          src={post.image}
          className="card-img-top"
          alt={`Imagem de ${post.title}`}
          style={{ height: '400px', objectFit: 'cover' }}
        />
        <div className="card-body">
          <h1 className="card-title">{post.title}</h1>
          <p className="text-muted">
            <small>{post.date} • Autor: {post.author} • Categoria: {post.category}</small>
          </p>
          <hr />
          <p className="card-text" style={{ whiteSpace: 'pre-wrap' }}>
            {post.content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
