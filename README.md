# OnTheAir CG - Lower Thirds Control

Este projeto fornece uma interface simples para controlar os **Lower Thirds** em uma emissora de televisão, integrando com a API **REST** do **OnTheAir CG** da Softron. Ele permite exibir tarjas sem a necessidade de usar o software, facilitando o processo de edição de projetos e exibição de conteúdo em tempo real.

## Funcionalidades

- **Conexão com a API**: Exibe o status da conexão com a API do OnTheAir CG.
- **Adicionar Conteúdo**: Permite adicionar títulos de conteúdos para visualização.
- **Adicionar Projetos**: Oferece um formulário para associar projetos aos conteúdos e controlar sua execução.
- **Controle de Lower Thirds**: Permite iniciar, pausar, parar e remover Lower Thirds de forma interativa.
- **Persistência de Estado**: O estado da página é salvo localmente no navegador, permitindo que as alterações sejam mantidas entre sessões.

## Tecnologias Usadas

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla)**
- **Local Storage** para persistência de dados

## Como Usar

1. **Clone este repositório:**

   ```bash
   git clone https://github.com/seu-usuario/otacg-lower-thirds.git
   ```

2. **Abra o arquivo `index.html` no seu navegador.**

3. **Adicione títulos de conteúdos** e associe **projetos** aos conteúdos usando o formulário disponível na interface.

4. **Controle os Lower Thirds**: Inicie, pause, pare ou remova o conteúdo com os botões de controle.

## Estrutura do Projeto

```plaintext
/otacg-lower-thirds
│
├── index.html        # Página principal com a interface
├── styles.css        # Estilos do projeto
├── script.js         # Lógica JavaScript para controle de Lower Thirds
└── README.md         # Este arquivo
```

## Funcionalidade Detalhada

### 1. **Adicionar Conteúdo**
   - Insira um título e clique em "Adicionar Conteúdo". O conteúdo será exibido na tela.

### 2. **Adicionar Projeto**
   - Para cada conteúdo, você pode adicionar um projeto. Após selecionar um projeto, você pode controlar a execução dele.

### 3. **Controle de Lower Thirds**
   - **Iniciar**: Começa a exibição do Lower Third.
   - **Pausar**: Pausa a exibição do Lower Third.
   - **Parar**: Finaliza a exibição do Lower Third.
   - **Remover**: Remove o conteúdo ou projeto da lista.

### 4. **Persistência de Dados**
   - O estado de todos os conteúdos e projetos é salvo automaticamente no **Local Storage** do navegador. Isso garante que os dados sejam mantidos mesmo após a atualização da página.

## Exemplo de Uso

1. Abra a página e insira um título no campo "Insira um título para o Conteúdo".
2. Adicione um projeto ao conteúdo inserido e controle os Lower Thirds com os botões "Iniciar", "Pausar", "Parar" ou "Remover".

## Personalização

- **Projetos**: Atualmente, os projetos são predefinidos como "Projeto 1", "Projeto 2", e "Projeto 3". Você pode personalizar esses valores diretamente no código ou implementar uma forma de adicionar projetos dinamicamente.

## Licença

Este projeto está licenciado sob a **MIT License** - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
