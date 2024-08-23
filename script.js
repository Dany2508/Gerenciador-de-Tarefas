//Elementos DOM que vamos trabahar
const nomeTarefaInput = document.getElementById("nomeTarefa")
const tempoTarefaInput = document.getElementById("tempoTarefa")
/*mensagem que vai escrever na tela pro usuario*/  
const mensagem = document.getElementById("mensagem")
const botaoAdicionar = document.getElementById("botaoAdicionar")

//Função assícrona (async) para gerenciar a tarefa
async function gerenciarTarefa(nome, tempo){
    mensagem.textContent = `A tarefa ${nome} está em andamento...`

//Esperar da Promessa de que após o tempo o código retorne que conclui
await new Promise((resolve) => {
    setTimeout(resolve, tempo*1000)
})

mensagem.textContent = `Tarefa ${nome} concluída!!`
}

botaoAdicionar.addEventListener("click", function(){
    const nomeTarefa = nomeTarefaInput.value
    const tempoTarefa = Number(tempoTarefaInput.value)

    if(nomeTarefa.trim() !== ""){
        gerenciarTarefa(nomeTarefa, tempoTarefa)
        nomeTarefaInput.value = ""
        tempoTarefaInput.value = ""
    }
    else{
        mensagem.textContent = "Por favor, preencha todos os campos corretamente."
    }
})