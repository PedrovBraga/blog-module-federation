import React from "react";

const Dashboard = () => {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Admin Dashboard</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Total de Posts</h5>
              <p className="card-text">10</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Novos Comentários</h5>
              <p className="card-text">5</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
