var app = require('./config/express')();
var rotasProdutos = require('./app/routes/produtos')(app);

var portToListen = process.env.PORT || 3000;
app.listen(portToListen, () => console.log('Server Running! =)'));
