const Sequelize = require("sequelize");
const connection = require("../database/database");
const Category = require("../categories/Categories");



const Article = connection.define("articles", {
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },
    slug:{
        type: Sequelize.STRING,
        allowNull: false
    },
    boby:{
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Category.hasMany(Article); // Uma categoria tem muitos artigos
Article.belongsTo(Category); //Um article tem uma categoria ou pertence a uma categoria

Article.sync({force: false}).then(() => {
    console.log("articles table created");
});

module.exports = Article;