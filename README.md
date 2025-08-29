# Aprendendo Inglês - Game de Tradução

Um jogo interativo desenvolvido em Angular para ajudar no aprendizado de inglês através da tradução de palavras.

## 📝 Descrição do Projeto

Este é um jogo educativo onde o usuário precisa traduzir palavras do inglês para o português. O jogo possui um sistema de vidas (5 tentativas) e um progresso visual que mostra o avanço do jogador. Cada acerto incrementa o progresso, e cada erro diminui uma vida.

## 🛠️ Tecnologias Utilizadas

- **Angular 16.2.12** - Framework principal
- **TypeScript 4.9.5** - Linguagem de programação
- **Bootstrap 4.4.1** - Framework CSS para estilização
- **SweetAlert2** - Biblioteca para popups interativos
- **RxJS** - Biblioteca para programação reativa

## 🏗️ Arquitetura do Projeto

O projeto segue a arquitetura de componentes do Angular e está organizado da seguinte forma:

### Componentes
- **AppComponent** - Componente raiz que gerencia o estado do jogo
- **PainelComponent** - Componente principal que controla a lógica do jogo
- **TopoComponent** - Cabeçalho da aplicação
- **ProgressoComponent** - Barra de progresso do jogo
- **TentativasComponent** - Exibe as vidas restantes do jogador

### Modelos
- **Palavra** - Interface para as palavras a serem traduzidas
- **Coracao** - Modelo para o sistema de vidas

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
- Node.js (v14 ou superior)
- NPM (v6 ou superior)
- Angular CLI

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

1. O jogo apresentará uma palavra em inglês
2. Digite a tradução em português no campo de texto
3. Clique em verificar ou pressione Enter
4. Você tem 5 tentativas para acertar
5. O jogo termina quando você:
   - Acerta todas as palavras (vitória)
   - Perde todas as vidas (derrota)

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
