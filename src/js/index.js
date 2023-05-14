function AlterarTema() {
  const botaoAlterarTema = document.getElementById("botao-alterar-tema"); //Pega no JS o elemento HTML correspondente ao botão de troca de tema
  const body = document.querySelector("body"); //Pega no JS o elemento HTML correspondente ao body

  const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao"); // Pega no JS o Elemento HTML correspondente a imagem do Sol

  botaoAlterarTema.addEventListener("click", () => {
    //Identifica o clique do usuário no botão de troca de tema

    const modoEscuroAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro"); // Alterna entre tirar e colocar a classe

    if (modoEscuroAtivo) {
      //Verifica se no body tem a classe modo-escuro
      imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png"); // Troca a imagem da Lua pela do Sol
    } else {
      imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png"); // Troca a imagem do Sol pela da Lua
    }
  });
}

AlterarTema();
