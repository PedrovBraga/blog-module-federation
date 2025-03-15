import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Simulação de dados dos posts (isso deve ser substituído por uma chamada de API no futuro)
  const posts = [
    {
      id: 1,
      image: 'https://via.placeholder.com/800x400',
      title: 'Como começar com React',
      date: '15 de fevereiro de 2025',
      author: 'João Silva',
      category: 'Tecnologia',
      content: `
        React é uma biblioteca JavaScript criada pelo Facebook. 
        Ele facilita a criação de interfaces de usuário interativas. 
        Este post fornece um guia básico para começar sua jornada com React.
      `,
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/800x400',
      title: 'Dicas de Produtividade',
      date: '10 de fevereiro de 2025',
      author: 'Maria Oliveira',
      category: 'Estilo de Vida',
      content: `
        Ser produtivo é mais do que fazer mais em menos tempo; é sobre fazer as coisas certas. 
        Este post explora dicas para gerenciar seu tempo e priorizar suas tarefas.
      `,
    },
  ];

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
