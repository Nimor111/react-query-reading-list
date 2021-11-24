const express = require('express');
const cors = require('cors');

const app = express();
const port = 8000;

let posts = [
  {
    id: 1,
    title: "Post 1",
    author: "Testy testerson",
    description: "This is the first post"
  },
  {
    id: 2,
    title: "Post 2",
    author: "Besty besterson",
    description: "This is the second post"
  }];

app.use(cors());

app.get("/posts", (req, res) => {
  return res.status(200).send(posts);
})

app.get("/posts/:postId", (req, res) => {
  const foundPosts = posts.filter(post => post.id === parseInt(req.params.postId));

  return res.status(200).send(foundPosts.length > 0 ? foundPosts[0] : { error: "Post not found" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
