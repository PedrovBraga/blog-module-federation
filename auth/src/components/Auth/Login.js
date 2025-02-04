import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [message, setMessage] = useState('');
  const [token, setToken] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Both fields are required');
      return;
    }

    try {
      const response = await fetch('http://localhost:3011/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json();

      if(!response.ok){
        throw new Error(data.message || 'Erro ao autenticar');
      }

      setMessage(data.message);
      setToken(data.token);
      setError(null);
    } catch(err) {
      setError(err.message);
      setMessage('');
    }

  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card shadow-lg">
            <div className="card-body">
              <h1 className="text-center mb-4">Login</h1>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password:
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                  />
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
                {message && <p className="text-success mt-3">{message}</p>}
                <div className="d-grid">
                  <button type="submit" className="btn btn-success">
                    Login
                  </button>
                </div>
              </form>
              {token && (
                <div className="mt-5">
                  <h5>Token:</h5>
                  <code>{token}</code>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
