const Sequelize = require('sequelize');

const connection = new Sequelize('novofront', 'root', 'maycon', {
    host: "localhost",
    dialect: 'mysql',
    define: {
        charset: 'utf8',
        collate: 'utf8_general_ci',
        timestamps: true
        
    },
    logging: false,

})

module.exports = connection