Entrega 3 – JavaScript Avançado (SPA + DOM + Validações)

Projeto desenvolvido como parte da Entrega 3 da disciplina Fundamentos e Estruturação de Sistemas, com foco em transformar o site estático das Entregas I e II em uma aplicação dinâmica utilizando JavaScript Avançado, incluindo SPA, templates e validações interativas.

⸻

Objetivos do Projeto
	•	Implementar Single Page Application (SPA) básica utilizando JavaScript puro.
	•	Criar templates dinâmicos renderizados via DOM.
	•	Modularizar o JavaScript em arquivos organizados por funcionalidade.
	•	Implementar verificação avançada de consistência de dados no formulário.
	•	Fornecer feedback ao usuário em caso de erros no preenchimento.
	•	Manter o site responsivo e funcional com HTML5 + CSS3 + JS.

⸻

Estrutura do Projeto

Entrega3-JavaScript/
├─ index.html
├─ projetos.html
├─ cadastro.html
├─ css/
│  ├─ base.css
│  ├─ layout.css
│  ├─ components.css
│  └─ styles.css
├─ js/
│  ├─ masks.js
│  └─ app.js
├─ images/
│  ├─ logo.png
│  ├─ hero.jpg
│  ├─ projeto1.jpg
│  ├─ projeto2.jpg
│  └─ projeto3.jpg
└─ README.md


Funcionalidades Implementadas

📌 1. Single Page Application (SPA)
	•	Navegação dinâmica na index.html sem recarregar a página.
	•	Renderização condicional baseada no atributo data-view.
	•	Manipulação do histórico do navegador (pushState e popstate).

📌 2. Templates JavaScript
	•	Cada seção (home, projetos, sobre, contato) foi implementada como template dentro de app.js.
	•	Os templates são injetados diretamente no DOM.

📌 3. Manipulação do DOM
	•	Substituição do conteúdo do elemento <main id="app"> dinamicamente.
	•	Eventos de clique nos links do menu para atualizar a interface.

📌 4. Validação Avançada de Formulário

Sistema completo de verificação de consistência:
	•	CPF deve ter 11 dígitos
	•	CEP deve ter 8 dígitos
	•	E-mail deve ser válido
	•	Usuário deve ter 18 anos ou mais
	•	Avisos são exibidos dinamicamente via box de erro
	•	Formulário não envia se houver erros

📌 5. Organização Modular

O arquivo app.js é dividido em seções:
	1.	SPA
	2.	Templates
	3.	Validação do formulário
	4.	Inicialização geral

⸻

📄 Páginas (HTML)

Página
Descrição
index.html
Página inicial; agora controla o SPA
projetos.html
Conteúdo independente (não SPA)
cadastro.html
Formulário com validação avançada




ecnologias Utilizadas
	•	HTML5
	•	CSS3 (Grid, Flexbox, Variáveis e Design System da Entrega II)
	•	JavaScript (Vanilla)
	•	Manipulação do DOM
	•	Eventos
	•	Templates HTML
	•	Validação de dados
	•	SPA básica
	•	GitHub Pages (publicação do projeto)

⸻

🌐 Publicação

🔗 Repositório Público


https://github.com/ismaelgpereira/Entrega3-JavaScript


Site Publicado (GitHub Pages):

https://ismaelgpereira.github.io/Entrega3-JavaScript/

Autor

Nome: Ismael Gomes Pereira
Curso: Análise e Desenvolvimento de Sistemas
Atividade: Entrega III – JavaScript Avançado
Data: Novembro / 2025

⸻

✔️ Validação HTML

Todos os arquivos HTML foram revisados e validados no
W3C Validator, garantindo conformidade com os padrões HTML5.




