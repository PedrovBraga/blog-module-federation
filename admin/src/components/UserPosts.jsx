import React from "react";

const UserPosts = ({posts}) => {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Meus Posts</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Título</th>
            <th>Data</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.titulo}</td>
              <td>{post.dataPublicacao}</td>
              <td>
                <a href={`/edit-post/${post.id}`} className="btn btn-warning btn-sm">
                  Editar
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserPosts;
