// JSON
// JavaScript Object Notation (JSON) é um formato de organização de dados, 
// compostos por um conjunto de chave e valor.
// As aspas duplas são obrigatórias, tanto na chave quanto no valor quando este for uma 'String';


{
    "id": 1,
    "nome": "Gustavo",
    "email": "gustavo@origamid.com"
};




// Valores 
// Os valores podem ser números, strings, boolean, arrays, objetos e null

{
    "id": 1,
    "faculdade": true,
    "pertences": [
      "lapis",
      "caneta",
      "caderno"
    ],
    "endereco": {
      "cidade": "Rio de Janeiro",
      "pais": "Brasil"
    },
    "casado": null
};



// Arrays e Objetos
// É comum possuirmos array's com objetos em cada valor da array.
// Cuidado para não colocar vírgula no último item do objeto ou array.

[
  {
    "id": 1,
    "aula": 'JavaScript',
    "tempo": '25min'
  },
  {
    "id": 2,
    "aula": 'HTML',
    "tempo": '15min'
  },
  {
    "id": 3,
    "aula": 'CSS',
    "tempo": '10min'
  }
];



// JSON.PARSE() e JSON.STRINGIFY()
// 'JSON.parse()' irá transformar um texto JSON em um objeto JavaScript
// 'JSON.stringify()' irá transformar um objeto JavaScript em uma string no formato JSON.

const textoJSON = '{"id": 1, "titulo": "JavaScript", "tempo": "25min"}';
const textoOBJ = JSON.parse(textoJSON);  // Transforma a 'string' em JSON

const enderecoOBJ = {
  cidade: 'Rio de Janeiro',
  rua: 'Ali Perto',
  pais: 'Brasil',
  numero: 50,
};

const enderecoJSON = JSON.stringify(enderecoOBJ); // Transforma o JSON em 'string'
console.log(enderecoJSON);



// Exemplo Real
// Podemos guardar por exemplo no 'localStorage', uma 'string' como valor de uma propriedade.
// E retornar essa 'string' como um objeto.

const configuracoes = {
  player: 'Google API',
  tempo: 25.5,
  aula: '2-1 JavaScript',
  vitalicio: true,
};

localStorage.configuracoes = JSON.stringify(configuracoes);
const pegarConfiguracoes = JSON.parse(localStorage.configuracoes);
