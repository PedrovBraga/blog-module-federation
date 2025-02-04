const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 3011;

// Configure CORS
app.use(cors()); // Permite todas as origens por padrão

// Middleware para permitir JSON no body
app.use(express.json());

// Chave secreta (em produção, use uma variável de ambiente)
const SECRET_KEY = 'seuSegredoSuperSeguro';

// Rota de autenticação
app.post('/auth/login', (req, res) => {
  const { email, password } = req.body;

  // Simulação de validação (troque pelo seu banco de dados)
  if (email === 'user@example.com' && password === 'password123') {
    // Dados para o payload do token
    const payload = {
      sub: '12345', // ID do usuário (exemplo)
      email,
      role: 'user', // Papel do usuário
    };

    // Gerar o token
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '15m' });

    // Enviar o token ao frontend
    return res.json({ message: 'Login realizado com sucesso', token });
  }

  // Caso inválido
  return res.status(401).json({ message: 'Email ou senha inválidos' });
});

app.post('/auth/register', async (req, res) => {
    const { email, password, name, cpf } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10); // Hash da senha
    // Salvar no banco de dados (exemplo simplificado)
    const newUser = { id: Date.now(), email, password: hashedPassword, name, cpf };
    res.status(201).json({ message: 'User registered successfully', user: newUser });
});

app.get('/auth/validate', authMiddleware, (req, res) => {
    res.json({ message: 'Token is valid', user: req.user });
});

app.post('/auth/reset-password', (req, res) => {
    const { email } = req.body;
    // Gerar e enviar um token para redefinir a senha
    res.json({ message: `Password reset link sent to ${email}` });
});

app.post('/auth/logout', (req, res) => {
    // A lógica aqui depende de como você quer invalidar o token
    res.json({ message: 'User logged out successfully' });
});  

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
