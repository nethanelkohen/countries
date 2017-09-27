var express = require('express');
var app = express();
var countries = require("./countries.json");

app.set('view engine', 'pug');
app.use(express.static(__dirname));

app.get("/:code", function(req, res) {
  var code = req.params.code.toUpperCase();

  if (!countries[code]) {
    res.status(400).send('<h1>uh oh! page not found!</h1>');
    return;
  }

  res.render("country", {
    country: countries[code]
  });
});

app.get('*', function(request, response) {
  response.status(400).send('<h1>uh oh! page not found!</h1>');
});

app.listen(3000, function() {
  console.log('Listening on port 3000');
});
