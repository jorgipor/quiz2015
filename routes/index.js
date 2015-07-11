var express = require('express');
var router = express.Router();

// Importamos los controllers
var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz' });
});

router.get('/quizes/question', quizController.question);
router.get('/quizes/answer', quizController.answer);

router.get('/author', function(req, res, next) {
  res.render('author', { title: 'Quiz' });
});

module.exports = router;