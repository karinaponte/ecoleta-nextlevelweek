const express = require("express");
const server = express();

// configurar pasta pública
server.use(express.static("public"))

// Utilizando template engine
const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
    express: server,
    noCache: true
}); 

// configurar caminhos da minha aplicação

// página inicial (index)
// req: Requisição
// res: Resposta
server.get("/", (req, res) => {
    return res.render("index.html", {title: "Um título"});
});

// create-point
server.get("/create-point", (req, res) => {
    return res.render("create-point.html");
});

// search-results
server.get("/search-results", (req, res) => {
    return res.render("search-results.html");
});

// ligar o servidor
server.listen(3000);