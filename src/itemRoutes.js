var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "carolinevanaerschot_be"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM travaux_global", function(err, result, fields) {
    if (err) throw err;

    console.log(result[2].Nom_travaux);
  });
});
