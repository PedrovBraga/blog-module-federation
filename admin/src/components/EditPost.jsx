import React, { useState } from "react";
import { useParams } from "react-router-dom";

const EditPost = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("Título Existente");
  const [content, setContent] = useState("Conteúdo Existente");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ id, title, content });
    alert("Post editado com sucesso!");
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Editar Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Título</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Conteúdo</label>
          <textarea
            className="form-control"
            rows="5"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-success">Salvar Alterações</button>
      </form>
    </div>
  );
};

export default EditPost;
