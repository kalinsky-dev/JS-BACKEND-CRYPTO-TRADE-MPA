const router = require('express').Router();
const authService = require('../services/authService');

router.get('/register', (req, res) => {
  res.render('auth/register');
});

router.post('/register', async (req, res) => {
  const { username, email, password, repeatPassword } = req.body;

  await authService.register(username, email, password, repeatPassword);
  res.render('auth/register');
});

router.get('/login', (req, res) => {
  res.render('auth/login');
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;
});

module.exports = router;
