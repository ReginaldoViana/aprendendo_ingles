# Aprendendo Inglês - Game de Tradução

Um jogo interativo desenvolvido em Angular para ajudar no aprendizado de inglês através da tradução de palavras.

## 📝 Descrição do Projeto

Este é um jogo educativo onde o usuário precisa traduzir palavras do inglês para o português. O jogo possui um sistema de vidas (5 tentativas) e um progresso visual que mostra o avanço do jogador. Cada acerto incrementa o progresso, e cada erro diminui uma vida.

## 🛠️ Tecnologias Utilizadas

- **Angular 20.2.3** - Framework principal com Standalone Components
- **TypeScript 5.8.3** - Linguagem de programação
- **Bootstrap 4.4.1** - Framework CSS para estilização
- **SweetAlert2** - Biblioteca para popups interativos
- **RxJS 7.8.2** - Biblioteca para programação reativa
- **Angular Forms** - Para formulários reativos

## 🏗️ Arquitetura do Projeto

O projeto utiliza a moderna arquitetura de Standalone Components do Angular 16, proporcionando melhor modularização e performance:

### Componentes
- **AppComponent** - Componente raiz que gerencia o estado do jogo e configurações iniciais
- **InicioComponent** - Tela inicial para configuração do jogo e dados do jogador
- **PainelComponent** - Componente principal que controla a lógica do jogo
- **TopoComponent** - Cabeçalho da aplicação
- **ProgressoComponent** - Barra de progresso do jogo
- **TentativasComponent** - Exibe as vidas restantes do jogador

### Modelos e Interfaces
- **Palavra** - Interface para as palavras a serem traduzidas
- **Coracao** - Modelo para o sistema de vidas
- **Jogador** - Interface para os dados do jogador

### Características da Arquitetura
- Utiliza Standalone Components para melhor modularização
- Implementa comunicação entre componentes via Input/Output
- Gerenciamento de estado no componente raiz
- Formulários reativos para entrada de dados
- Injeção de dependências para serviços compartilhados

### Estrutura de Arquivos
```
src/
  ├── app/
  │   ├── painel/
  │   ├── progresso/
  │   ├── tentativas/
  │   ├── topo/
  │   └── shared/
  └── assets/
```

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js (v24.7.0 ou superior)
- NPM (v11.5.2 ou superior)
- Angular CLI (v20.2.1 ou superior)

### Instalação
1. Clone o repositório
   ```bash
   git clone https://github.com/ReginaldoViana/primeiro-projeto-angular.git
   ```

2. Entre no diretório do projeto
   ```bash
   cd aprendendo-ingles
   ```

3. Instale as dependências
   ```bash
   npm install --legacy-peer-deps
   ```

4. Inicie o servidor de desenvolvimento
   ```bash
   ng serve
   ```

5. Acesse `http://localhost:4200` no seu navegador

## 🏗️ Scripts Disponíveis

- `ng serve` - Inicia o servidor de desenvolvimento
- `ng build` - Compila o projeto
- `ng build --prod` - Compila o projeto para produção
- `ng test` - Executa os testes unitários
- `ng e2e` - Executa os testes end-to-end

## 🎮 Como Jogar

1. Na tela inicial:
   - Digite seu nome
   - Escolha quantas palavras deseja aprender (3, 5, 7 ou 10)
   - Clique em "Começar a Jogar"

2. Durante o jogo:
   - O sistema apresentará uma palavra em inglês
   - Digite a tradução em português no campo de texto
   - Clique em verificar ou pressione Enter
   - Você tem 5 tentativas para acertar
   - O progresso é mostrado na barra superior

3. O jogo termina quando você:
   - Acerta todas as palavras escolhidas (vitória)
   - Perde todas as vidas (derrota)

4. Ao final:
   - Uma mensagem personalizada com seu nome aparecerá
   - Você pode escolher jogar novamente com novas configurações

## ✨ Funcionalidades

- Sistema de vidas com 5 tentativas
- Barra de progresso visual
- Feedback instantâneo para acertos e erros
- Popups interativos e amigáveis
- Verificação case-insensitive das respostas
- Reinício do jogo após vitória ou derrota

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Para contribuir:

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/AmazingFeature`)
3. Adicione suas mudanças (`git add .`)
4. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
5. Push para a Branch (`git push origin feature/AmazingFeature`)
6. Abra um Pull Request
