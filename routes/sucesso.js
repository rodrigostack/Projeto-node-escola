module.exports = function(app){
	app.post('/sucesso', function(req, res){
		const Alunos = require('../database/alunos');
		var nome = req.body.nome;
		var data = req.body.datnasc;
		var curso = req.body.curso;
		var email = req.body.email;
		var endereco = req.body.endereco;
		var periodo = req.body.periodo;
		Alunos.create({
			nome: nome,
			datnasc: data,
			curso: curso,
			email: email,
			endereco: endereco,
			periodo: periodo
		})

	res.render('../views/sucesso');
})
}