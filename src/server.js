const express = require("express");
const server = express();

// pegar o banco de dados
const db = require("./database/db");

// configurar pasta pública
server.use(express.static("public"));

// habilitar o uso do req.body na nossa aplicação
server.use(express.urlencoded({ extended: true }));

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
    // req.query: Query Strings da nossa url
    //console.log(req.query);

    return res.render("create-point.html");
});

server.post("/savepoint", (req, res) => {
    //req.body: O corpo do nosso formulário
    //console.log(req.body);

    const query = `
    INSERT INTO places (
        image,
        name,
        address,
        address2,
        state,
        city,
        items
    ) VALUES (?,?,?,?,?,?,?);
    `

    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ];

    function afterInsertData(error) {
        if(error) {
            console.log(error);
            return res.send("Erro no cadastro");
        }

        console.log("Cadastrado com sucesso");
        console.log(this);

        return res.render("create-point.html", { saved: true });
    }

    db.run(query, values, afterInsertData);

    
});

// search-results
server.get("/search-results", (req, res) => {

    const search = req.query.search;

    if(search == "") {
        // pesquisa vazia
        return res.render("search-results.html", { total: 0 });
    }

    // pegar os dados do banco de dados
    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(error, rows) {
            if(error) {
                console.log("detalhes dos erro", error);
                return res.render("index.html", { error: error });
            }
            
            const total = rows.length;

            // mostrar a página html com os dados do banco de dados
            return res.render("search-results.html", {places: rows, total: total});
        });

});

// ligar o servidor
server.listen(3000);