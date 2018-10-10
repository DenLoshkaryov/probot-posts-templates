const express = require('express');
const app = express();
const postsCtrl = require('./controllers/posts');

app.use(require('morgan')('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/libs', express.static('./libs'));
app.use('/assets', express.static('./assets'));

app.get('/templates/:id', postsCtrl.sendPost);

module.exports = app;