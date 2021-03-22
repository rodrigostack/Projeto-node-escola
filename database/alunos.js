const Sequelize = require('sequelize');
const connection = require('./database');

const Alunos = connection.define('alunos',{
	id:{
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey:true
	},
	
	nome:{
		type: Sequelize.STRING,
		allowNull: false
	},
	datnasc:{
		type: Sequelize.DATE,
		allowNull: false
	},
	curso:{
		type: Sequelize.STRING,
		allowNull: false
	},
	email:{
		type: Sequelize.STRING,
		allowNull: false
	},
	endereco:{
		type: Sequelize.TEXT,
		allowNull: false
	},
	periodo:{
		type: Sequelize.STRING,
		allowNull: false
	},
});

Alunos.sync({force: false}).then(() => {});

module.exports = Alunos;