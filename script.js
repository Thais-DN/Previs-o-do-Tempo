const key = "4dfc67179aa0bc47ce1c1b1fbde8c354";

function mostrarDados(dados) {
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;
    document.querySelector(".temperatura").innerHTML =
        Math.floor(dados.main.temp) + "°C";
    document.querySelector(".txt_previsao").innerHTML =
        dados.weather[0].description;
    document.querySelector(".umidade").innerHTML =
        "umidade " + dados.main.humidity + "%";
}

async function buscarCidade(cidade) {
    try {
        const resposta = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`
        );
        if (!resposta.ok) {
            throw new Error("Falha na busca da cidade");
        }
        const dados = await resposta.json();
        mostrarDados(dados);
    } catch (erro) {
        console.error("Erro ao buscar dados da cidade:", erro);
    }
}

function pesquisarCidade() {
    const cidade = document.querySelector(".input_cidade").value;

    buscarCidade(cidade);
}
