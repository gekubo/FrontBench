var data = {
  "companies": [
    {
      "name": "Metropol",
      "address": "123 Merendol Avenue",
      "postal": 287190,
      "phone": 7127912933,
      "email": "info@metropol.com"
    },
    {
      "name": "Conoscupia",
      "address": "456 Frigidol Street",
      "postal": 233232,
      "phone": 679865542343,
      "email": "admin@conoscupia.com"
    }
  ]
};

/* // Esto es lo mismo pero por pasos
var template = $("#template").html();

var compile = Handlebars.compile(template);

var html = compile(data);

$("#container").append(html);

*/

var compile = Handlebars.compile($("#template").html());

$("#container").append(compile(data));