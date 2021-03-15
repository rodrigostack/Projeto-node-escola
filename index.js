const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');
const AlunosModel = require('./database/alunos');

//canexao com o banco
connection
	.authenticate()
	.then(() => {
		console.log('Conexao com o banco de dados feita com sucesso!')

	})
	.catch((msgErro) => {
		console.log(msgErro);
	})

// arquivos externos e ejs engine
app.set('view engine', 'ejs')
app.use(express.static('public'));


// bodyparser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//rotas

var home = require('./routes/home');
home(app);

var cadastro = require('./routes/cadastro');
cadastro(app);

var alunos = require('./routes/alunos');
alunos(app);

var sucesso = require('./routes/sucesso')
sucesso(app);


app.listen(3000, function(){
	console.log('Rodando com express')
})

