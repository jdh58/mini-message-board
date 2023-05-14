var express = require('express');
var router = express.Router();

const messages = [
  {
    text: 'Beans and weenies',
    user: 'Charlie',
    added: new Date(),
  },
  {
    text: 'Caramel apples',
    user: 'Edward',
    added: new Date(),
  },
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

module.exports = {
  messages,
  router,
};
