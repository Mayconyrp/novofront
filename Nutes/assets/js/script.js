// class Paciente {

//     constructor(){
//         this.id = 0
//         this.nome = ''
//         this.cpf = 0;
//     }

//     adicionar(){
//         alert('adicionar')
//     }

//     excluir(){
//         alert('excluir')
//     }

    

// }


class Paciente {
    constructor(nome, idade, cpf, sexo, cidade) {
      this.nome = nome;
      this.idade = idade;
      this.cpf = cpf;
      this.sexo = sexo;
      this.cidade = cidade;
    }
  }
  

let paciente = new Paciente()

function mostrarPaciente(paciente) {
  // atualiza os valores dos campos do overlay com as informações do paciente
  document.getElementById("p_nome").textContent = paciente.nome;
  document.getElementById("p_idade").textContent = paciente.idade;
  document.getElementById("p_cpf").textContent = paciente.cpf;
  document.getElementById("p_sexo").textContent = paciente.sexo;
  document.getElementById("p_cidade").textContent = paciente.cidade;
  
  // exibe o overlay
  overlay.style.display = "block";
  mostrarPaciente(paciente1);
}



// cria um objeto da classe "paciente"
const paciente1 = new Paciente("Maria", 30, "123.456.789-00", "Feminino", "Recife");

// chama a função "mostrarPaciente" passando o objeto "paciente1" como parâmetro

overlay.style.display = "none";


function exibirJanela() {
  var janela = document.getElementById("window-floating");
  janela.style.display = "block";
  var botaoFechar = document.createElement("button");
  botaoFechar.innerHTML = "Fechar janela";
  botaoFechar.onclick = function() {
    janela.style.display = "none";
  };
  janela.appendChild(botaoFechar);
}