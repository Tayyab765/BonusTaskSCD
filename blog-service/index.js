const express = require('express');
const app = express();
app.use(express.json());

const posts = [
  { id: 1, title: 'First Post', content: 'This is the first blog post.' }
];

app.get('/posts', (req, res) => res.json(posts));
app.post('/posts', (req, res) => {
  const post = { id: posts.length + 1, ...req.body };
  posts.push(post);
  res.status(201).json(post);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Blog Service running on port ${PORT}`));