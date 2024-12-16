// Seleciona todos os itens <li> da lista
const listaItems = document.querySelectorAll(".lista-numero ol li");
// Seleciona o <span> onde o número será exibido
const spanNumeroSelecionado = document.getElementById("numero-selecionado");

// Adiciona o evento de clique a cada item da lista
listaItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Remove a classe "ativo" de todos os itens
    listaItems.forEach((el) => el.classList.remove("ativo"));

    // Adiciona a classe "ativo" ao item clicado
    item.classList.add("ativo");

    // Exibe o número clicado no <span>
    const numeroSelecionado = item.textContent;
    spanNumeroSelecionado.textContent = numeroSelecionado;

  });
});

