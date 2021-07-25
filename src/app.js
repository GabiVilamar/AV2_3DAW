const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

// ==> Rotas da API:
const index = require('./routes');
const productRoute = require('./routes/product.routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use('/', index);
app.use('/', productRoute);

module.exports = app;