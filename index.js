const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const connection = require("./database/database")
const Paciente = require("./database/paciente")

//database

connection.authenticate().then(() => {
    console.log('Conexao estabelecida com sucesso!')
}).catch((erro) => {
    console.log("O erro encontrado foi:"+erro)
})




app.set('views engine','ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
//rotas

app.get("/",(req,res) => {
    Paciente.findAll({raw:true}).then(pacientes => {
        res.render("index.ejs", {pacientes:pacientes})
    })
})

app.get("/home",(req,res) => {
    res.render("home.ejs")
})

app.listen(1200,()=>{console.log("App rodando!")})
