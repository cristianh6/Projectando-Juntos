const fs = require('fs');
const path = require('path');

const users = require('../data/users.json');

module.exports = {
    register: (req, res) => {
        return res.render("users/register", {
            title: "Registrarse"
        });
    },

    login: (req, res) => {
        return res.render("users/login", {
            title: "Ingresar"
        });
    }
}