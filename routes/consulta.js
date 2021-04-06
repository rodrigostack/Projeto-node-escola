module.exports = function(app){
	app.post('/consulta', function(req, res){
		const Alunos = require('../database/alunos');
		var id = req.body.id;
		Alunos.findOne({
			where: {id:id}
		}).then(alunos => {
			res.render('../views/consulta',{
				alunos: alunos
			})
		})
		
	})
}