// importar a dependência do sqlite3
const sqlite3 = require("sqlite3").verbose();

// criar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db");

// exportando o banco de dados
module.exports = db;

// utilizar o objeto de banco de dados para as nossas operações
// db.serialize( () => {
    // com comandos SQL:
    
    // 1 - criar uma tabela
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS places (
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         image TEXT,
    //         name TEXT,
    //         address TEXT,
    //         address2 TEXT,
    //         state TEXT,
    //         city TEXT,
    //         items TEXT       
    //     );
    // `);

    // // 2 - inserir dados na tabela
    // const query = `
    // INSERT INTO places (
    //     image,
    //     name,
    //     address,
    //     address2,
    //     state,
    //     city,
    //     items
    // ) VALUES (?,?,?,?,?,?,?);
    // `

    // const values = [
    //     "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    //     "Papersider",
    //     "Guilherme Gemballa, Jardim América",
    //     "Nº 260",
    //     "Santa Catarina",
    //     "Rio do Sul",
    //     "Papéis e Papelão"
    // ];

    // function afterInsertData(error) {
    //     if(error) {
    //         return console.log(error);
    //     }

    //     console.log("Cadastrado com sucesso");
    //     console.log(this);
    // }

    // db.run(query, values, afterInsertData);

    // 3 - consultar dados da tabela
    // db.all(`SELECT * FROM places`, function(error, rows) {
    //     if(error) {
    //         return console.log(error);
    //     }
        
    //     console.log("Aqui estão seus registros: ");
    //     console.log(rows);
    // });
    
    // 4 - deletar um dado da tabela
//     db.run(`DELETE FROM places WHERE id = ?`, [4], function(error) {
//         if(error) {
//             return console.log(error);
//         }
        
//         console.log("Registro deletado com sucesso!");    
//     });
// })