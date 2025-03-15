const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { check, validationResult } = require('express-validator');

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

app.post('/auth/register', [
  check('name').notEmpty().withMessage('Nome é obrigatório'),
  
  // Verificação do e-mail
  check('email').isEmail().withMessage('Por favor, insira um e-mail válido')
    .custom(async (value) => {
      const user = await User.findOne({ email: value });
      if (user) {
        throw new Error('Este e-mail já está registrado');
      }
    }),

  // Validação do CPF
  check('cpf').isLength({ min: 11, max: 11 }).withMessage('CPF deve ter 11 dígitos')
    .isNumeric().withMessage('CPF deve conter apenas números')
    .custom((value) => {
      // Expressão regular para validar o formato do CPF (apenas números)
      const cpfRegex = /^[0-9]{11}$/;
      if (!cpfRegex.test(value)) {
        throw new Error('CPF inválido. Deve conter apenas números e ter 11 dígitos.');
      }
      return true;
    }),

  // Validação da senha
  check('password').isLength({ min: 6 }).withMessage('A senha deve ter no mínimo 6 caracteres'),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: errors.array()[0].msg });
  }

  const { name, email, password, cpf } = req.body;

  try {
    // Criação de um novo usuário
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      name,
      email,
      password: hashedPassword,
      cpf,
    });

    await user.save();
    res.status(201).json({ message: 'Usuário registrado com sucesso!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao registrar usuário, tente novamente mais tarde.' });
  }
});

app.get('/auth/validate', (req, res) => {
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
