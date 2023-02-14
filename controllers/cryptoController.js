const router = require('express').Router();

const { isAuthorized } = require('../middlewares/authMiddleware');
const cryptoService = require('../services/cryptoService');

router.get('/create', isAuthorized, (req, res) => {
  res.render('crypto/create');
});

router.post('/create', isAuthorized, async (req, res) => {
  //TODO
  const cryptoData = req.body;
  await cryptoService.create(cryptoData);
});

module.exports = router;
