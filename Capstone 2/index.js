import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/new-post", (req, res) => {
    res.render("new-post.ejs");
});

// can you do a loop here to get each post?  or a placeholder for all of them?
// will need to check to make sure that it exists.
app.get("/sample-post1", (req, res) => {
    res.render("sample-post1.ejs");
});

app.get("/sample-post2", (req, res) => {
    res.render("sample-post2.ejs");
});

app.get("/sample-post3", (req, res) => {
    res.render("sample-post3.ejs");
});

app.listen(port, () => {
    console.log(`Listening on port ${3000}`);
});