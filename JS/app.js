

function initSPA() {
  const app = document.getElementById("app");
  if (!app) return; // se não estiver na index, não faz nada

  const links = document.querySelectorAll("nav a[data-view]");
  const templates = getTemplates();

  function render(view) {
    const html = templates[view] || templates.home;
    app.innerHTML = html;
  }

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const view = link.dataset.view;
      render(view);
      window.history.pushState({ view }, "", "#" + view);
    });
  });

  // estado inicial
  const initialView = window.location.hash.replace("#", "") || "home";
  render(initialView);

  window.addEventListener("popstate", (event) => {
    const view = event.state?.view || "home";
    render(view);
  });
}

// 2) TEMPLATES JS -------------------------------------------

function getTemplates() {
  return {
    home: `
      <section class="hero">
        <div class="container">
          <h1>Nome da Organização</h1>
          <p>Somos uma organização dedicada a apoiar comunidades locais através de projetos sociais de educação, doações e voluntariado.</p>
          <img src="images/hero.jpg" alt="Voluntários ajudando a comunidade" />
        </div>
      </section>
      <section class="sobre container">
        <h2>Sobre nós</h2>
        <p>Endereço: Cidade Exemplo.</p>
        <p>E-mail: contato@exemplo.org | Telefone: +351 912 345 678</p>
      </section>
    `,
    projetos: `
      <main class="container">
        <h1>Projetos Sociais</h1>
        <p>Conheça alguns dos nossos principais projetos e veja como você pode ajudar.</p>

        <section>
          <h2>Projeto Esperança</h2>
          <div class="badges">
            <span class="badge badge-warning">Alimentação</span>
            <span class="badge badge-success">Doações</span>
          </div>
          <img src="images/projeto1.jpg" alt="Voluntários entregando alimentos" />
          <p>Arrecada alimentos e distribui cestas básicas a famílias em situação de vulnerabilidade.</p>
        </section>

        <section>
          <h2>Educação para Todos</h2>
          <div class="badges">
            <span class="badge badge-info">Educação</span>
            <span class="badge badge-success">Voluntariado</span>
          </div>
          <img src="images/projeto2.jpg" alt="Crianças estudando com apoio de voluntários" />
          <p>Oferecemos aulas gratuitas de reforço escolar e capacitação profissional para jovens e adultos.</p>
        </section>

        <section>
          <h2>Lar Animal</h2>
          <div class="badges">
            <span class="badge badge-danger">Animais</span>
            <span class="badge badge-success">Adoção</span>
          </div>
          <img src="images/projeto3.jpg" alt="Manutencao" />
          <p>Projeto de Manutencao industrial.</p>
        </section>
      </main>
    `
  };

  sobre: `
  <section class="container">
    <h1>Sobre a Empresa</h1>
    <p>Somos uma empresa dedicada a manutencao de maquinas. </p>
    <p>Trabalhamos para transformar vidas e fortalecer comunidades locais.</p>
    <img src="images/hero.jpg" alt="Imagem institucional" class="img-padrao" />
  </section>
`,

contato: `
  <section class="container">
    <h1>Contato</h1>
    <p>Email: contato@exemplo.org</p>
    <p>Telefone: +351 912 345 678</p>
    <p>Endereço: Rua Exemplo, 123 — Sao Jose dos Campos</p>
  </section>
`,



}

// 3) VALIDAÇÃO DE CONSISTÊNCIA DO FORMULÁRIO ----------------

function initFormValidation() {
  const form = document.getElementById("form-cadastro");
  if (!form) return; // se não estiver na página de cadastro, sai

  const cpfInput = document.getElementById("cpf");
  const cepInput = document.getElementById("cep");
  const nascimentoInput = document.getElementById("nascimento");
  const emailInput = document.getElementById("email");

  let errorBox = document.getElementById("form-erros");
  if (!errorBox) {
    errorBox = document.createElement("div");
    errorBox.id = "form-erros";
    errorBox.style.marginTop = "16px";
    form.appendChild(errorBox);
  }

  form.addEventListener("submit", (e) => {
    const erros = [];

    // CPF simples: deve ter 11 dígitos
    const cpfLimpo = (cpfInput?.value || "").replace(/\D/g, "");
    if (cpfLimpo.length !== 11) {
      erros.push("CPF deve conter 11 dígitos.");
    }

    // CEP simples: 8 dígitos
    const cepLimpo = (cepInput?.value || "").replace(/\D/g, "");
    if (cepLimpo.length !== 8) {
      erros.push("CEP deve conter 8 dígitos.");
    }

    // Idade mínima 18 anos
    if (nascimentoInput?.value) {
      const hoje = new Date();
      const nasc = new Date(nascimentoInput.value);
      let idade = hoje.getFullYear() - nasc.getFullYear();
      const m = hoje.getMonth() - nasc.getMonth();
      if (m < 0 || (m === 0 && hoje.getDate() < nasc.getDate())) {
        idade--;
      }
      if (idade < 18) {
        erros.push("Você deve ter pelo menos 18 anos para se cadastrar.");
      }
    } else {
      erros.push("Data de nascimento é obrigatória.");
    }

    // E-mail simples
    const emailVal = (emailInput?.value || "").trim();
    if (!emailVal.includes("@") || !emailVal.includes(".")) {
      erros.push("Informe um e-mail válido.");
    }

    if (erros.length > 0) {
      e.preventDefault();
      errorBox.innerHTML = `
        <div class="alert">
          <strong>Verifique os dados:</strong>
          <ul>${erros.map((msg) => `<li>${msg}</li>`).join("")}</ul>
        </div>
      `;
      errorBox.scrollIntoView({ behavior: "smooth" });
    } else {
      errorBox.innerHTML = "";
    }
  });
}

// INICIALIZAÇÃO GERAL ---------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  initSPA();
  initFormValidation();
});