const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

tokenVerification = async (req, res, next) => {
    let authorization = req.headers.authorization;
    if (authorization) {
        let token = authorization.split(' ')[1];
        jwt.verify(token, process.env.PRIVATE_KEY, (err, decoded) => {
            if (err) {
                return res.json({
                    code: "401",
                    msg: "Token error.",
                    token: token,
                    error: err
                }, 401);
            } else {
                next();
            }
        });
    } else {
        return res.json({
            code: "401",
            msg: "Token not found.",
        }, 401);
    }
}

module.exports = {
    tokenVerification: tokenVerification
}