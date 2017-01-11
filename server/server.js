'use strict';

var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');
var vm = require('./validator.js');

var app = express();
app.use(bodyParser.json());

var con = mysql.createConnection({
  host: "localhost",
  user: "'root'",
  password: "cerna2",
  database: "secretprojects"
});

app.use(express.static('../client'));

app.post('/exam', function(req, res) {
  if (vm.validator(req.body) === false) {
    console.log(req.body);
    res.send({'status': 'error', 'message': 'thank you'})
    console.log('nem jo')
  } else if (vm.validator(req.body) === true) {
    console.log('jo');
    con.query('SELECT project_name FROM projects;', function(err, rows){
      if (err) {
        console.log(err);
      }
      var allRow = rows.map(function(rows) {
        return rows.project_name;
      });
      var response = {'status': 'ok', 'projects': allRow}
      console.log(rows);
      res.send(response);
    });
  }
});

app.listen(3000);
