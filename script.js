// Obtendo os elementos DOM
const addContentBtn = document.getElementById('addContentBtn');
const contentsContainer = document.getElementById('contentsContainer');

// Carregar estado salvo ao iniciar a página
window.onload = loadState;

// Evento para adicionar um novo conteúdo
addContentBtn.addEventListener('click', () => {
    const contentTitle = document.getElementById('newContentTitle').value.trim();

    // Verificação se o título do conteúdo foi preenchido
    if (contentTitle === "") {
        alert("Por favor, insira um título para o conteúdo.");
        return;
    }

    // Criação do bloco de conteúdo
    const contentBlock = createContentBlock(contentTitle);
    contentsContainer.insertBefore(contentBlock, contentsContainer.firstChild);

    // Limpar campo de título
    document.getElementById('newContentTitle').value = "";
    saveState(); // Salvar estado após adicionar conteúdo
});

// Função para criar o formulário de seleção do projeto
function createAddProjectForm() {
    const projectFormContainer = document.createElement('div');
    projectFormContainer.classList.add('select-project');

    const label = document.createElement('label');
    label.setAttribute('for', 'projectSelect');
    label.textContent = 'Adicionar Novo Projecto: ';

    const select = document.createElement('select');
    select.id = 'projectSelect';
    select.innerHTML = `
        <option value="">Selecione...</option>
        <option value="Projeto 1">Projeto 1</option>
        <option value="Projeto 2">Projeto 2</option>
        <option value="Projeto 3">Projeto 3</option>
    `;

    const addProjectBtn = document.createElement('button');
    addProjectBtn.textContent = 'Adicionar Projeto';
    addProjectBtn.addEventListener('click', (event) => addProject(event, select.value));

    projectFormContainer.appendChild(label);
    projectFormContainer.appendChild(select);
    projectFormContainer.appendChild(addProjectBtn);

    return projectFormContainer;
}

// Função para criar o bloco de conteúdo com título e botão de remover conteúdo
function createContentBlock(contentTitle) {
    const contentBlock = document.createElement('div');
    contentBlock.classList.add('content-block');

    const h2 = document.createElement('h2');
    h2.textContent = contentTitle;
    contentBlock.appendChild(h2);


// Botão para remover o conteúdo
const removeContentBtn = document.createElement('button');
removeContentBtn.textContent = "Remover Conteúdo";
removeContentBtn.id = "remove-btn-content"; // Usando ID ao invés de class
removeContentBtn.onclick = () => {
    contentBlock.remove();
    saveState(); // Salvar estado após remoção
};
contentBlock.appendChild(removeContentBtn);


    // Formulário para adicionar projetos
    const addProjectForm = createAddProjectForm();
    contentBlock.appendChild(addProjectForm);

    return contentBlock;
}



// Função para adicionar o projeto e exibir a seção de controle
function addProject(event, selectedProject) {
    event.preventDefault();
    if (!selectedProject) {
        alert("Por favor, selecione um projeto.");
        return;
    }

    // Criação da nova seção de projeto com botões de controle
    const projectSection = createProjectSection(selectedProject);

    const contentBlock = event.target.closest('.content-block');
    contentBlock.appendChild(projectSection); // Adiciona a seção de projeto ao conteúdo

    // Limpar a seleção de projeto após adicionar
    const select = contentBlock.querySelector('#projectSelect');
    select.value = "";
    saveState(); // Salvar estado após adicionar projeto
}

// Função para criar a seção de um projeto com os botões de controle
function createProjectSection(projectName) {
    const projectSection = document.createElement('div');
    projectSection.classList.add('project-section-project');

    // Título do projeto e botões de controle
    const projectHeader = document.createElement('div');
    projectHeader.classList.add('project-header');

    const projectTitle = document.createElement('h2');
    projectTitle.textContent = `Projeto: ${projectName}`;
    projectHeader.appendChild(projectTitle);

    const controlButtons = createControlButtons();
    projectHeader.appendChild(controlButtons);

    projectSection.appendChild(projectHeader);

    // Campos de formulário específicos do projeto
    const projectForm = createProjectForm();
    projectSection.appendChild(projectForm);

    return projectSection;
}
// Função para criar os botões de controle (Iniciar, Pausar, Parar, Remover)
function createControlButtons() {
    const controlButtons = document.createElement('div');
    controlButtons.classList.add('control-buttons');

    // Botões de controle
    const removeBtn = createButton("Remover", function() {
        controlButtons.closest('.project-section-project').remove();
        saveState();
    }, "remove-btn");  // Adicionando ID para o botão Remover
    const startBtn = createButton("Iniciar", startLowerThird, "start-btn");  // Adicionando ID para o botão Iniciar
    const pauseBtn = createButton("Pausar", pauseLowerThird, "pause-btn");  // Adicionando ID para o botão Pausar
    const stopBtn = createButton("Parar", stopLowerThird, "stop-btn");  // Adicionando ID para o botão Parar
   
    controlButtons.appendChild(removeBtn);
    controlButtons.appendChild(startBtn);
    controlButtons.appendChild(pauseBtn);
    controlButtons.appendChild(stopBtn);

    return controlButtons;
}

// Função para criar um botão com texto, ação e id
function createButton(text, onClickFunction, id) {
    const button = document.createElement('button');
    button.textContent = text;
    button.onclick = onClickFunction;
    button.id = id;  // Atribuindo o ID ao botão
    return button;
}

// Funções de controle (com lógica a ser integrada futuramente)
function startLowerThird() {
    console.log("Iniciar Lower Third");
}

function pauseLowerThird() {
    console.log("Pausar Lower Third");
}

function stopLowerThird() {
    console.log("Parar Lower Third");
}

// Função para criar o formulário do projeto com campos adicionais
function createProjectForm() {
    const projectForm = document.createElement('div');
    projectForm.classList.add('project-form');

    // Campo de formulário adicional
    projectForm.innerHTML = `
        <label for="projectField">Campo de Formulário:</label>
        <input type="text" id="projectField" placeholder="Digite algo...">
    `;

    // Salvar estado ao modificar os campos do formulário
    projectForm.querySelector('input').addEventListener('input', saveState);

    return projectForm;
}

// Função para salvar o estado atual no Local Storage
function saveState() {
    // Coleta todos os conteúdos e projetos
    const contents = [];

    // Percorre todos os blocos de conteúdo na página
    document.querySelectorAll('.content-block').forEach(contentBlock => {
        const contentTitle = contentBlock.querySelector('h2').textContent;
        const projects = [];

        // Obtém os projetos dentro de cada bloco de conteúdo
        contentBlock.querySelectorAll('.project-section-project').forEach(projectSection => {
            const projectName = projectSection.querySelector('h2').textContent.replace('Projeto: ', '');
            const projectField = projectSection.querySelector('#projectField').value;
            projects.push({ name: projectName, field: projectField });
        });

        contents.push({ title: contentTitle, projects: projects });
    });

    // Salva o estado no Local Storage
    localStorage.setItem('pageState', JSON.stringify(contents));
}

// Função para carregar o estado salvo no Local Storage
function loadState() {
    const savedState = localStorage.getItem('pageState');

    if (savedState) {
        const contents = JSON.parse(savedState);

        // Carrega os conteúdos salvos
        contents.forEach(content => {
            const contentBlock = createContentBlock(content.title);
            content.projects.forEach(project => {
                const projectSection = createProjectSection(project.name);
                projectSection.querySelector('#projectField').value = project.field;
                contentBlock.appendChild(projectSection);
            });
            document.getElementById('contentsContainer').appendChild(contentBlock);
        });
    }
}

// Ativar auto-save ao modificar o conteúdo
function enableAutoSave() {
    document.addEventListener('input', saveState);
}

// Ativar auto-save
enableAutoSave();
