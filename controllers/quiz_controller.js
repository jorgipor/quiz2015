// GET /quizes/question
exports.question = function(req, res) {
	//res.render('index', { title: 'Quiz' });
	res.render('quizes/question', {pregunta: 'Capital de Italia', title: 'Quiz'});
}

// GET /quizes/answer
exports.answer = function(req, res) {
	//res.render('index', { title: 'Quiz' });
	if(req.query.respuesta === 'Roma') {
		res.render('quizes/answer', {respuesta: 'Correcto', title: 'Quiz'});
	} else {
		res.render('quizes/answer', {respuesta: 'Incorrecto', title: 'Quiz'});
	}
	
}