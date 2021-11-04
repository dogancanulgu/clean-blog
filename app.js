const express = require('express'); // import express
const ejs = require('ejs');
const app = express(); // start express

// template engine
app.set('view engine', 'ejs');

// middleware
app.use(express.static('public')); // static web

// routes
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/add', (req, res) => {
  res.render('add');
});

// port
const port = 3000;
app.listen(port, () => {
  console.log(`Server has been bounded at ${port}.`);
});
