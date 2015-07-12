var express = require('express');
var router = express.Router();

// Importamos los controllers
var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz' });
});

// Autoload de comandos con ids
router.param('quizId', quizController.load);  // autoload :quizId

// Definición de rutas de quizes
router.get('/quizes',                      quizController.index);
//router.get('/quizes/:search',              quizController.index);
router.get('/quizes/:quizId(\\d+)',        quizController.show);
router.get('/quizes/:quizId(\\d+)/answer', quizController.answer);

router.get('/author', function(req, res, next) {
  res.render('author', { title: 'Quiz' });
});

module.exports = router;