const express = require('express');
const app = express();
const connection = require('./database/database');


const categoriesController = require('./categories/CategoriesController');
const articlesController = require('./articles/ArticlesController');


const Article = require('./articles/Articles');
const Category = require('./categories/Categories');




//view engine
app.set('view engine', 'ejs');

//Static files
app.use(express.static('public'));

//Body parser descontinuado, entao usando o proprio express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//database connection
connection
    .authenticate()
    .then(() => {
        console.log('Conectado ao banco de dados!');
    }).catch((err) => {
        console.log(err);
    })


//rotas
app.get('/', (req, res) => {
    res.render('index');

})
app.use('/', categoriesController);
app.use('/', articlesController);



//executar o servidor
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000!');
});