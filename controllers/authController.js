const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const app = express();

auth = async (req, res) => {
    if (req.body.username == "") {
        return res.json({
            code: "401",
            msg: "Username is required."
        }, 401);
    }

    if (req.body.password == "") {
        return res.json({
            code: "401",
            msg: "Password is required."
        }, 401);
    }

    const check = await User.findOne({
        attributes: ['id'],
        where: {
            email: req.body.username,
            password: req.body.password
        }
    });

    if (check) {
        return res.json({
            code: "200",
            msg: "Login Successfully.",
            email: req.body.username,
            _token: jwt.sign({data: req.body.username}, process.env.PRIVATE_KEY, {expiresIn: '30d'})
        }, 200);
    } else {
        return res.json({
            code: "401",
            msg: "Username or Password incorrect.",
        }, 401);
    }
}

module.exports = {
    auth: auth
}