module.exports = function(app){
	app.post('/sucesso', function(req, res){
		var nome = req.body.nome;
		var data = req.body.datnasc;
		var curso = req.body.curso;
		var email = req.body.email;
		var endereco = req.body.endereco;
		var periodo = req.body.periodo;

	res.render('../views/sucesso');
})
}