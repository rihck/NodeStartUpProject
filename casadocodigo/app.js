var express = require('express');
var app = express();

app.get('/products', (req, res) => {
    res.send("<html><body><h1>Listing Products</h1></body></html>");
});

var portToListen = 3000;
app.listen(portToListen, () => console.log('Server Running! =)'));
