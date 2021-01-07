const initFirebase = require('./functions/initfirebase.js');
initFirebase();

//Init firebase
const express = require('express');

const app = express();

//React Routes
var routes = require('./routes/routes.js');

app.use('',routes);

//Express PORT
const PORT = 8080;

app.listen(PORT, () => console.info(`server has started on ${PORT}`))