const express = require('express');
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const register = require('../controllers/registerController');
const authController = require('../controllers/authController');
const tokenVerification = require('../controllers/tokenVerification');

app.post('/register', register.registerUser);
app.post('/signup', authController.auth);
app.post('/login', authController.auth);

app.post('/forgot-password', (req, res) => {
    res.send('This is a forgot-password route');
});

app.post('/user', tokenVerification.tokenVerification, (req, res) => {
    res.send('token verify');
});
app.post('/vendor', tokenVerification.tokenVerification);
module.exports = app;