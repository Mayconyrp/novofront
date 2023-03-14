const Sequelize = require("sequelize")
const connection = require("./database")

const Paciente = connection.define('paciente',{
    cpf:{
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true

    },

    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    idade:{
        type: Sequelize.STRING,
        allowNull: false

    },
    prontuario:{
        type: Sequelize.STRING,
        allowNull: false

    },
    risco:{
        type: Sequelize.STRING,
        allowNull: false

    },
    contato:{
        type: Sequelize.STRING,
        allowNull: false

    },
})

Paciente.sync({force:false}).then(() => {
    console.log("Tabela paciente criada!")
})

module.exports = Paciente