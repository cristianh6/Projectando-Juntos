const fs = require('fs');
const path = require('path');

const users = require('../data/users.json');

module.exports = {
    index: (req, res) => {
        return res.render("index", {
            title: "Home"
        });
    },

    aboutUs: (req, res) => {
        return res.render("aboutus", {
            title: "Sobre nosotros"
        });
    }
}