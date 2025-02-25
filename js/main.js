// Adicione aqui qualquer JavaScript necessário para interatividade
document.addEventListener("DOMContentLoaded", function () {
  // Highlight do código
  Prism.highlightAll();

  // Smooth scroll para links internos
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  const menuButton = document.querySelector(".mobile-menu-button");
  const sidebar = document.querySelector(".sidebar");

  menuButton.addEventListener("click", function () {
    sidebar.classList.toggle("active");
  });

  // Fechar menu ao clicar em um link
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", function () {
      sidebar.classList.remove("active");
    });
  });

  // Fechar menu ao clicar fora
  document.addEventListener("click", function (e) {
    if (!sidebar.contains(e.target) && !menuButton.contains(e.target)) {
      sidebar.classList.remove("active");
    }
  });
});
