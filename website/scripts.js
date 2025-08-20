// Capturando elemento do form
const formElBuscaFato = document.querySelector("#formBusca")
const quadro = document.querySelector("#quadroResultado")

// Criando um evento listener para tratar alguma coisa
// como é um botão submit o padrão já é enviar os dados do formulário
formElBuscaFato.addEventListener("submit", async (event) => {
    event.preventDefault() // desativando o padrão do submit
    
    let ano = event.target.querySelector("input[name=ano]").value

    document.getElementById("quadroResultado").innerHTML = `<p style="color: red; font-size: 24px;">Aguarde...</p>`;
    
    // Tentado conectar o back-end
    try {
   
        const resposta = await fetch(`https://apifatoshistoricos.onrender.com?ano=${ano}`);
        const data = await resposta.json();
        console.log("Fato Histórico do ano:", data) // apenas para teste - pode apagar
        console.log(JSON.stringify(data)) // apenas para teste - pode apagar
        // Criando um novo elemento
        document.getElementById("quadroResultado").innerHTML = `<p style="color: blue; font-size: 32px;">${data.fato}</p>`;

    } catch(error) {
        console.log("Erro ao buscar dados: ", error)
        document.getElementById("quadroResultado").innerHTML = `<p style="color: red;">Erro ao buscar dados</p>`;
    }
       
     // teste padrão
    //let ano = event.target.querySelector("input[name=ano]").value
    //console.log(ano)


    // Construçao alternativa
    //const formData = new FormData(event.target);
    //const infoAno = formData.get("ano");
    //console.log("infoAno", infoAno)

    
})

