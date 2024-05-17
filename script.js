
let menu = document.getElementById("menu")
let iconeBarra = document.getElementById("icon-barra")
let iconeX = document.getElementById("icon-x")

function abrirFecharMenu() {
    
    if (menu.classList.contains("menu-fechado")) {
        menu.classList.remove("menu-fechado")

        iconeX.style.display = "inline"

        iconeBarra.style.display = "none"

    }else {
        menu.classList.add("menu-fechado")

        iconeX.style.display = "none"

        iconeBarra.style.display = "inline"
    }

}

onresize = () => {
    menu.classList.remove("menu-fechado")
    iconeX.style.display = "inline"
    iconeBarra.style.display = "none"
}


const solicitarOrcamento = (event) => {
    // Pegar valores dos inputs
    let valorNome = document.getElementById("campo-nome").value
    let valorEmail = document.getElementById("campo-email").value
    let valorDescricao = document.getElementById("campo-descricao").value

    // Organizar objeto com os valores

    let dadosForm = {
        nome: valorNome,
        email: valorEmail,
        descricao: valorDescricao
    }

    // Enviar requisicao para a api 
    fetch("http://localhost:3000/solicitacoes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosForm)
    })
    .then(resposta => {
        console.log(resposta)

        // Limpar os campos
        document.querySelector("#contato form").reset()

        // Mostrar alert com msg de sucesso
        alert("Solicitação cadastrada!")

    })

    // CASO ERRO - alert com msg erro
    .catch(erro => {
        console.error(erro)
        alert("Erro na requisição.")
    })

    event.preventDefault()
}