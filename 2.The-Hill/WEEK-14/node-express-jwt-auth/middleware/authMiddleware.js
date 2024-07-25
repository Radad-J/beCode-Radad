const jwt = require("jsonwebtoken");
const User = require('../models/User');

const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;
    //check if exists jwt
    if(token) {
        jwt.verify(token, 'net ninja secret',(err, decodeToken) => {
            if(err) {
                console.log(err.message);
                res.redirect('/login');
            } else {
                console.log(decodeToken);
                next();
            }
        });
    }else {
        res.redirect('/login');
    }
}
//check current user

const checkUser =  (req, res, next) => {
    const token = req.cookies.jwt;
        //check if exists jwt
        if(token) {
            jwt.verify(token, 'net ninja secret', async ( err, decodeToken) => {
                if(err) {
                    res.locals.user = null;
                    next();
                } else {
                    let user = await User.findById(decodeToken.id);
                    res.locals.user = user;
                    next();
                }
            });
        }else {
            res.locals.user = null;
            next();
        }
}
module.exports = { requireAuth, checkUser};