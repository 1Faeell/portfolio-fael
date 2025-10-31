const dados = {
  perfil: {
    nome: "Rafael Soares Mota",
    titulo: "Desenvolvedor Front-end",
    localizacao: "Salvador/Bahia, BA",
    email: "faelsoaresm@gmail.com",
    telefone: "(71) 9 8832-7708",
    sobre:
      "Sou um desenvolvedor Front-end curioso por natureza e interessado em criar experiências reais com código. Gosto de ver as coisas tomando forma na tela desde o primeiro div até o último toque no estilo. Busco sempre deixar meus projetos mais fluidos, bonitos e bem estruturados, visando também a performance.",
  },

  habilidades: [
    { nome: "HTML & CSS", nivel: "Avançado" },
    { nome: "JavaScript", nivel: "Intermediário" },
    { nome: "Bootstrap", nivel: "Intermediário" },
    { nome: "React", nivel: "Básico" },
    { nome: "Tailwindcss", nivel: "Intermediário" },
    { nome: "Git & GitHub", nivel: "Intermediário" },
    { nome: "Responsive Design", nivel: "Avançado" },
    { nome: "Node.js", nivel: "Básico" },
  ],

  idiomas: [
    { nome: "Português", nivel: "Nativo" },
    { nome: "Inglês", nivel: "Intermediário" },
    { nome: "Espanhol", nivel: "Básico" },
  ],

  projetos: [
    {
      titulo: "Site Advocacia",
      descricao:
        "Website institucional profissional com design corporativo elegante e layout totalmente responsivo. Feito em HTML, CSS e Javascript",
      imagem: "assets/images/advocacia-e-consultoria.png",
      link: "https://1faeell.github.io/advocacia-e-consultoria",
    },
    {
      titulo: "Site Cafeteria",
      descricao:
        "Coffee’s Place, um site fictício de cafeteria feito com HTML, CSS e JavaScript puro.",
      imagem: "assets/images/coffesplace.png",
      link: "https://1faeell.github.io/cafeteria-coffee-place",
    },
    {
      titulo: "App de Previsão do Tempo",
      descricao:
        "App de Previsão do Tempo totalmente funcional, desenvolvido com Vite + React + Axios e integrado à API do OpenWeather",
      imagem: "assets/images/previsao-do-tempo.png",
      link: "https://1faeell.github.io/previsao-do-tempo",
    },
    {
      titulo: "App de Conversão de Moedas",
      descricao:
        "Aplicativo de conversão de moedas desenvolvido com HTML, CSS e JavaScript, consumindo a API pública ExchangeRate API.",
      imagem: "assets/images/conversor-de-moedas.png",
      link: "https://1faeell.github.io/conversor-de-moedas",
    },
    {
      titulo: "To-Do List",
      descricao:
        "Aplicativo de lista de tarefas com localStorage para salvar dados. Feito em React e Tailwind.",
      imagem: "assets/images/to-do-list.png",
      link: "https://1faeell.github.io/gerenciador-de-tarefas",
    },
    {
      titulo: "Pokédex (Lista de Pokémons)",
      descricao:
        "Lista de Pokémons da 1° Geração, interativa utilizando a API PokéAPI, feito em HTML, CSS e JavaScript para consumir dados em tempo real e exibir informações detalhadas de cada Pokémon.",
      imagem: "assets/images/pokedex-api.png",
      link: "https://1faeell.github.io/js-developer-pokedex/",
    },
  ],

  certificados: [
    {
      titulo: "Bootcamp Programador em 7 dias",
      emissor: "Dev Club",
      data: "2025",
      link: "",
    },
    {
      titulo: "Santander 2025 - Front-End",
      emissor: "DIO",
      data: "2025",
      link: "",
    },
    {
      titulo: "Git e Github",
      emissor: "LinkedIn Learning",
      data: "2025",
      link: "",
    },
    {
      titulo: "GFT Start#6 - Lógica de Programação",
      emissor: "DIO",
      data: "2025",
      link: "",
    },
  ],

  experiencia: [
    {
      cargo: "Freelancer Web",
      empresa: "Autônomo",
      periodo: "2024 - Presente",
      descricao:
        "Desenvolvimento de sites para pequenos negócios locais. Foco em design responsivo e performance.",
    },
  ],

  social: [
    {
      nome: "GitHub",
      link: "https://github.com/1faeell",
      icone: "bi-github",
    },
    {
      nome: "LinkedIn",
      link: "https://linkedin.com/in/rafaelsfront",
      icone: "bi-linkedin",
    },
    {
      nome: "Instagram",
      link: "https://instagram.com/fael.front",
      icone: "bi-instagram",
    },
    {
      nome: "Whatsapp",
      link: "https://wa.me/5571988327708",
      icone: "bi-whatsapp",
    },
    {
      nome: "Email",
      link: "mailto:faelsoaresm@gmail.com",
      icone: "bi-envelope-fill",
    },
  ],
};

// Carregar dados no site
function carregarDados() {
  // Perfil
  document.getElementById("name").textContent = dados.perfil.nome;
  document.getElementById("title").textContent = dados.perfil.titulo;
  document.getElementById("location").textContent = dados.perfil.localizacao;
  document.getElementById("email").textContent = dados.perfil.email;
  document.getElementById("phone").textContent = dados.perfil.telefone;
  document.getElementById("aboutText").textContent = dados.perfil.sobre;

  // Redes Sociais no Profile
  const socialLinksProfile = document.getElementById("socialLinksProfile");
  dados.social.forEach((social) => {
    const a = document.createElement("a");
    a.href = social.link;
    a.className = "social-icon";
    a.innerHTML = `<i class="bi ${social.icone}"></i>`;
    a.title = social.nome;
    a.target = "_blank";
    socialLinksProfile.appendChild(a);
  });

  // Habilidades
  const skillsContainer = document.getElementById("skillsContainer");
  dados.habilidades.forEach((skill) => {
    const div = document.createElement("div");
    div.className = "skill-item";
    div.innerHTML = `
                    <div class="skill-name">${skill.nome}</div>
                    <div class="skill-level">${skill.nivel}</div>
                `;
    skillsContainer.appendChild(div);
  });

  // Idiomas
  const languagesContainer = document.getElementById("languagesContainer");
  dados.idiomas.forEach((lang) => {
    const div = document.createElement("div");
    div.className = "language-item";
    div.innerHTML = `
                    <div class="language-name">${lang.nome}</div>
                    <div class="language-level">${lang.nivel}</div>
                `;
    languagesContainer.appendChild(div);
  });

  // Projetos
  const projectsContainer = document.getElementById("projectsContainer");
  dados.projetos.forEach((project) => {
    const div = document.createElement("div");
    div.className = "project-card";
    div.innerHTML = ` 
                    <img class="project-image" src="${project.imagem}" alt="${
      project.titulo
    }"/>
                    
                    <div class="project-title">${project.titulo}</div>
                    <div class="project-desc">${project.descricao}</div>
                    ${
                      project.link
                        ? `<a href="${project.link}" target="_blank" class="project-link">
                        Visualizar Projeto <i class="bi bi-box-arrow-up-right"></i>
                    </a>`
                        : ""
                    }
                    
                `;
    projectsContainer.appendChild(div);
  });

  // Certificados
  const certificatesContainer = document.getElementById(
    "certificatesContainer"
  );
  dados.certificados.forEach((cert) => {
    const div = document.createElement("div");
    div.className = "certificate-card";
    div.innerHTML = `
                    <div class="certificate-title">${cert.titulo}</div>
                    <div class="certificate-issuer">${cert.emissor}</div>
                    <div class="certificate-date">${cert.data}</div>
                    ${
                      cert.link
                        ? `<a href="${cert.link}" target="_blank" class="certificate-link">
                        Ver certificado <i class="bi bi-box-arrow-up-right"></i>
                    </a>`
                        : ""
                    }
                `;
    certificatesContainer.appendChild(div);
  });

  // Experiência
  const experienceContainer = document.getElementById("experienceContainer");
  dados.experiencia.forEach((exp) => {
    const div = document.createElement("div");
    div.className = "experience-item";
    div.innerHTML = `
                    <div class="experience-title">${exp.cargo}</div>
                    <div class="experience-company">${exp.empresa}</div>
                    <div class="experience-date">${exp.periodo}</div>
                    <div class="experience-desc">${exp.descricao}</div>
                `;
    experienceContainer.appendChild(div);
  });

  // Redes Sociais no Footer
  const socialLinks = document.getElementById("socialLinks");
  dados.social.forEach((social) => {
    const a = document.createElement("a");
    a.href = social.link;
    a.className = "social-btn";
    a.innerHTML = `<i class="bi ${social.icone}"></i>`;
    a.title = social.nome;
    a.target = "_blank";
    socialLinks.appendChild(a);
  });

  // Copyright
  document.getElementById(
    "copyright"
  ).textContent = `© 2025 ${dados.perfil.nome}. Todos os direitos reservados.`;
}

// Alternar seção
function toggleSection(id) {
  const section = document.getElementById(id);
  section.classList.toggle("active");
}

// Inicializar
carregarDados();

// Abrir primeira seção
setTimeout(() => {
  document.getElementById("skills-section").classList.add("active");
}, 300);
