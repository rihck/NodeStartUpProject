var express = require('express');
var app = express();

app.set('view engine','ejs');

app.get('/products', (req, res) => {
    res.render("products/list");
});

var portToListen = 3000;
app.listen(portToListen, () => console.log('Server Running! =)'));
