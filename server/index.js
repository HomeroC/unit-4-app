const express = require("express");
const cors = require("cors");
const { register, login } = require("./controllers/auth");
const { getAllPosts, getCurrentUserPosts, addPost, editPost, deletePost } = require("./controllers/posts");
const app = express();
const PORT = process.env.PORT || 4004;

app.use(express.json());
app.use(cors());

app.post('/register', register)
app.post('/login', login)

app.get('/posts', getAllPosts)
app.get('/userposts/:userId', getCurrentUserPosts)
app.post('/posts', addPost)
app.put('/posts/:id', editPost)
app.delete('/posts/:id', deletePost)

app.listen(PORT, () => console.log(`Running on Port ${PORT}`));
