# project.lawlinkup
Repositório do projeto da faculdade 3ºSemestre. 

CRIAÇÃO DE ARQUIVO E ROTA:

Criação de um novo arquivo exemplo:
Por se tratar de uma página que utiliza EJS para ser gerada, são necessárias algumas etapas para sua criação
1 - Crie o arquivo exemplo.ejs dentro do caminho 'views/pages'
2 - Insira o código desejado como se fosse html normal e utilize as tags do EJS quando tiver domínio e julgar necessário

Adicionando uma rota para a nova página
Para que sua página possa ser acessada, é necessário adicionar seu caminho no arquivo de rotas
1 - Acesse o arquivo 'router.js' na raiz do projeto
2 - Adicione a rota no formato das outras de rotas, exemplificado abaixo (facilitado pelo uso do ejs):
router.get('/exemplo', (req, res) => {
    res.render(path.join(baseURL, 'exemplo'))
})
3- Para referenciar a página em outros arquivos, é necessário escrever o nome que está dentro do primeiro parâmetro da função router.get, que nesse caso seria '/exemplo' (porém não há necessidade de adicionar o '/')

Explicação do código acima:
~ router.get - router é uma variável sendo importada do express para criar as rotas do servidor, e o método get é o método padrão utilizado pelo navegador ao inserir uma url
~ '/exemplo' - é o caminho que estará sendo utilizado pela requisição get (basicamente o que aparecerá na url ou também a forma como você chamará a página a partir de outra página, sem a necessidade do '/' no href)
~ res.render - renderiza a página ao invés de apenas enviar um arquivo html, o que permite que o ejs crie um arquivo dinamicamente
~ baseURL - uma variável com valor 'pages', que é o nome do diretório onde as páginas ficam armazenadas, que por sua vez fica dentro do diretório 'views'
~ path.join(baseURL, 'exemplo') - junta o valor de baseURL (que nesse caso é 'pages') com a string 'exemplo', gerando assim o caminho para o arquivo (que completo ficaria 'views/pages/exemplo.ejs', onde a extensão .ejs é adicionada automaticamente pelo servidor)