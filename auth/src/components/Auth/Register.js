import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    cpf: '',
  });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await axios.post('http://localhost:3011/auth/register', formData);
      setMessage(response.data.message);
      setFormData({ name: '', email: '', password: '', cpf: '' });
    } catch (error) {
      setMessage(
        error.response?.data?.message || 'Erro ao registrar. Tente novamente mais tarde.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">

            <h2 className="card-title text-center mb-4">Registrar Usuário</h2>
            <form onSubmit={handleSubmit}>
              {/* Nome */}
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Digite o nome"
                  required
                />
              </div>

              {/* Email */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Digite o email"
                  required
                />
              </div>

              {/* CPF */}
              <div className="mb-3">
                <label htmlFor="cpf" className="form-label">
                  CPF
                </label>
                <input
                  type="text"
                  id="cpf"
                  name="cpf"
                  value={formData.cpf}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Digite o CPF"
                  required
                />
              </div>

              {/* Senha */}
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Senha
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Digite a senha"
                  required
                />
              </div>

              {/* Botão de Enviar */}
              <div className="d-grid">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={loading}
                >
                  {loading ? 'Registrando...' : 'Registrar'}
                </button>
              </div>

              {/* Mensagem */}
              {message && (
                <div className="mt-3">
                  <p className="text-center text-danger">{message}</p>
                </div>
              )}
            </form>

        </div>
      </div>
    </div>
  );
};

export default Register;
