const express = require('express'); // import express
const mongoose = require('mongoose');
const ejs = require('ejs');
const Post = require('./models/Post');

const app = express(); // start express

// connect db
mongoose.connect('mongodb://localhost/cleanblog-test-db');

// template engine
app.set('view engine', 'ejs');

// middleware
app.use(express.static('public')); // static web
app.use(express.urlencoded({ extended: true })); // reading post
app.use(express.json());

// routes
app.get('/', async (req, res) => {
  const posts = await Post.find({});
  res.render('index', { posts });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/add', (req, res) => {
  res.render('add');
});

app.post('/posts', async (req, res) => {
  await Post.create(req.body);
  res.redirect('/');
});

// port
const port = 3000;
app.listen(port, () => {
  console.log(`Server has been bounded at ${port}.`);
});
