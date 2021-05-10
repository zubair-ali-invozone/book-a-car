const express = require('express');
const app = express();

const jwt = require('jsonwebtoken');
const User = require('../models/User');

registerUser = async (req, res) => {
    if (req.body.first_name == "") {
        return res.json({
            code: "401",
            msg: "First name is required."
        }, 401);
    }

    if (req.body.last_name == "") {
        return res.json({
            code: "401",
            msg: "Last name is required."
        }, 401);
    }

    if (req.body.email == "") {
        return res.json({
            code: "401",
            msg: "Email is required."
        }, 401);
    }

    if (req.body.password == "") {
        return res.json({
            code: "401",
            msg: "Password is required."
        }, 401);
    }

    if (req.body.password !== req.body.confirm_password) {
        return res.json({
            code: "401",
            msg: "Password and confirm password should be same."
        }, 401);
    }

    if (req.body.role_id == "") {
        return res.json({
            code: "401",
            msg: "Role should be User or Vendor"
        }, 401);
    }

    const check = await User.findOne({
        attributes: ['id', 'email'],
        where: {
            email: req.body.email
        }
    });

    if (check) {
        return res.json({
            code: "401",
            msg: "Email already exist. Please use a different Email."
        }, 401);
    } else {
        const data = await User.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password,
            role_id: req.body.role_id
        });
        if (data) {
            return res.json({
                code: "200",
                msg: "Registration successfully.",
                _token: jwt.sign({data: req.body.username}, process.env.PRIVATE_KEY, {expiresIn: '30d'})
            }, 401);
        } else {
            return res.json({
                code: "401",
                msg: "Email already exist. Please use a different Email."
            }, 401);
        }
    }
}

module.exports = {
    registerUser: registerUser
}