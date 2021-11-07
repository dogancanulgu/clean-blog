const express = require('express'); // import express
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const ejs = require('ejs');
const postControllers = require('./controllers/postControllers');
const pageControllers = require('./controllers/pageControllers');

const app = express(); // start express

// connect db
mongoose
  .connect(
    'mongodb+srv://dogancan:iIbCikh189LjTvFq@cluster0.py8zw.mongodb.net/clean-blog-db?retryWrites=true&w=majority'
  )
  .then(() => console.log('DB Connected!'))
  .catch((err) => console.log(err));

// template engine
app.set('view engine', 'ejs');

// middleware
app.use(express.static('public')); // static web
app.use(express.urlencoded({ extended: true })); // reading post
app.use(express.json());
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);

// routes
app.get('/', postControllers.getAllPosts);
app.get('/posts/:id', postControllers.getPost);
app.post('/posts', postControllers.createPost);
app.put('/posts/:id', postControllers.updatePost);
app.delete('/posts/:id', postControllers.deletePost);

app.get('/about', pageControllers.getAboutPage);
app.get('/add', pageControllers.getAddPage);
app.get('/posts/edit/:id', pageControllers.getEditPage);

// port
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server has been bounded at ${port}.`);
});
