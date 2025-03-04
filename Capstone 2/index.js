import express from 'express';
import bodyParser from 'body-parser';
import e from 'express';

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/new-post", (req, res) => {
    res.render("new-post.ejs");
});

app.listen(port, () => {
    console.log(`Listening on port ${3000}`);
});