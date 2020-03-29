const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
let request = require("request");
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

let cases;

let options = {
  method: 'GET',
  url: 'https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php',
  headers: {
    'x-rapidapi-host': 'coronavirus-monitor.p.rapidapi.com',
    'x-rapidapi-key': '9fe6c21ad6msh120939c9f0d124bp18a1dfjsn84f4435eb88d'
  }
};


request(options, function(error, response, body) {

  if (error) throw new Error(error);
  let obj = JSON.parse(body);
  cases = obj.total_cases;
  console.log(cases);
});


let items = ['Quaruntine until orders are lifted', 'Flatten the Curve', 'Get back to work!'];




app.get("/", function(req, res) {

  let currentDay = date.getDate();

  res.render("list", {
    today: currentDay,
    newItems: items,
    cases: cases
  });

});

app.get("/about", function(req, res) {

  res.render("about", {

  });

});

app.post('/', function(req, res) {
  items.push(req.body.newItem);
  console.log(items);

  res.redirect('/');
})


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
