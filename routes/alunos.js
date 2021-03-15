module.exports = function(app){
	app.get('/alunos', function(req, res){
	res.render('../views/alunos');
})
}