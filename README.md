 
# App To Do List

Este projeto de To-Do List foi desenvolvido durante o desafio do Programa Trilhas - Inova Maranhão para demonstrar o que aprendemos durante o programa.

### Sobre o Projeto
A aplicação web de gerenciamento de tarefas (To-Do List) foi construída com React, TypeScript e CSS. Ela permite que você adicione, edite, conclua e remova tarefas facilmente. Quando uma tarefa é concluída, ela é movida para uma seção específica e pode ser retornada à lista principal se necessário. O projeto também inclui alertas animados que informam sobre a criação, edição, conclusão e remoção de tarefas, garantindo uma experiência do usuário agradável.

### Sobre o Inova Maranhão
O Inova Maranhão é um programa do Governo do Estado vinculado à Secretaria de Estado da Ciência, Tecnologia e Inovação (SECTI). Seu objetivo é estimular a inovação, o empreendedorismo, o desenvolvimento tecnológico, sustentável e social entre os maranhenses. Criado em 2015, começou como um programa de incubação de startups e hoje possui oito eixos estratégicos.

### O que é o Programa Trilhas do Inova Maranhão?
Trilhas é um programa de qualificação em tecnologia para pessoas a partir de 16 anos. Com uma jornada de 20 semanas, o programa oferece cursos nas áreas de Programação Front-end, Programação Back-end, Programação de Jogos, Design e Experiência do Usuário, Ciência de Dados e Carreiras. O objetivo é atender demandas locais, nacionais e internacionais, fomentando o empreendedorismo e a empregabilidade, e impactando social e economicamente a vida dos participantes.
## Stack utilizada

**React:** Biblioteca JavaScript para construção de interfaces de usuário.

**TypeScript:** Superset de JavaScript que adiciona tipagem estática opcional à linguagem.

**CSS:** Folhas de estilo em cascata para estilização da aplicação.

**LocalStorage:** Tecnologia de armazenamento web para persistir dados no navegador do usuário.


## Funcionalidades do Projeto

**Adicionar Tarefa:** Permite adicionar novas tarefas à lista.

**Editar Tarefa:** Permite editar o texto das tarefas.

**Concluir Tarefa:** Permite marcar tarefas como concluídas, movendo-as para a seção de tarefas concluídas.

**Remover Tarefa:** Permite remover tarefas da lista.

**Alertas:** Informam sobre ações realizadas, como criação, edição, conclusão e remoção de tarefas, com animações de entrada e saída.

**Persistência de Dados:** As tarefas são salvas no LocalStorage, garantindo que elas permaneçam mesmo após o fechamento do navegador.

## Como Usar e Rodar o Projeto
### Requisitos
#### Instale my-project com npm

Antes de começar, você precisará ter o Node.js e o npm instalados na sua máquina. Se ainda não os tem, siga os links para fazer o download e a instalação
```
https://nodejs.org/pt
https://www.npmjs.com
```

#### Como Rodar o Projeto:
Primeiro, clone o repositório do GitHub para o seu computador. Abra o terminal ou o prompt de comando e execute:
```
git clone https://github.com/MarcoskDev/App-ToDoList-Equipe1.git

```
#### Instale as Dependências:
Navegue até a pasta do projeto e instale as dependências necessárias executando:
```
cd App-ToDoList-Equipe1
npm install

```
#### Rodando o Projeto:
Com as dependências instaladas, inicie o servidor de desenvolvimento:
```
npm start
```
#### Abra no Navegador:
O comando acima abrirá automaticamente a aplicação no seu navegador padrão. Se isso não acontecer, abra manualmente o navegador e acesse:
```
http://localhost:3000
```
## Estrutura do Projeto:
```
App-ToDoList-Equipe1/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── MenuBar.tsx
│   │   ├── Header.tsx
│   │   ├── TodoForm.tsx
│   │   ├── TodoList.tsx
│   │   ├── TodoItem.tsx
│   ├── App.tsx
│   ├── index.tsx
│   ├── styles/
│   │   ├── App.css
│   │   ├── MenuBar.css
│   │   ├── Header.css
│   │   ├── TodoForm.css
│   │   ├── TodoList.css
│   │   ├── TodoItem.css
│   ├── utils/
│   │   ├── alerts.ts
│   │   ├── localStorage.ts
│   └── react-app-env.d.ts
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md

```
## Como Contribuir
Contribuições são sempre bem-vindas!

Se você quiser contribuir para o projeto, siga estes passos:

**1** - Faça um Fork do Repositório:
```
Clique no botão "Fork" no canto superior direito da página do repositório no GitHub.
```

**2** - Clone o seu Fork:
Clone o repositório forkado para o seu computador:
```
git clone https://github.com/MarcoskDev/App-ToDoList-Equipe1-forkado.git

```

**3** - Crie uma Branch para a sua Feature ou Bugfix:
```
git checkout -b sua-nova-feature

```

**4** - Faça as Alterações Necessárias e Commite:
```
git add .
git commit -m "Adicione aqui sobre sua nova feature"
```

**5** - Push para o seu Fork:
```
git push origin sua-nova-feature
```

**6** - Crie um Pull Request:
```
Vá até a página do repositório original no GitHub e clique no botão "New Pull Request".
```
