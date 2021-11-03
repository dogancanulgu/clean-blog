const express = require('express'); // import express

const app = express(); // start express

// show object
app.get('/', (req, res) => {
  const blog = {
    id: 1,
    title: 'Blog title',
    description: 'Blog description',
  };
  res.send(blog);
});

// port
const port = 3000;
app.listen(port, () => {
  console.log(`Server has been bounded at ${port}.`);
});
