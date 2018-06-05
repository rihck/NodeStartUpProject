module.exports = (app) => {
    app.get('/products', (req, res) => {
        var mysql = require('mysql');
        var connection = mysql.createConnection({
            host : '127.0.0.1',
            user : 'root',
            password : '12345',
            database : 'codehouse_nodejs'
        });

        connection.query('select * from books', (err, results) => {
            if (err) console.log('Deu erro!');
            
            console.log(results);
            res.send(results);
        });

        connection.end();
        //res.render("products/list");
    });
}
