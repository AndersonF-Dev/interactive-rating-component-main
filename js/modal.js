// Seleciona os elementos necessários
const openModalButton = document.getElementById("openModal");
const modal = document.getElementById("modal");
const overlay = document.getElementById("modalOverlay");

// Função para abrir o modal
function openModal() {
  modal.classList.add("active");  // Mostra o modal
  overlay.classList.add("active");  // Mostra o overlay
  
  // Fecha o modal automaticamente após 5 segundos
  setTimeout(closeModal, 5000); // 5000 milissegundos = 5 segundos
}

// Função para fechar o modal
function closeModal() {
  modal.classList.remove("active");  // Esconde o modal
  overlay.classList.remove("active");  // Esconde o overlay
}

// Adiciona o evento de clique ao botão
openModalButton.addEventListener("click", openModal);
