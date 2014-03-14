/**
 * GET /
 * Home page.
 */

var Chance = require('chance');

var articles = [];

for (var i = 0; i < 6; ++i) addArticle();
  
function addArticle () {
  articles.push({
  dirigidoA: "Santiago Fisas",
    pregunta: "Sr. Fisas, Me gustaría saber si usted ya sabe si opta a la reelección como europarlamentario. Las personas elegidas nos representarán durante cinco años. A nueve semanas de las elecciones europeas, ¿qué razones puede dar a la ciudadanía respecto a que el Partido Popular no haya hecho pública ninguna candidatura? Gracias, saludos cordiales,",
    img: "http://lorempixel.com/400/330/business",
    respuesta: "Gracias por su pregunta. Al respecto………..."+(new Chance).paragraph({sentences: Math.floor(Math.random()*2)+1})
  });
  articles.push({
    dirigidoA: "Alejandro Colldefors",
    pregunta: "Sr. Colldefors, Hasta ahora ha desempeñado usted el cargo de Responsable de Relaciones Internacionales de la empresa multinacional Abertis.¿Hasta qué punto cree que esta experiencia pueda influir en sus decisiones como europarlamentario? Gracias, saludos cordiales,",
    img: "http://lorempixel.com/400/330/business",
    respuesta: "Gracias por su pregunta. Al respecto………..."+(new Chance).paragraph({sentences: Math.floor(Math.random()*2)+1})
  });
}

exports.index = function(req, res) {
  res.render('home', {
    title: 'Home',
    articles: articles
  });
};