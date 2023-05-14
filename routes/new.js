const messages = require('./index').messages;
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('form');
});

router.post('/', (req, res) => {
  messages.push({
    text: req.body['body-text'],
    user: req.body.name,
    added: new Date(),
  });
  res.redirect('/');
});

module.exports = router;
