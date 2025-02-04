const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Captura o token do header Authorization
  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, 'sua_chave_secreta'); // Substitua pela sua chave secreta
    req.user = decoded; // Armazena os dados decodificados no objeto req
    next(); // Permite que a requisição continue para a rota
  } catch (err) {
    res.status(403).json({ message: 'Invalid token.' });
  }
};

module.exports = authMiddleware;
