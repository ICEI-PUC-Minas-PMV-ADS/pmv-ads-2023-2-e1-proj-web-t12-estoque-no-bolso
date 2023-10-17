{\rtf1\ansi\ansicpg1252\cocoartf1348\cocoasubrtf170
{\fonttbl\f0\fnil\fcharset0 HelveticaNeue;}
{\colortbl;\red255\green255\blue255;}
\paperw11900\paperh16840\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\sl320

\f0\fs24 \cf0 \expnd0\expndtw0\kerning0
//\
//\
// Disciplina: Trabalho Interdisciplinar - Aplica\'e7\'f5es Web\
//Estoque no Bolso - ADS Turma 12\
//C\'f3digo LoginApp baseado no exemplo\
\'a0do c\'f3digo do professor Rommel Vieira Carneiro (rommelcarneiro@gmail.com) para alunos de primeiro per\'edodo\'a0\
\
\
// P\'e1gina inicial de Login\
const LOGIN_URL = "login.html";\
\
// Objeto para o banco de dados de usu\'e1rios baseado em JSON\
var db_usuarios = \{\};\
\
// Objeto para o usu\'e1rio corrente\
var usuarioCorrente = \{\};\
\
// fun\'e7\'e3o para gerar c\'f3digos rand\'f4micos a serem utilizados como c\'f3digo de usu\'e1rio\
// Fonte: https://stackoverflow.com/questions/105034/how-to-create-guid-uuid\
function generateUUID() \{ // Public Domain/MIT\
\'a0 \'a0 var d = new Date().getTime();//Timestamp\
\'a0 \'a0 var d2 = (performance && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported\
\'a0 \'a0 return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) \{\
\'a0 \'a0 \'a0 \'a0 var r = Math.random() * 16;//random number between 0 and 16\
\'a0 \'a0 \'a0 \'a0 if(d > 0)\{//Use timestamp until depleted\
\'a0 \'a0 \'a0 \'a0 \'a0 \'a0 r = (d + r)%16 | 0;\
\'a0 \'a0 \'a0 \'a0 \'a0 \'a0 d = Math.floor(d/16);\
\'a0 \'a0 \'a0 \'a0 \} else \{//Use microseconds since page-load if supported\
\'a0 \'a0 \'a0 \'a0 \'a0 \'a0 r = (d2 + r)%16 | 0;\
\'a0 \'a0 \'a0 \'a0 \'a0 \'a0 d2 = Math.floor(d2/16);\
\'a0 \'a0 \'a0 \'a0 \}\
\'a0 \'a0 \'a0 \'a0 return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);\
\'a0 \'a0 \});\
\}\
\
\
// Dados de usu\'e1rios para serem utilizados como carga inicial\
const dadosIniciais = \{\
\'a0 \'a0 usuarios: [\
\'a0 \'a0 \'a0 \'a0 \{ "id": generateUUID (), "login": "admin", "senha": "123", "nome": "Administrador do Sistema", "email": "admin@abc.com"\},\
\'a0 \'a0 \'a0 \'a0 \{ "id": generateUUID (), "login": "user", "senha": "123", "nome": "Usuario Comum", "email": "user@abc.com"\},\
\'a0 \'a0 ]\
\};\
\
\
// Inicializa o usuarioCorrente e banco de dados de usu\'e1rios da aplica\'e7\'e3o de Login\
function initLoginApp () \{\
\'a0 \'a0 // PARTE 1 - INICIALIZA USUARIOCORRENTE A PARTIR DE DADOS NO LOCAL STORAGE, CASO EXISTA\
\'a0 \'a0 usuarioCorrenteJSON = sessionStorage.getItem('usuarioCorrente');\
\'a0 \'a0 if (usuarioCorrenteJSON) \{\
\'a0 \'a0 \'a0 \'a0 usuarioCorrente = JSON.parse (usuarioCorrenteJSON);\
\'a0 \'a0 \}\
\'a0 \'a0\'a0\
\'a0 \'a0 // PARTE 2 - INICIALIZA BANCO DE DADOS DE USU\'c1RIOS\
\'a0 \'a0 // Obtem a string JSON com os dados de usu\'e1rios a partir do localStorage\
\'a0 \'a0 var usuariosJSON = localStorage.getItem('db_usuarios');\
\
\'a0 \'a0 // Verifica se existem dados j\'e1 armazenados no localStorage\
\'a0 \'a0 if (!usuariosJSON) \{ \'a0// Se N\'c3O h\'e1 dados no localStorage\
\'a0 \'a0 \'a0 \'a0\'a0\
\'a0 \'a0 \'a0 \'a0 // Informa sobre localStorage vazio e e que ser\'e3o carregados os dados iniciais\
\'a0 \'a0 \'a0 \'a0 alert('Dados de usu\'e1rios n\'e3o encontrados no localStorage. \\n -----> Fazendo carga inicial.');\
\
\'a0 \'a0 \'a0 \'a0 // Copia os dados iniciais para o banco de dados\'a0\
\'a0 \'a0 \'a0 \'a0 db_usuarios = dadosIniciais;\
\
\'a0 \'a0 \'a0 \'a0 // Salva os dados iniciais no local Storage convertendo-os para string antes\
\'a0 \'a0 \'a0 \'a0 localStorage.setItem('db_usuarios', JSON.stringify (dadosIniciais));\
\'a0 \'a0 \}\
\'a0 \'a0 else \'a0\{ \'a0// Se h\'e1 dados no localStorage\
\'a0 \'a0 \'a0 \'a0\'a0\
\'a0 \'a0 \'a0 \'a0 // Converte a string JSON em objeto colocando no banco de dados baseado em JSON\
\'a0 \'a0 \'a0 \'a0 db_usuarios = JSON.parse(usuariosJSON); \'a0 \'a0\
\'a0 \'a0 \}\
\};\
\
\
// Verifica se o login do usu\'e1rio est\'e1 ok e, se positivo, direciona para a p\'e1gina inicial\
function loginUser (login, senha) \{\
\'a0 \'a0\'a0\
\'a0 \'a0 // Verifica todos os itens do banco de dados de usuarios\'a0\
\'a0 \'a0 // para localizar o usu\'e1rio informado no formulario de login\
\'a0 \'a0 for (var i = 0; i < db_usuarios.usuarios.length; i++) \{\
\'a0 \'a0 \'a0 \'a0 var usuario = db_usuarios.usuarios[i];\
\'a0 \'a0 \'a0 \'a0\'a0\
\'a0 \'a0 \'a0 \'a0 // Se encontrou login, carrega usu\'e1rio corrente e salva no Session Storage\
\'a0 \'a0 \'a0 \'a0 if (login == usuario.login && senha == usuario.senha) \{\
\'a0 \'a0 \'a0 \'a0 \'a0 \'a0 usuarioCorrente.id = usuario.id;\
\'a0 \'a0 \'a0 \'a0 \'a0 \'a0 usuarioCorrente.login = usuario.login;\
\'a0 \'a0 \'a0 \'a0 \'a0 \'a0 usuarioCorrente.email = usuario.email;\
\'a0 \'a0 \'a0 \'a0 \'a0 \'a0 usuarioCorrente.nome = usuario.nome;\
\'a0 \'a0 \'a0 \'a0 \'a0 \'a0\'a0\
\'a0 \'a0 \'a0 \'a0 \'a0 \'a0 // Salva os dados do usu\'e1rio corrente no Session Storage, mas antes converte para string\
\'a0 \'a0 \'a0 \'a0 \'a0 \'a0 sessionStorage.setItem ('usuarioCorrente', JSON.stringify (usuarioCorrente));\
\
\'a0 \'a0 \'a0 \'a0 \'a0 \'a0 // Retorna true para usu\'e1rio encontrado\
\'a0 \'a0 \'a0 \'a0 \'a0 \'a0 return true;\
\'a0 \'a0 \'a0 \'a0 \}\
\'a0 \'a0 \}\
\
\'a0 \'a0 // Se chegou at\'e9 aqui \'e9 por que n\'e3o encontrou o usu\'e1rio e retorna falso\
\'a0 \'a0 return false;\
\}\
\
// Apaga os dados do usu\'e1rio corrente no sessionStorage\
function logoutUser () \{\
\'a0 \'a0 usuarioCorrente = \{\};\
\'a0 \'a0 sessionStorage.setItem ('usuarioCorrente', JSON.stringify (usuarioCorrente));\
\'a0 \'a0 window.location = LOGIN_URL;\
\}\
\
function addUser (nome, login, senha, email) \{\
\'a0 \'a0\'a0\
\'a0 \'a0 // Cria um objeto de usuario para o novo usuario\'a0\
\'a0 \'a0 let newId = generateUUID ();\
\'a0 \'a0 let usuario = \{ "id": newId, "login": login, "senha": senha, "nome": nome, "email": email \};\
\'a0 \'a0\'a0\
\'a0 \'a0 // Inclui o novo usuario no banco de dados baseado em JSON\
\'a0 \'a0 db_usuarios.usuarios.push (usuario);\
\
\'a0 \'a0 // Salva o novo banco de dados com o novo usu\'e1rio no localStorage\
\'a0 \'a0 localStorage.setItem('db_usuarios', JSON.stringify (db_usuarios));\
\}\
\
function setUserPass () \{\
\
\}\
\
\
// Inicializa as estruturas utilizadas pelo LoginApp\
initLoginApp ();\
}