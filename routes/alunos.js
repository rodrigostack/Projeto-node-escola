module.exports = function(app){
	const Alunos = require('../database/alunos');
	Alunos.findAll({raw: true }).then(alunos =>{
	app.get('/alunos', function(req, res){
	res.render('../views/alunos',{
		alunos: alunos
	});
	
});

});
}