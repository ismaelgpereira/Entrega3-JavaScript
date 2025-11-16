// === Funções de Máscaras e Validação ===

// Quando o documento carregar, aplica os eventos nos inputs
document.addEventListener("DOMContentLoaded", () => {
  const cpfInput = document.getElementById("cpf");
  const telInput = document.getElementById("telefone");
  const cepInput = document.getElementById("cep");

  if (cpfInput) {
    cpfInput.addEventListener("input", () => {
      cpfInput.value = mascaraCPF(cpfInput.value);
    });
  }

  if (telInput) {
    telInput.addEventListener("input", () => {
      telInput.value = mascaraTelefone(telInput.value);
    });
  }

  if (cepInput) {
    cepInput.addEventListener("input", () => {
      cepInput.value = mascaraCEP(cepInput.value);
    });
  }
});

// === Funções de formatação ===

function mascaraCPF(valor) {
  return valor
    .replace(/\D/g, "") // remove tudo que não for número
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}

function mascaraTelefone(valor) {
  return valor
    .replace(/\D/g, "")
    .replace(/^(\d{2})(\d)/g, "($1) $2")
    .replace(/(\d{4,5})(\d{4})$/, "$1-$2");
}

function mascaraCEP(valor) {
  return valor
    .replace(/\D/g, "")
    .replace(/^(\d{5})(\d)/, "$1-$2");
}

// === Mensagem de confirmação de envio ===

const form = document.getElementById("form-cadastro");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Cadastro enviado com sucesso!");
    form.reset();
  });
}


// === MENU MOBILE HAMBÚRGUER ===
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".hamburger");
  const menu = document.querySelector("#menu");
  if (!btn || !menu) return;

  btn.addEventListener("click", () => {
    const opened = menu.classList.toggle("open");
    btn.setAttribute("aria-expanded", opened ? "true" : "false");
  });
});